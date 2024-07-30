const mongoose = require('mongoose');

const incomeLevels = [
    { label: '1', range: [10000, 50000], weight: 0.5 },
    { label: '2', range: [50001, 100000], weight: 1 },
    { label: '3', range: [100001, 150000], weight: 1.5 },
    { label: '4', range: [150001, 200000], weight: 2 },
    { label: '5', range: [200001, 300000], weight: 2.5 },
    { label: '6', range: [300001, 500000], weight: 3 },
    { label: '7', range: [500001, 1000000], weight: 3.5 }
];

const CustomerSchema = new mongoose.Schema({
    username: { type: String, required: true },
    age: { type: Number, required: true },
    incomeLevel: { label: { type: String, required: true }, weight: { type: Number, required: true }},
    educationLevel: { type: String, required: true },
    occupation: { type: String, required: true },
    digitalEngagement: {
        visits: { type: Number, required: true },
        avgTime: { type: Number, required: true }
    },
    purchaseHistory: {
        avgOrderValue: { type: Number, required: true }
    },
    riskSurveyScore: { type: Number, required: true },
    timeToPurchase: { type: Number, required: true },
    financeEducation: { type: Boolean, required: true },
    contentEngagementTime: { type: Number, required: true },
    purchaseConsistency: {
        lastThreeMonths: [{ type: Number, required: true }]
    },
    personOfInterest: { type: Boolean },
    password:{type: String, required: true}
});

// Pre-save hook to calculate risk tolerance and mark as person of interest
CustomerSchema.pre('save', function (next) {
    const customer = this;

    const criteria = {
        age: { weight: 1, range: [25, 60] },
        incomeLevel: { weight: customer.incomeLevel.weight },
        educationLevel: { weight: 1.5, field: [
            "Finance", "Business", "Engineering", "Medicine", 
            "Arts", "Law", "Science", "Commerce", "Management"
        ]},
        occupation: { weight: 1.5, field: [
            "Finance", "Business", "Engineer", "Doctor", "Lawyer", 
            "IT Professional", "Management", "Researcher", "GovtEmployee",
            "Entrepreneur", "Consultant"]
        },
        digitalEngagement: { weight: 1, minVisits: 10, minTime: 30 },
        purchaseHistory: { weight: 1.5, minOrderValue: 500 },
        riskTolerance: { weight: 2 },
        decisionMaking: { weight: 1.5, quickDecision: true },
        financialLiteracy: { weight: 2, financialEducation: true },
        behavioralTraits: { weight: 1, consistentBehavior: true }
    };

    let score = 0;
    let totalWeight = 0;

    if (customer.age >= criteria.age.range[0] && customer.age <= criteria.age.range[1]) {
        score += criteria.age.weight;
    }
    totalWeight += criteria.age.weight;

    score += customer.incomeLevel.weight;
    totalWeight += criteria.incomeLevel.weight;

    if (criteria.educationLevel.field.includes(customer.educationLevel)) {
        score += criteria.educationLevel.weight;
    }
    totalWeight += criteria.educationLevel.weight;

    if (criteria.occupation.field.includes(customer.occupation)) {
        score += criteria.occupation.weight;
    }
    totalWeight += criteria.occupation.weight;

    if (customer.digitalEngagement.visits >= criteria.digitalEngagement.minVisits &&
        customer.digitalEngagement.avgTime >= criteria.digitalEngagement.minTime) {
        score += criteria.digitalEngagement.weight;
    }
    totalWeight += criteria.digitalEngagement.weight;

    if (customer.purchaseHistory.avgOrderValue >= criteria.purchaseHistory.minOrderValue) {
        score += criteria.purchaseHistory.weight;
    }
    totalWeight += criteria.purchaseHistory.weight;

    if (customer.riskSurveyScore >= 7) {
        score += criteria.riskTolerance.weight;
    }
    totalWeight += criteria.riskTolerance.weight;

    if (customer.timeToPurchase <= 10) {
        score += criteria.decisionMaking.weight;
    }
    totalWeight += criteria.decisionMaking.weight;

    if (customer.financeEducation || customer.contentEngagementTime >= 30) {
        score += criteria.financialLiteracy.weight;
    }
    totalWeight += criteria.financialLiteracy.weight;

    const consistentBehavior = customer.purchaseConsistency.lastThreeMonths.every(val => val === customer.purchaseConsistency.lastThreeMonths[0]);
    if (consistentBehavior) {
        score += criteria.behavioralTraits.weight;
    }
    totalWeight += criteria.behavioralTraits.weight;

    // Calculate total score percentage
    const scorePercentage = (score / totalWeight) * 100;

    // Mark as person of interest if scorePercentage is above a threshold, e.g., 70%
    customer.personOfInterest = scorePercentage >= 70;

    next();
});

module.exports = mongoose.model('Customer', CustomerSchema);

const bcrypt = require('bcrypt')
const Customer = require('../models/customerModel')
const jwt = require('jsonwebtoken')
// const mailSender = require('../utils/mailSender')
// const { passwordUpdated } = require('../mails/formats/passwordUpdate')
const incomeLevels = [
    { label: '1', range: [10000, 50000], weight: 0.5 },
    { label: '2', range: [50001, 100000], weight: 1 },
    { label: '3', range: [100001, 150000], weight: 1.5 },
    { label: '4', range: [150001, 200000], weight: 2 },
    { label: '5', range: [200001, 300000], weight: 2.5 },
    { label: '6', range: [300001, 500000], weight: 3 },
    { label: '7', range: [500001, 1000000], weight: 3.5 }
];

exports.signup=async (req, res) => {
    const { username, age, incomeLevelLabel, educationLevel, occupation } = req.body;

    const incomeLevel = incomeLevels.find(level => level.label === incomeLevelLabel);

    if (!incomeLevel) {
        return res.status(400).json({ message: 'Invalid income level' });
    }

    const user = new Customer({
        username,
        age,
        incomeLevel: {
            label: incomeLevel.label,
            weight: incomeLevel.weight
        },
        educationLevel,
        occupation,
        digitalEngagement: {
            visits: 0,
            avgTime: 0
        },
        purchaseHistory: {
            avgOrderValue: 0
        },
        riskSurveyScore: 0,
        timeToPurchase: 0,
        financeEducation: false,
        contentEngagementTime: 0,
        purchaseConsistency: {
            lastThreeMonths: [0, 0, 0]
        }
    });

    try {
        await user.save();
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.bulkSignUp= async (req, res) => {
    try {
        const users = req.body.users.map(user => {
            const incomeLevel = incomeLevels.find(level => level.label === user.incomeLevelLabel);
            if (!incomeLevel) {
                throw new Error(`Invalid income level for user ${user.username}`);
            }
            return {
                ...user,
                incomeLevel: {
                    label: incomeLevel.label,
                    weight: incomeLevel.weight
                }
            };
        });

        const createdUsers = await Customer.insertMany(users);
        res.status(201).json({ message: 'Users created successfully', users: createdUsers });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.login = async (req, res) => {
    try {
      const { username, password, rememberMe } = req.body
      if (!username || !password) {
        return res.status(400).json({
          success: false,
          message: 'Please fill all the details'
        })
      }
      let user
      user = await Customer.findOne({ username })
      if (!user) {
        return res.status(400).json({
          success: false,
          message: 'User is not registered'
        })
      }
  
    //   if (await bcrypt.compare(password, user.password)) {
        if (user.password=password) {
        const payload = {
          id: user._id,
          username: user.username,
        }
        let expiry = process.env.EXPIRY_JWT
  
        if (rememberMe) {
          expiry = process.env.EXPIRY_JWT_REMEMBERED
        }
  
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: expiry
        })
        user = user.toObject()
        user.token = token
        user.password = undefined
  
        res.status(200).json({
          success: true,
          token,
          user,
          message: 'User logged in successfully'
        })
      } else {
        return res.status(403).json({
          success: false,
          message: 'Password incorrect'
        })
      }
    } catch (error) {
      console.error(error)
      return res.status(500).json({
        success: false,
        message: 'Login failure'
      })
    }
  }
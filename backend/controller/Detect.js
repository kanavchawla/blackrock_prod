const Customer = require('../models/customerModel'); // Adjust the path as necessary

// Function to get all customer entries
const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllCustomers
};

// routes/customerRoutes.js
const express = require('express');
const router = express.Router();
const { getAllCustomers } = require('../controller/Detect'); // Adjust the path as necessary

// Route to get all customer entries
router.get('/customers', getAllCustomers);

module.exports = router;

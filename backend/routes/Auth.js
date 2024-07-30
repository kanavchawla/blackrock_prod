const express = require("express");
const router = express.Router();
const {bulkSignUp,login,signup
} = require("../controller/Auth");

const { auth, } = require("../middleware/auth");



router.post("/bulk", bulkSignUp);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;  
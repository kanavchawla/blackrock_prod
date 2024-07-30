const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async(req, res, next) => {
    try {
        console.log("Currently going through middleware")
        const token = req.header("Authorization").replace("Bearer ", "");
        console.log(token);

        if(!token) {
            return res.status(401).json({
                success:false,
                message:'Token is missing',
            });
        }
        
        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;

        } catch (error) {
            return res.status(401).json({
                success:false,
                message:'Token is INVALID',
            });
        }
        console.log(req.user.accountType)
        next();

    }
    catch (error) {
        return res.status(401).json({
            success:false,
            message:'Something went wrong while validating the token',
        });
    }
}

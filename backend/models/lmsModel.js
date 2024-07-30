const mongoose = require ("mongoose");

const lmsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    videoTag:{
        type: [String],
        default: []
    }
},{
    timestamps:true
});

module.exports = mongoose.model("lmses", lmsSchema)
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type : String
    },
    email: {
        type : String,
        unique : true, 
        required : true
    },
    country : {
        type : String
    },
    gender: {
        type : String
    }
},{timestamps : true}
);

const User = mongoose.model("user", userSchema);

module.exports = User;

const mongoose = require('mongoose');

const UserDetailsSchema = new mongoose.Schema(
    {
        name : String,
        email : {type : String, unique : true},
        phoneNo : Number,
        password : String,
        confirmPassword : String,
    },
{
    collection : "UserInfo",
}

);



mongoose.model("UserInfo" , UserDetailsSchema )
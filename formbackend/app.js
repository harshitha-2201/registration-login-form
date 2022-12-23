const express = require('express');
const app = express()
app.use(express.json())
const mongoose = require("mongoose");
const cors = require('cors');
app.use(cors());
const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken");
const JWT_SECRET = "mkoiuphnbvgty#rdbh^esaty()hgirfjyhfgtdj"

const mongoUrl = 'mongodb+srv://harshitha:Harshitha@cluster0.2hpyplw.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoUrl,{
    useNewUrlParser : true
}).then(() =>{console.log("Connected to database")})
.catch((e) => console.log(e));




app.listen(7000,() =>{
    console.log("Server started")
})


app.post('/post' , async(req,res) =>{
    console.log(req.body);
    const {data} = req.body
  

    try{
        if(data == "harshitha"){
            res.send({status : "ok"})
        }else{
            res.send({status : "User not found"})
        }
    }catch(error){
        res.send({status : "Something went worng try again"})
    }


});

require('./userDetails');
const User = mongoose.model("UserInfo");

app.post("/register" ,async(req,res) =>{
    const {name , email,phoneNo,password , confirmPassword} = req.body;

    const encryptedPassword = await bcrypt.hash(password , 10)

    try{
        const oldUser = await User.findOne({email});
         if(oldUser){
            return res.send({error : "User Exists"})
         }
        await User.create({
            name,
            email,
            phoneNo,
            password : encryptedPassword,
            confirmPassword,
        });
        res.send({status : 'ok'})
    }catch(error){
        res.send({status : "error"})
    }
});

app.post("/login-user" , async(req,res) =>{
    const {email,password} = req.body;

    const user = await User.findOne({email});
    if(!user){
        return res.json({error : "User not found"});
    }
    if(await bcrypt.compare(password , user.password)){
        const token = jwt.sign({email:user.email} , JWT_SECRET);

        if(res.status(201)){
            return res.json({status : "ok" , data : token});
        }else{
            return res.json({error : "error"});
        }
    }
    res.json({status : "error" , error :"Invalid Password"})
}) 

app.post("/userData", async (req, res) => {
    const { token } = req.body;
    try {
      const user = jwt.verify(token, JWT_SECRET);
      console.log(user);
  
      const useremail = user.email;
      User.findOne({ email: useremail })
        .then((data) => {
          res.send({ status: "ok", data: data });
        })
        .catch((error) => {
          res.send({ status: "error", data: error });
        });
    } catch (error) {}
  });

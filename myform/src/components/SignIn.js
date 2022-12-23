
import React, { useState } from 'react'

const SignIn = () => {

const [user , setUser] = useState({
  email : " ",
  password : " "

})

const {email , password} = user;

const changeHandler = e => {
  setUser({...user , [e.target.name]: e.target.value})
}



const submitHandler = e =>{
  e.preventDefault();
   
  const {email , password} = user;
  console.log(email, password );
   fetch("http://localhost:7000/login-user" ,{
    method : "post",
    crossDomain : true ,
    headers:{
      "Content-Type" : "application/json",
      Accept:"application/json",
      "Access-Control-Allow-Origin" : "*",
    },
    body:JSON.stringify({
      
      email,
      password,
      
    }),
  })
  .then((res) => res.json())
  .then((data) =>{
    console.log(data , 'userRegister')
    if(data.status === "ok"){
      alert("login Succesful")
      window.localStorage.setItem("token",data.data)
     window.location.href = "./userData"
    }

    })
     
}

  return (
  <form onSubmit={submitHandler}>
    <div style={{padding : 100 }} className = "background">
       
       <h1  style={{textDecoration : "underline", fontWeight : "bold"}}>SIGN IN</h1>
         <div className='border'>
          <label>Email</label><br/>
          <input type = "email" name = "email" value = {email} onChange = {changeHandler}/>
          <label>Password</label><br/>
          <input type = "password" name = "password" value = {password}  onChange = {changeHandler}/>
          <button className='button'>Submit</button>
          
     </div>
    
    </div>
    </form>
  )
}

export default SignIn

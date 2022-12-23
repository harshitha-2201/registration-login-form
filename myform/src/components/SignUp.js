
import React ,  { useState  } from 'react'



const SignUp = () => {
  
  const [user , setUser] = useState({
    name : '',
    email : "",
    phoneNo : " ",
    password : " ",
    confirmPassword: " "
  })

  const { name ,email , phoneNo, password, confirmPassword } = user;

  const changeHandler = e =>{
    setUser({...user , [e.target.name]:e.target.value})
  }
  const submitHandler = e =>{
    e.preventDefault();
  
  
  
  
  
    const {name,email,phoneNo, password,confirmPassword} = user;
    console.log(name ,email,phoneNo , password , confirmPassword);

     fetch("http://localhost:7000/register" ,{
      method : "post",
      crossDomain : true ,
      headers:{
        "Content-Type" : "application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin" : "*",
      },
      body:JSON.stringify({
        name,
        email,
        phoneNo,
        password ,
        confirmPassword,
      }),
    })
    .then((res) => res.json())
    .then((data) =>{
      console.log(data , 'userRegister')
     alert("register sucessfully")
     
      
      })
      if (password !== confirmPassword){
        alert("passwords not matching")
      }else{
        console.log(user)
      }
    }
  return (
  <form onSubmit={submitHandler}>
   <div style={{padding : 100 }} className='background' >
     <h1  style={{textDecoration : "underline" , fontWeight :"bold"}} >SIGN UP</h1>
      <div className='border'>
       <div >
         <label>Name</label><br/>
         <input type = "name" name='name' value = {name}  onChange = {changeHandler}/>
        </div>
        <div>
         <label>Email</label><br/>
         <input type = "email" name='email'  value = {email} onChange = {changeHandler}/>
        </div>
        <div>
         <label>PhoneNo</label><br/>
         <input type = "phoneNo" name='phoneNo'  value = {phoneNo} onChange = {changeHandler}/>
        </div>
        <div>
          <label>Password</label><br/>
          <input type = "password" name='password'  value = {password} onChange = {changeHandler}/>
        </div>
        <div>
          <label>ConfirmPassword</label><br/>
           <input type = "confirmPassword" name='confirmPassword'  value = {confirmPassword} onChange = {changeHandler}/>
           {password !== confirmPassword ?<p>Passwords are not matching</p> : null}
        </div>
        <button className='button'>Submit</button>
        </div>
        
    </div>
    </form>
  )
}

export default SignUp

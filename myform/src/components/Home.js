import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
  <div className='background' >
     
      <h1 style={{ fontSize: 40, fontWeight : 'bold' , paddingTop : 300,textAlign : "center"}}>Hello Welcome to <span style = {{color:'white'}}>ShopG</span></h1>
    <div style = {{ marginLeft : 300 ,textAlign : "center"}} >
      <p>If you are new <Link to = '/SignUp'   style = {{color : "saddleBrown" , textDecoration : "none"}}>click Here</Link></p>
      <p>Already Exist <Link  to = '/SignIn'   style = {{color : "saddleBrown" , textDecoration : "none"}}>click Here</Link></p>
    </div>
  </div>
  )
}

export default Home

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style = {{fontSize:35 ,color : "wheat" , fontWeight : "bold"}}>ShopG</Navbar.Brand>
          <Nav className="me-auto" style = {{marginLeft : 600}} >
            <Link to = '/' style = {{fontSize:20 ,textDecoration : "none" , color : "white" ,  fontWeight : "bold"}}>Home</Link>
            <Link to = '/signup' style = {{fontSize:20 ,textDecoration : "none" , color : "white" ,  fontWeight : "bold",marginLeft : 100  }}>SignUp</Link>
            <Link to = '/signin' style = {{fontSize:20 ,textDecoration : "none" , color : "white" ,  fontWeight : "bold" ,marginLeft : 100 }}>SignIn</Link>
            <Link to = '/userData' style = {{fontSize:20 ,textDecoration : "none" , color : "white" ,  fontWeight : "bold" ,marginLeft : 100 }}>UserDetails</Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar






















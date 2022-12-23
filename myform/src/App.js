import React from 'react';
import Home from './components/Home'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import NavBar from './components/NavBar';
import AllUserDetails from './components/AllUserDetails'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
       <Route path = '/' element = {<Home/>}></Route>
       <Route path = '/signup' element = {<SignUp/>}></Route>
       <Route path = '/signin' element = {<SignIn/>}></Route>
       <Route path = '/userData'element = {<AllUserDetails/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

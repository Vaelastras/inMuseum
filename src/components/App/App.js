import React from 'react';
import './App.scss';
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";
import Burger from "../Burger/Burger";
import NavBar from "../NavBar/NavBar";

function App() {
  return(
    <>
      <Burger/>
      <NavBar/>
      <Logo/>
      <Footer/>
    </>
  )
}

export default App;

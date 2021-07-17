import React from 'react';
import './App.scss';
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Description from "../Description/Description";
import Partners from "../Partners/Partners";

function App() {
  return(
    <>
      <Header/>
      <About/>
      <Description/>
      <Partners/>
      <Footer/>
    </>
  )
}

export default App;

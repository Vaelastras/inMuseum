import React from 'react';
import './App.scss';
import Header from "../Header/Header";
import About from "../About/About";
import Description from "../Description/Description";
import Afisha from "../Afisha/Afisha";
import Partners from "../Partners/Partners";
import Footer from "../Footer/Footer";


function App() {
  return(
    <>
      <Header/>
      <About/>
      <Description/>
      <Afisha/>
      <Partners/>
      <Footer/>
    </>
  )
}

export default App;

import React from 'react';
import './App.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/main";
import Article from "../Article/Article";


function App() {
  return(
    <>
      <Header/>
      <Article/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App;

import React, {useState} from 'react';
import './App.scss';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleOpenBurgerMenu = () => {
    document.querySelectorAll('.burger__line')
      .forEach(elem => elem.classList.toggle('burger__line_active'));
    setIsBurgerMenuOpen(!isBurgerMenuOpen)
  }

  return(
    <>
      <Header
        isBurgerMenuOpen={isBurgerMenuOpen}
        handleOpenBurgerMenu={handleOpenBurgerMenu}/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App;

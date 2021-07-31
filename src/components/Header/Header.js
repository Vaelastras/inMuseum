import React from "react";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import Burger from "../Burger/Burger";

function Header ({isBurgerMenuOpen, handleOpenBurgerMenu, }) {

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <Logo/>
          {!isBurgerMenuOpen && (<NavBar/>)}
          <Burger
            isBurgerMenuOpen={isBurgerMenuOpen}
            handleOpenBurgerMenu={handleOpenBurgerMenu}/>
        </div>
        {isBurgerMenuOpen && (<div className='header__mobile-bar'>
          <div className="header__mobile-bar-wrapper">
            <NavBar
              handleOpenBurgerMenu={handleOpenBurgerMenu}/>

          </div>
        </div>)}
      </header>
      {isBurgerMenuOpen && (<div className='header__mobile-bar-overlay'/>)}
    </>
  )
}

export default Header;

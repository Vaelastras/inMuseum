import React from "react";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";
import Burger from "../Burger/Burger";

function Header () {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <Logo/>
          <NavBar/>
          <Burger/>
        </div>
        <div className='header__mobile-bar'>
          <div className="header__mobile-bar-wrapper">
            <NavBar/>
          </div>
        </div>
      </header>
      <div className="header__mobile-bar-overlay"/>
    </>
  )
}

export default Header
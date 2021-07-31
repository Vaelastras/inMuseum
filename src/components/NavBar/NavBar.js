import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function NavBar ({handleOpenBurgerMenu}) {

  return (
    <nav className="navigation">
      <Link onClick={handleOpenBurgerMenu} to='../#about' activeClassName='navigation__link_active' className='navigation__link'>Акция</Link>
      <Link onClick={handleOpenBurgerMenu} to='../#description' activeClassName='navigation__link_active' className='navigation__link'>Афиша</Link>
      <Link onClick={handleOpenBurgerMenu} to='../#project' activeClassName='navigation__link_active' className='navigation__link'>Проекты</Link>
      <Link onClick={handleOpenBurgerMenu} to='../#partners' activeClassName='navigation__link_active' className='navigation__link'>Организаторы</Link>
    </nav>
  )
}

export default NavBar;

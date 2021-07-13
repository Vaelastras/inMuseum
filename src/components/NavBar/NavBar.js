import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {
  return (
    <nav className="navigation">
      <NavLink to={'./action'} activeClassName='navigation__link_active' className='navigation__link'>Акция</NavLink>
      <NavLink to={'./afisha'} activeClassName='navigation__link_active' className='navigation__link'>Афиша</NavLink>
      <NavLink to={'./organizators'} activeClassName='navigation__link_active' className='navigation__link'>Организаторы</NavLink>
      <NavLink to={'./projects'} activeClassName='navigation__link_active' className='navigation__link'>Спецпроекты</NavLink>
      <NavLink to={'./parnters'} activeClassName='navigation__link_active' className='navigation__link'>Партнёры</NavLink>
    </nav>
  )
}

export default NavBar;
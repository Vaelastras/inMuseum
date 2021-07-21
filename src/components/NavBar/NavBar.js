import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';

function NavBar () {

  return (
    <nav className="navigation">
      <Link to={'/#about'} activeClassName='navigation__link_active' className='navigation__link'>Акция</Link>
      <Link to={'/afisha'} activeClassName='navigation__link_active' className='navigation__link'>Афиша</Link>
      <Link to={'/organizators'} activeClassName='navigation__link_active' className='navigation__link'>Организаторы</Link>
      <Link to={'/projects'} activeClassName='navigation__link_active' className='navigation__link'>Спецпроекты</Link>
      <Link to={'/#partners'} activeClassName='navigation__link_active' className='navigation__link'>Партнёры</Link>
    </nav>
  )
}

export default NavBar;

import React from "react";
import {Link} from "react-router-dom";
import {projectLogo} from '../../assets/js/constants.js';

function Logo () {
  return (
    <Link to={'./'} className='logo'>
      <img className='logo__picture' src={projectLogo.src} alt={projectLogo.alt} title={projectLogo.title}/>
    </Link>
  )
}

export default Logo;


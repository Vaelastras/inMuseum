import React from "react";
import {projectLogo} from  '../../assets/js/constats.js';

function Logo () {
  return (
    <div className='logo'>
      <img className='logo__picture' src={projectLogo.src} alt={projectLogo.alt} title={projectLogo.title}/>
    </div>
  )
}

export default Logo;


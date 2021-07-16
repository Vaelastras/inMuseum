import React from 'react';

function Burger () {

  function openBurgerMenu () {
    document.querySelectorAll('.burger__line')
      .forEach(elem => elem.classList.toggle('burger__line_active'));
  }

  return (
    <div className="burger" onClick={openBurgerMenu}>
      <span className="burger__line"/>
      <span className="burger__line"/>
      <span className="burger__line"/>
      <span className="burger__line"/>
    </div>
  )
}

export default Burger;

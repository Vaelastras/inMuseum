import React from 'react';

function Burger ({handleOpenBurgerMenu}) {


  return (
    <div className="burger" onClick={handleOpenBurgerMenu}>
      <span className="burger__line"/>
      <span className="burger__line"/>
      <span className="burger__line"/>
      <span className="burger__line"/>
    </div>
  )
}

export default Burger;

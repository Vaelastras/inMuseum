import React from 'react';

function Burger () {

  const burgerSwitcher = () =>  document.querySelectorAll('.burger__line').forEach(line => line.classList.toggle('burger__line_active'));

  return (
    <div className="burger" onClick={burgerSwitcher}>
      <span className="burger__line"/>
      <span className="burger__line"/>
      <span className="burger__line"/>
      <span className="burger__line"/>
    </div>
  )
}

export default Burger;
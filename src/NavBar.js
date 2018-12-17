import React from 'react';

const NavBar = () => {

  return (
    <ul className="nav justify-content-center">  
      <li className="nav-item">
        <a className="nav-link">Welcome</a>
      </li>
      <li className="nav-item">
        <a href="#reservations" className="nav-link">Reservations</a>
      </li>
      <li className="nav-item">
        <a href="#menu"className="nav-link">Food & Drink</a>
      </li>
      <li className="nav-item">
        <a className="nav-link">Contact</a>
      </li>
    </ul>
  )
}

export default NavBar;
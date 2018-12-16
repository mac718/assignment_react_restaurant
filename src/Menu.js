import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({items}) => {

  const menu = items.map(item => (
    <MenuItem item={item} key={item.name} />
  ))

  return (
    <div className="menu">
      <h3>Menu</h3>
      <hr />
      {menu}
    </div>
  )
}

export default Menu;
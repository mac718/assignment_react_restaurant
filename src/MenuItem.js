import React from 'react';

const MenuItem = ({item}) => {

  const {name, price, description} = item;

  return (
    <div className="menu-item">
      <span className='item-name'>{name}</span><span className='item-price'>{price}</span>
      <p>{description}</p>
    </div>
  )
}

export default MenuItem;
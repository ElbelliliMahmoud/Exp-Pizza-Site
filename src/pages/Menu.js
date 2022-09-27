import React from 'react';
import '../styles/Menu.css';
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Oue Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return <div><MenuItem Key={key}  image={menuItem.image} name={menuItem.name} price={`${menuItem.price} D`} /></div>
        })}
      </div>
    </div>
  )
}

export default Menu
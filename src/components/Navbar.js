import React from 'react';
import { HeartFilled } from '@ant-design/icons';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='NavHead'>
      <div className='IconNav'>I <span><HeartFilled /></span> yalbase</div>
      <div className='SearchNav'>
        <button className='btnNav'>Get Priority Access</button>
      </div>
    </div>
  )
}

export default Navbar;
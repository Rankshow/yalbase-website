import React from 'react';
import Heart from '../components/images/heart.png';
import InnerSymbol from '../components/images/hearts.png';
import Archivebottom from '../components/images/bin.png';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='NavHead'>
      <div className='IconNav'>
        I<span><img className='archive' src={Archivebottom} alt="Archive" /><img className='Heart' src={Heart} alt="love logo" /><img className='heartsymbol' src={InnerSymbol} alt="love symbol" /></span>yalbaze
        </div>
      <div className='SearchNav'>
        <button className='NavBtn'>Get Priority Access</button>
      </div>
    </div>
  )
}


export default Navbar;
import React, { useState } from 'react';
import Heart from '../components/images/heart.png';
import InnerSymbol from '../components/images/hearts.png';
import Archivebottom from '../components/images/bin.png';
import Modal  from '../components/Modal';
import './Navbar.css'


const Navbar = () => {
  // Modal state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='NavHead'>
        <div className='IconNav'>
          I<span><img className='archive' src={Archivebottom} alt="Archive" /><img className='Heart' src={Heart} alt="love logo" /><img className='heartsymbol' src={InnerSymbol} alt="love symbol" /></span>yalbaze
          </div>
        <div className='SearchNav'>
          <button onClick={() => setShowModal(true)} className='NavBtn'>Get Priority Access</button>
        </div>
      </div>
          {showModal && <Modal />}
    </>
  )
}


export default Navbar;
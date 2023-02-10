import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='NavHead'>
      <div className='IconNav'>I love Yalbase</div>
      <div className='SearchNav'>
        <button className='btnNav'>Get Priority Access</button>
      </div>
    </div>
  )
}

export default Navbar;
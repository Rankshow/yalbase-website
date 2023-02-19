import React from 'react'
import Home from '../components/images/Home.png';
import PhoneIcon from '../components/images/PhoneIcon.png';
import StarSix from '../components/images/Star 5.png';
import './footer.css';

const Footer = () => {
  return (
  <>
     <div className='ellipseSix'>
            <img src={StarSix} alt="star" />
          </div>
           <hr />
          <div className='footer'>
            <div className='address'>
              <img src={Home} alt="home icon" /><p>2nd Floor, The Garnet Building, KM14 <br/> Lekki Epe Expressway, Lagos, Nigeria.</p>
              </div>

        <div className='slogan'>
          <p>Loyalbaze is almost here.</p>
        </div>

        <div className='phoneNumber'>
          <span><img src={PhoneIcon} alt="Phone icon" /></span>
          <p>+234 903 618 9485</p>
        </div>
        </div>
    </>
  )
}

export default Footer;
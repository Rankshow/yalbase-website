import React from 'react';
import Green from '../components/images/Green.png';
import Marked from '../components/images/Marked.png';
import './Modal.css';

function Modal() {
  return (
    <>
        <div className='modalBackGround'>
            <div className='imageModal'>
              <img src={Green} alt="Green box" />
               <img src={Marked} alt="Marked" />
                </div>

                <div className='modalBody'>
                <h1>Congratulations</h1>
               <p>Great move! You're one step closer to getting your hands on the product. Please check your mail for more information.</p>
            </div>
        </div>
    </>
  )
}

export default Modal;
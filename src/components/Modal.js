import React from 'react';
import Green from '../components/images/Green.png';
import Marked from '../components/images/Marked.png';
import './Modal.css';

function Modal({ closeModal}) {
  return (
    <>
        <div className='modalBackGround'>
            <div className='imageModal'>
              <img onClick={() => closeModal(false)} src={Green} alt="Green box" />
               <img className='MarkedIcon' src={Marked} alt="Marked" />
                </div>

                <div className='modalBody'>
                <h1>Congratulations</h1>
               <p>Great move! You're one step closer to getting <br/> your hands on the product. Please check your<br/> mail for more information.</p>
            </div>
        </div>
    </>
  )
}

export default Modal;
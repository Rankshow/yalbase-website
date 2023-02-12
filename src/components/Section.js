import React from "react";
import './section.css';
import Ellipse from '../components/images/Ellipse 39 (1).png';

const Section = () => {
  return (
    <section>
       <div className="ellipse">
        <img  src={Ellipse} alt="Ellipse 39" />
        </div>
      <div className="mainsection">
         <div className="subSection">
           <h1>Turn your best customers <br />
          into <span>Loyal fans</span></h1>
        </div>
        <div className="mainText">
        <p>
          Loyalbaze, empowers businesses to offers digital, mobile-first loyalty
          programs to their customers. With our AI powered platform, you can
          easily create and manage custom loyalty and rewards programs, track
          customer engagement, and gain valuable insight to improve your business. Sign up now to get early access.
        </p>
        </div>
      </div>
      <div className="formHead">
        <form>
          <div className="name">
          <input type="text" placeholder='Tell us your name' />
          </div>
          <div className="email">
          <input type="text" placeholder='Enter your email address' />
          </div>
           <div className="btnSubmit">
          <button>
            Get early access
          </button>
          </div>
            <p>+57 joined</p> 
        </form>
      </div>
    </section>
  );
};

export default Section;

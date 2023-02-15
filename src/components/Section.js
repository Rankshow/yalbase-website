import React from "react";
import './section.css';
import Ellipse39 from '../components/images/Ellipse 39 (1).png';
import Ellipse37 from '../components/images/Ellipse 37.png';
import StarTwo from '../components/images/Star 2.png';
import StarThree from '../components/images/Star 3.png';
import {UserOutlined} from '@ant-design/icons'
import {MailOutlined} from '@ant-design/icons'

const Section = () => {
  return (
    <>
    <section>
       <div className="ellipse39">
        <img  src={Ellipse39} alt="Ellipse 39" />
        </div>
      <div className="starOne">
        <img src={StarTwo} alt="star one" />
      </div>

         {/* main header */}
        <div className="mainsection">
          <div className="ellipse37">
            <img src={Ellipse37} alt="Ellipse 37" />
              </div>
            <div className="SectionHeader">
              <h1>Turn your best customers <br />
              into <span>Loyal fans</span></h1>
            </div>
              <div className="StarThree">
                <img src={StarThree} alt="star" />
              </div>
        </div>
        <div className="mainText">
        <p>
        Loyalbaze, empowers businesses to offer digital, mobile-first loyalty programs to their customers. With our AI Powered platform, you can easily create and manage custom loyalty and rewards programs, track customer engagement, and gain valuable insights to improve your business. Sign up now to get early access.
        </p>
      </div>

      {/* form */}
      <div className="formHead">
        <form classformHeader>
          <div className="name">
             <UserOutlined />
              <input type="text" placeholder='Tell us your name' />
          </div>
          <div className="email">
            <MailOutlined />
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
  </>
  );
};

export default Section;

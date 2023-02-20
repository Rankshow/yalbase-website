import React from "react";
import './section.css';
import Ellipse39 from '../components/images/Ellipse 39 (1).png';
import Ellipse37 from '../components/images/Ellipse 37.png';
import StarTwo from '../components/images/Star 2.png';
import StarThree from '../components/images/Star 3.png';
import StarFive from '../components/images/Star 4.png';
import UserOutline from '../components/images/Vector@2x.png';
import UserCircle from '../components/images/VectorName.png';
import EllipseBlur from '../components/images/Ellipse 39.png';
import EllipseBlue from '../components/images/Ellipse 33.png'
import EllipsePink from '../components/images/Ellipse 33 (1).png'
import Vector from '../components/images/Vector.png';
import StarFour from '../components/images/Star 2.png';
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
      <div>
        <img className="EllipseBlur" src={EllipseBlur} alt="" />
      </div>

      {/* form */}
      <div className="formHead">
        <form classformHeader>
          <div className="name">
             {/* <UserOutlined /> */}
             <img className="UserOutline" src={UserOutline} alt="User imgage" />
             <img className="UserCircle" src={UserCircle} alt="User imgage" />
              <input type="text" placeholder='Tell us your name' />
          </div>
          <div className="email">
            <MailOutlined className="emailIcon" />
              <input type="text" placeholder='Enter your email address' />
          </div>
          <div className="Vector">
            <img src={Vector} alt="Arrow head" />
          </div>
           <div className="btnSubmit">
            {/*Get early button */}
          <button className="submit">
            Get early access
          </button>
          </div>

          {/* Last section circles*/}
          <div className="LastSection">
            <div>
              <img className="ellpse1" src={EllipseBlue} alt="ellipse33" />
               </div>

                <div className="circleText">
                  <span>G</span>
                  <img className="ellpse2" src={EllipsePink} alt="ellipse33" />
                   </div>

                   <div className="O">
                    <span>O</span>
                     <img className="ellpse3" src={EllipseBlue} alt="ellipse33" />
                    </div>

                    <div className="U">
                    <span>U</span>
                    <img className="ellpse4" src={EllipsePink} alt="ellipse33" />
                   <span>M</span>
                   </div>
                     <p className="updateText">+57 joined</p>
                   </div> 
                 <div className="StarFour">
              <img src={StarFour} alt="Star four" />
            </div>   
          <div className="StarFive">
            <img src={StarFive} alt="Star five" />
          </div>
        </form>
      </div>
    </section>
  </>
  );
};

export default Section;

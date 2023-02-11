import React from "react";
import './section.css';

const Section = () => {
  return (
    <section>
      <div className="mainsection">
         <div className="subSection">
           <h1>Turn your best customers</h1>
          <h2>
            into <span>Loyal fans</span>
          </h2>
        </div>
        {/* <div className="childSection"> */}
        {/* </div> */}
        <div className="mainText">
        <p>
          Loyalbaze, empowers businesses to offers digital, mobile-first loyalty
          programs to their customers. With our AI powered platform, you can
          easily create and manage custom loyalty and rewards programs, track
          customer engagement, and gain valuable insight to improve your
        </p>
        </div>
      </div>
      <div className="formHead">
        <form>
          <input type="text" placeholder='Tell us your name' />
          <input type="text" placeholder='Enter your email address' />
          <button className="btnSubmit">
            Get early access
          </button>

        </form>
      </div>
    </section>
  );
};

export default Section;

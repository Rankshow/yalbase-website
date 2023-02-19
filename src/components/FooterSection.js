import React from 'react';
import Ellipse39 from '../components/images/Ellipse 39 (1).png';
import StarTwo from '../components/images/Star 2.png';
import ZigZag from '../components/images/Line 6.png';
import Form from 'react-bootstrap/Form';
import './FooterSection.css';


function FooterSection() {
  return (
    <>
     <main>
    <div className='main'>
        <div className='ellipseSect'>
         <img src={Ellipse39} alt="ellipse" />
          </div>
          <div className='ellipseSect2'>
           <img src={StarTwo} alt="star" />
          </div>
          <div className='ellipseSect3'>
            <img src={StarTwo} alt="star" />
          </div>
          <div className='ellipseSect4'>
         <img src={StarTwo} alt="star" />
       </div>
    </div >

      <div className='mainSect'>
        <div className='content'>
          <h3>Priority Access</h3>
           <img src={ZigZag} alt="ZigZag" />
          <p>Get ready to revolutionize the way you interact with your customers and drive sales with Loyalbaze. Skip the waitlist and get exclusive priority access to LoyalBaze. Limited slots available. Please tell us a bit about your business and needs and of our consultants will be in touch Immediately!</p>
        </div>

        <div className='secondForm'>
          <Form className='formSect'>
            <h2>Book a Consultation with us</h2>
             <Form.Group className="mb-3 formGroup" controlId="formBasicName">
              <Form.Control type="name" placeholder="Enter your full name" />
                </Form.Group>

                   <Form.Group  className="mb-3 formGroup" controlId="formBasicName">
                      <Form.Control type="email" placeholder="Enter your work email" />
                        </Form.Group>

                         <Form.Group className="mb-3 formGroup" controlId="formBasicName">
                        <Form.Control type="text" placeholder="Mobile Number" />
                       </Form.Group>

                     <Form.Group className="mb-3 formGroup" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Company Name" />
                 </Form.Group>

                 <Form.Select style={{padding: '16px', borderRadius: '8px', width: '298px',backgroundColor: 'rgba(29, 41, 57, 1)',border: '1px solid rgba(221, 221, 221, 0.5)', color: '#ffffff', fontFamily: 'Satoshi', fontWeight: '400', fontSize: '16px', lineHeight: '130%'}}  aria-label="Select counrty">
                  <option>Select Country</option>
                    <option value="1">One</option>
                       <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>

                    <Form.Group className="mb-3 formGroup" controlId="exampleForm.ControlTextarea1">
                        <Form.Control className='formTextArea'  as="textarea" rows={9} />
                      </Form.Group>
                      <button className='formbtn'>
                        Get early Access
                      </button>
                 </Form>
                 <div className='ellipse1'>
            <img src={StarTwo} alt="star" />
          </div>
        </div>
      </div>
    </main>
  </>
  )
}

export default FooterSection;
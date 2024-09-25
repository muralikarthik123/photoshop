import React, { useState}  from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [data, setData] = useState({
    first: '',
    last: '',
    mail: '',
    phone: '',
    service: '',
  });

  const { first, last, mail, phone, service } = data;

  const open = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const onsubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_g8l1gxk', 'template_a0gf82e', e.target, {
        publicKey: 'FD3AoD84F_Fu5HzFp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Apponitment has been booked successfully')
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact'>
      {/* Heading */}
      <h1>Contact us</h1>

      {/* Form */}
      <div className='c1'>
        {/* Left Side */}
        <div className='c1left'>
          <form onSubmit={onsubmit}>
            <p>
              First Name <span style={{ color: 'orange' }}>*</span>
            </p>
            <input
              className='textbox'
              type='text'
              name='first'
              value={first}
              onChange={open}
              required
            />
            <p>
              Last Name <span style={{ color: 'orange' }}>*</span>
            </p>
            <input
              className='textbox'
              type='text'
              name='last'
              value={last}
              onChange={open}
              required
            />
            <p>
              Mail Id <span style={{ color: 'orange' }}>*</span>
            </p>
            <input
              className='textbox'
              type='email'
              name='mail'
              value={mail}
              onChange={open}
              required
            />
            <p>
              Phone no: <span style={{ color: 'orange' }}>*</span>
            </p>
            <input
              className='textbox'
              type='tel'
              name='phone'
              value={phone}
              onChange={open}
              required
            />
            <p>
              Service <span style={{ color: 'orange' }}>*</span>
            </p>
            <input
              className='textbox1'
              type='text'
              name='service'
              value={service}
              onChange={open}
              required
            />
            <br />
            <button className='submit'>Submit</button>
          </form>
        </div>

        {/* Right Side */}
        <div className='c1right'>
          <img className='image' src='./img3.jpg' alt='Contact Illustration' />
        </div>
      </div>

      {/* Map */}
      <div>
        <iframe
          title='map'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7846.629370571465!2d80.4333168304137!3d16.30861179283374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a7511f454928f%3A0xd00355651b3f05c5!2szakir%20photography!5e0!3m2!1sen!2sin!4v1726824461391!5m2!1sen!2sin"
          className='map'
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

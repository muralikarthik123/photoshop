import React from 'react'
import './contact.css'
export default function contact() {
  return (
    <div className='contact'>
        {/*heading*/}
      <h1>Contact us</h1>
      {/*form*/}
      <div className='c1'>
        {/*left side*/}
        <div className='c1left'>
            <form>
            <p>First Name <span style={{color:'orange'}}>*</span></p>
            <input className='textbox'type='text' required/>
            <p>Secound Name <span style={{color:'orange'}}>*</span></p>
            <input className='textbox'type='text' required/>
            <p>Mail Id <span style={{color:'orange'}}>*</span></p>
            <input className='textbox'type='text' required/>
            <p>Subject <span style={{color:'orange'}}>*</span></p>
            <input className='textbox'type='text'/>
            <p>Message <span style={{color:'orange'}}>*</span></p>
            <input className='textbox1'type='text' required/>
            <br></br>
            <input className='submit' type='submit'/>
            </form>
        </div>

        {/*rightside*/}
        <div className='c1right'>
            <img className='image' src='./img3.jpg' alt=''/>
        </div>
      </div>

      {/*map*/}
      <div>
        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7846.629370571465!2d80.4333168304137!3d16.30861179283374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a7511f454928f%3A0xd00355651b3f05c5!2szakir%20photography!5e0!3m2!1sen!2sin!4v1726824461391!5m2!1sen!2sin" className='map'  allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

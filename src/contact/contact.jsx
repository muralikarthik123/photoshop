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
    </div>
  )
}

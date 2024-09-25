import React from 'react'
import './footer.css'
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
export default function footer() {
  return (
    <div className='footer'>
      {/*total*/}
      <div className='total'>
       {/*address*/}
          <div className='c1'>
            <h4>Address H/o</h4>
            <p>Arundel Pet 6/1,guntur,</p>
            <p>Andhra Pradesh,India.</p>
            <h4>Branch</h4>
            <p>Hyderabad,Vijayawada.</p>
        </div>
        {/*phone number*/}
        <div className='c1'>
            <h2>Phone Number</h2>
            <p>Mob:998587734, 8374617344.</p>
            <p>Gmail:rkphotography2019@gmail.com.</p>
        </div>

        {/*Social media*/}
        <div className='c1'>
            <h2>Social Media</h2>
            <div className='allicons'>
              {/*youtube*/}
              <div>
                <a href='https://www.youtube.com/@rksivaphotography5050'>< FaYoutube  className='utube'/></a>
              </div>
              {/*facebook*/}
              <div>
                <a href='https://web.whatsapp.com/'>< IoLogoWhatsapp className='what'/></a>
              </div>
              {/*insta*/}
              <div>
                <a href='https://www.instagram.com/accounts/login/?hl=en'>< FaInstagramSquare className='utube'/></a>
              </div>
            </div>
        </div>


      </div>
    </div>
  )
}

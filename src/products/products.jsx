import React from 'react'
import './products.css'

export default function products() {
  return (
    <div className='services'>
      
      <div>
      <h1 className='heading'>Our Services</h1>
      {/*birthday functions*/}
      <div className='c1'>
        {/*left side content*/}
        <div className='c1leftside'>
          <h1>Newly Born baby Photoshoot</h1>
        </div>
        {/*right side image*/}
        <div className='c1rightside'>
          <img className='s1'src='./s1.jpg' alt=''/>
        </div>
      </div>

      <br></br>

      {/*preweding functions*/}
      <div className='c1'>
        {/*left side content*/}
        <div className='c1leftside'>
          <h1>Preweding Photo shoots</h1>
        </div>
        {/*right side image*/}
        <div className='c1rightside'>
          <img className='s1'src='./img3.jpg' alt=''/>
        </div>
      </div>

      <br></br>
      
      {/*wedding functions*/}
      <div className='c1'>
        {/*left side content*/}
        <div className='c1leftside'>
          <h1>Marriage Photo shoots</h1>
        </div>
        {/*right side image*/}
        <div className='c1rightside'>
          <img className='s1'src='./img2.webp' alt=''/>
        </div>
      </div>
    
      </div>
    </div>
  )
}

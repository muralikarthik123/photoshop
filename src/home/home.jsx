import React from 'react'
import './home.css';

export default function home() {
  return (
    <div className='home'>
      {/* container 1background image*/}
      <div className='background' >
        {/* heading*/}
        <h1 className='heading'>RK Pro Photograph</h1>
      </div>
      {/*service*/}
      <h1 className='head'>Our services</h1>

      {/*container 2*/}
      <div className='c2'>
        {/*left content*/}
        <div className='c2left'>
          <h1 className='heading'>Wedding</h1>
        </div>
        {/*right Side image*/}
        <div className='c2right'>
          <img className='image2'src='./img2.webp' alt=''/>
        </div>
      </div>

      {/*container 3*/}
      <div className='c2'>
        {/*left content*/}
        <div className='c2right'>
          <img className='image2'src='./img3.jpg' alt=''/>
        </div>

         {/*right Side image*/}
        <div className='c2left'>
          <h1 className='heading'>Pre Wedding Shoot</h1>
        </div>
      </div>


    </div>
  )
}

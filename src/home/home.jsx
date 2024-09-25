import React from 'react'
import './home.css';

export default function home() {
  return (
    <div className='home'>
      {/* container 1background image*/}
      <div className='background' >
        
      </div>
      {/*service*/}
      {/* heading*/}
      <h1 className='heading'>RK Pro Photograpy</h1>
      <h1 className='head'>Our Weding Packages</h1>

      {/*container 2*/}
      <div className='c2'>
        {/*left content*/}
        <div className='c2left'>
          <h1 className='heading'>Wedding Events</h1>
          <ol >
            <li>Engagement</li>
            <li>Bride/Groom Haldi</li>
            <li>MagalaShanalu</li>
            <li>Sangeeth</li>
            <li>Wedding</li>
            <li>Receptions</li>
            
          </ol>
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
          <ol >
            <li>Cinematic Video Graph</li>
            <li>Drown Shoot</li>
            <li>Candid Photography</li>
            <li>Sangeeth</li>
            <li>Wedding</li>
            <li>Receptions</li>
            
          </ol>
        </div>
      </div>


    </div>
  )
}

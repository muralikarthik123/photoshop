import React from 'react'
import './baby.css'
export default function baby() {
  return (
    <div className='baby'>
      {/*left side image*/}
      <div className='leftside'>
        <img className='image' src='./s1.jpg' alt=''/>
      </div>
      {/*right side matter*/}
      <div className='rightside'> 
        <h1>Baby Photoshoot</h1>
        <p>Capturing the precious moments of your baby's early days is a treasure that lasts a lifetime. At our photo studio, we specialize in creating heartwarming and memorable baby photoshoots that reflect your little one's unique personality. Our skilled photographers use gentle, baby-friendly lighting and props to create a safe and comfortable environment. Whether you prefer a classic, minimalist look or something more whimsical, we customize every session to suit your style. From cozy swaddled newborn shots to playful first-birthday themes, we handle it all with care and creativity. We ensure each moment is captured with warmth, patience, and precision, giving you timeless images to cherish forever.</p>
      </div>
    </div>
  )
}

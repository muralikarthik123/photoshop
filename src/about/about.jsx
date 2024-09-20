import React from 'react'
import './about.css'
export default function about() {
  return (
    <div className='about'>
        {/*left side data*/}
        <div className='right'>
            <h1>About US</h1>
            <p className='content'>Welcome to [Your Brand Name] – your go-to destination for all things related to Photoshop! Whether you're a beginner or a seasoned professional, we are here to help you elevate your design game with expert tutorials, creative resources, and helpful tips.
At [Your Brand Name], we believe in the power of visual storytelling. Our team of passionate designers and Photoshop enthusiasts is dedicated to providing you with the tools and knowledge you need to bring your creative visions to life. From photo editing and digital art to graphic design and visual effects, we cover it all.</p>
            <h1>Why Choose Us?</h1>
            <li className='content'>Expert Guidance: Our knowledgeable staff is always ready to assist, whether you're choosing your first camera or upgrading your gear.</li>
            <br></br>
            <li className='content'>Quality Products: We only offer the best equipment from trusted brands.</li>
            <br></br>
            <li className='content'>Community Focus: Join our workshops and events to learn, connect, and enhance your skills.</li>
        </div>
        {/*right side data*/}
        <div className='left'>
            <img className='aboutimg 'src='./a1.jpg' alt=''/>
        </div>   
    </div>
  )
}

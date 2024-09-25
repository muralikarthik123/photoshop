import React from 'react'
import './products.css'
import {Link} from 'react-router-dom'

export default function products() {
  return (
    <div className='services'>
       <h1 className='heading'>Our Services</h1>

      {/*wedding functions*/}
      <div className='c1'>
        {/*left side content*/}
        <div className='c1leftside'>
          <h1>Weding Photo shoots</h1>
           {/*button linking to another page*/}
          <Link to='/wedding'><button className='read'>Read More</button></Link>
        </div>
        {/*right side image*/}
        <div className='c1rightside'>
          <img className='s1'src='./img2.webp' alt=''/>
        </div>
      </div> 

      <br></br>

      {/*preweding functions*/}
      <div className='c1'>
        {/*left side content*/}
        <div className='c1leftside'>
          <h1>Preweding Photo shoots</h1>
          {/*button linking to another page*/}
          <Link to='/prewed'><button className='read'>Read More</button></Link>
        </div>
        {/*right side image*/}
        <div className='c1rightside'>
          <img className='s1'src='./img3.jpg' alt=''/>
          
        </div>
      </div> 

      <br></br>
      <div>
      {/*birthday functions*/}
      <div className='c1'>
        {/*left side content*/}
        <div className='c1leftside'>
          <h1>Newly Born baby Photoshoot</h1>
           {/*button linking to another page*/}
          <Link to='/baby'><button className='read'>Read More</button></Link>
        </div>
        {/*right side image*/}
        <div className='c1rightside'>
          <img className='s1'src='./s1.jpg' alt=''/>
        </div>
      </div>

      <br></br>

      
    
      </div>
    </div>
  )
}

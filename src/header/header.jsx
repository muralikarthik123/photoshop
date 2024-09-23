import React,{useState} from 'react'
import './header.css'
import {Link} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

export default function Header() {
  const [data,setData]=useState(false)
  const open=()=>{
      setData(!data)
  }
  const cancel=()=>{
    if (data===true){
      setData(!data)
    }
  }
  return (
    <div className='header'>
      <div className='flexing'>
      <div>
        <img className='logo' src='./logo.jpeg' alt=''/>
      </div>
      <div>
      <button onClick={()=>open()} className='hamburg'><GiHamburgerMenu style={{fontSize:'35px'}}/></button>
        <ul className={data? 'mob':'lap'}> 
        <button onClick={()=>cancel()} className='cancel'><RxCross1 style={{fontSize:'30px'}}/> </button>
        <li><Link onClick={()=>cancel()}  style={{color:'black',textDecoration:'none'}}to='/'>Home</Link></li>
        <li><Link onClick={()=>cancel()}  style={{color:'black',textDecoration:'none'}}  to ='/products'>Services</Link></li>
        <li><Link onClick={()=>cancel()} style={{color:'black',textDecoration:'none'}} to='/contact'>Contact</Link></li>
        <li><Link onClick={()=>cancel()}  style={{color:'black',textDecoration:'none'}}to='/about'>Aboutus</Link></li>
      </ul>
      </div>
      </div>
    </div>
  )
}

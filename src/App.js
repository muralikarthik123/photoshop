import React from 'react'
import Header from './header/header.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Product from './products/products.jsx'
import Home from './home/home.jsx'
import Contact from './contact/contact.jsx'
import Footer from './footer/footer.jsx'
import Baby from './readmore/baby.jsx'
import Prewed from './readmore/prewed.jsx'
import Wed from './readmore/webding.jsx'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/baby' element={<Baby/>}/>
          <Route path='/prewed' element={<Prewed/>}/>
          <Route path='/wedding' element={<Wed/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

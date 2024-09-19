import React from 'react'
import Header from './header/header.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Product from './products/products.jsx'
import Home from './home/home.jsx'
import Footer from './footer/footer.jsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Product/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App

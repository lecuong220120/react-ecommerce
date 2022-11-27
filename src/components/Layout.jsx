import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'
import Catelog from '../pages/Catelog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
const Layout = () => {
  return (
   <Router>
      <>
        <div className="container">
          <Header/>
          <div className="main">
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/catalog/:slug' element={<Product/>} />
              <Route path='/catelog' element={<Catelog/>} />
              <Route path='/cart' element={<Cart/>} />
            </Routes>
          </div>
        <Footer/>
        </div>
      </>
   </Router>
  )
}

export default Layout
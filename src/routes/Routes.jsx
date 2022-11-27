import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Catelog from '../pages/Catelog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
const routes = () => {
  return (
    <Routes>
      <Route path='/' element = {Home}/>
      <Route path='/catalog/:slug' element = {Product}/>
      <Route path='/catelog' element = {Catelog}/>
      <Route path='/cart' element = {Cart}/>
    </Routes>
  )
}

export default routes
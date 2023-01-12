import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import Login from '../../Pages/Login/Login'
import Categories from '../../Pages/Products/Categories'
import ProductsByCategory from '../../Pages/Products/ProductsByCategory'
import ProductDetail from '../../Pages/Products/ProductDetail'
import Contact from '../../Pages/Contact/Contact'

const Router = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path='/productsbycategory' element={<Categories/>}>
    <Route path='/productsbycategory/:id' element={<ProductsByCategory/>}/>  
    </Route>
    <Route path='/products/:id' element={<ProductDetail/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
  )
}

export default Router
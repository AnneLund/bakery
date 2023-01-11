import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import Login from '../../Pages/Login/Login'
import Post from '../../Pages/Post'
import Categories from '../../Pages/Categories'
import ProductsByCategory from '../ProductsByCategory'
import ProductDetail from '../ProductDetail'
import Contact from '../../Pages/Contact/Contact'
import Loginpage from '../../Pages/Login/Loginpage'

const Router = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    {/* <Route path='/post' element={<Post/>}/> */}
    <Route path="/contact" element={<Contact/>}/>
    <Route path='/productsbycategory' element={<Categories/>}>
    <Route path='/productsbycategory/:id' element={<ProductsByCategory/>}/>  
    </Route>
    <Route path='/products/:id' element={<ProductDetail/>}/>
   
    <Route path='/login' element={<Login/>}/>
    <Route path='/welcome' element={<Loginpage/>}/>
   </Routes>
  )
}

export default Router
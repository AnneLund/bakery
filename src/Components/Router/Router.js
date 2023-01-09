import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../../Pages/About'
import Home from '../../Pages/Home'
import Login from '../../Pages/Login/Login'
import Post from '../../Pages/Post'
import Categories from '../../Pages/Categories'
import ProductsByCategory from '../ProductsByCategory'
import ProductDetail from '../ProductDetail'

const Router = () => {
  return (
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/post' element={<Post/>}/>
    <Route path='/productsbycategory' element={<Categories/>}>
    <Route path='/productsbycategory/:id' element={<ProductsByCategory/>}/>  
    </Route>
    <Route path='/products/:id' element={<ProductDetail/>}/>
   
    <Route path='/login' element={<Login/>}/>
   </Routes>
  )
}

export default Router
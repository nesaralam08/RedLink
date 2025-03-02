import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
function Routers() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Routers
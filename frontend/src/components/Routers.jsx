import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard/Dashboard'
// import PageLoading from '../utils/PageLoading'
import NotFound from '../utils/NotFound'
import PrivateRoute from '../utils/PrivateRoute'
import NearbyHospital from './NearbyHospital'
import NearbyDonars from './NeabyDonars'
function Routers() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/nearby-hospitals' element={<NearbyHospital/>}></Route>
        <Route path='/nearby-donars' element={<NearbyDonars/>}></Route>
        <Route path='/dashboard' element={<PrivateRoute Component={Dashboard}/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Routers
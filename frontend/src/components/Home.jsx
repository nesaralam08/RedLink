import React, { useState } from 'react'
import SwiperPage from './Swiper'
import banner2 from '../assets/banner/img2.jpg'
import banner7 from '../assets/banner/img7.jpg'
import banner3 from '../assets/banner/img3.jpg'
import {Link, useNavigate} from 'react-router-dom'
function Home() {
  
  return (
    <>
      <SwiperPage />

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-24">
          <img
            src={banner2}
            className="max-w-[350px] rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Benefit for Blood Donation</h1>
            <p className="py-2">
              ✔ Boosts Heart Health – Reduces excess iron levels, which may lower the risk of heart disease.
            </p>
            <p className='py-2'>
              ✔ Stimulates Blood Cell Production – The body replenishes lost blood, promoting better circulation.
            </p>
            <p className='py-2'>
              ✔ Free Health Check-Up – Donors often receive a mini health screening.
            </p>
            <button className="btn bg-primary">Donate Now</button>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner7}
            className="max-w-[350px] rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Find Blood Bank  </h1>
            <p className="py-6">
              ✔ Easily locate blood banks and hospitals near you with our real-time search. Whether you need emergency blood, hospital services, or want to donate, LifeSaver connects you instantly. <br /> <br /> ✔ Urgently need blood? Submit a request and connect with donors and hospitals that have the required blood type available. Every drop counts!
            </p>
            <Link className="btn bg-primary" to='/nearby-hospitals'>Find Nearby Hospitals</Link>
          </div>
        </div>
      </div>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-24">
          <img
            src={banner3}
            className="max-w-[350px] rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Find Nearby Donators</h1>
            <p className="py-2">
              ✔ Boosts Heart Health – Reduces excess iron levels, which may lower the risk of heart disease.
            </p>
            <p className='py-2'>
              ✔ Stimulates Blood Cell Production – The body replenishes lost blood, promoting better circulation.
            </p>
            <p className='py-2'>
              ✔ Free Health Check-Up – Donors often receive a mini health screening.
            </p>
            <Link className="btn bg-primary" to='/nearby-donars'>Find Nearby Donators</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import banner1 from '../assets/banner/img1.jpg'
import banner2 from '../assets/banner/img2.jpg'
import banner3 from '../assets/banner/img3.jpg'
import banner4 from '../assets/banner/img4.jpg'
import banner5 from '../assets/banner/img5.jpg'
import banner6 from '../assets/banner/img6.jpg'
import banner7 from '../assets/banner/img7.jpg'
export default function SwiperPage() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper xl:h-[550px] h-[200px] md:h-[300px]"
            >
                {/* <SwiperSlide><div className='h-full'><img src={banner1} /></div></SwiperSlide> */}
                {/* <SwiperSlide><div className='h-full'><img src={banner2} /></div></SwiperSlide> */}
                {/* <SwiperSlide><div className='h-full'><img src={banner3} /></div></SwiperSlide> */}
                <SwiperSlide><div className='h-full'><img src={banner4} /></div></SwiperSlide>
                <SwiperSlide><div className='h-full'><img src={banner5} /></div></SwiperSlide>
                <SwiperSlide><div className='h-full'><img src={banner6} /></div></SwiperSlide>
                {/* <SwiperSlide><div className='h-full'><img src={banner7} /></div></SwiperSlide> */}
            </Swiper>
        </>
    );
}

import React from 'react';


import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';



//  import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';

// // import required modules
// import { Pagination } from 'swiper/modules';


import imgb1 from'../../../assets/banner1.jpg'
import imgb2 from'../../../assets/banner2.jpg'
import imgb3 from'../../../assets/banner3.jpg'
import imgb4 from'../../../assets/banner4.jpg'
import imgb5 from'../../../assets/banner5.jpg'
import imgb6 from'../../../assets/banner6.jpg'


const Banner = () => {

  
        
    return (
        <div className='m-5'>
              <Carousel>
                <div>
                    <img  className='rounded-lg' src={imgb1} />
                </div>
                <div>
                    <img  className='rounded-lg' src={imgb2} />
                </div>
                <div>
                    <img className='rounded-lg' src={imgb3} />
                </div>
                <div>
                    <img  className='rounded-lg' src={imgb4} />
                </div>
                <div>
                    <img className='rounded-lg' src={imgb5} />
                </div>
                <div>
                    <img className='rounded-lg' src={imgb6} />
                </div>
                
            </Carousel>


  


  {/* <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </> */}
  

        </div>
    );
};

export default Banner;
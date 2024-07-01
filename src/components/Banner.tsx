
import { Carousel } from 'antd';
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const contentStyle: React.CSSProperties = {
    height: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Banner = () => {

    return (
        <div className='mt-6'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://www.bobswatches.com/rolex-blog/wp-content/uploads/2019/11/Luxury-Watch-Brands-Like-Rolex-BANNER.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://luxurytimenyc.com/cdn/shop/collections/rolex-247780.jpg?v=1621396423" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner
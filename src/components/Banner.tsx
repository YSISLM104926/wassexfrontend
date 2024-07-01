
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
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide ><img src="https://gshock.casio.com/content/casio/locales/us/en/brands/gshock/products/mr-g/mrg-b2000/_jcr_content/root/responsivegrid/container_1689197747/teaser.casiocoreimg.jpeg/1684182548618/mrgb2000b1a4-pc-1920x816.jpeg" /></SwiperSlide>
                <SwiperSlide ><img src="https://gshock.casio.com/content/casio/locales/us/en/brands/gshock/products/mr-g/mrg-b5000ba/_jcr_content/root/responsivegrid/container_1689197747_1729484176/teaser.casiocoreimg.jpeg/1681830011730/mrgb5000ba-pc-nologo-1920x816.jpeg" /></SwiperSlide>
                <SwiperSlide ><img src="https://gshock.casio.com/content/casio/locales/us/en/brands/gshock/products/mr-g/_jcr_content/root/responsivegrid/teaser_copy_21076268.casiocoreimg.jpeg/1701701730930/mrgbf1000r-1920x816.jpeg" /></SwiperSlide>
                <SwiperSlide >
                    <img src="https://gshock.casio.com/content/casio/locales/us/en/brands/gshock/products/mr-g/mrg-b5000/_jcr_content/root/responsivegrid/container_1689197747/teaser_copy.casiocoreimg.jpeg/1717175303749/mrgb5000-notext-1920x816.jpeg" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Banner
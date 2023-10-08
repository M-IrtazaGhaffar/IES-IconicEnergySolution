'use client';

import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function CarouselComp() {
    const data = [
        {
            name: 'Ahmed Farooqi',
            message: 'Best service ever used! Thanks.'
        },
        {
            name: 'Naeem Janjua',
            message: 'I shall be greatful for this generator instances in emergency.'
        },
        {
            name: 'Bint e Momina',
            message: 'A bit late but good service overall.'
        },
        {
            name: 'Muhammad Bilal',
            message: 'The generators are good and all okay.'
        },
        {
            name: 'Syed Abas Raza',
            message: 'Cheapest and pretiest service from iconic energy solutions.'
        },
        {
            name: 'Musatafa Lala',
            message: 'My ATS panels were not working after 3 years of use, Iconic Energy gave me the best ATS panel.'
        },
        {
            name: 'Fatima Bibi',
            message: 'My software company needed a >(100Kv) genset and we got it in just 22hours.'
        },
        {
            name: 'Malik Jahanzaib',
            message: 'I ordered them in Multan and they fitted it in Karachi on exact given location. Thankyou Iconic'
        },
        {
            name: 'Mustar Butt',
            message: 'Mashallah. Keep growing.'
        },
        {
            name: 'Usama Khan',
            message: 'Thanks Iconic for providing us CCTV cameras.'
        },
        {
            name: 'Nasir Gill',
            message: 'My whole Plaza is full of AC and Inverters by Iconic.'
        },
        {
            name: 'Shamraiz Raja',
            message: 'Best Electronic Company in PWD/Sawan/RWP/ISB Pk'
        },
    ]
    return (
        <div className="lg:px-20">
            <div className='text-center p-10 flex flex-col gap-5'>
                <h1 className='text-6xl  font-extrabold '>
                    Their Reviews
                </h1>
                <p className='text-sm'>
                Product reviews are a great way for potential customers to learn more about a product and make an informed purchase decision. They can also help businesses improve their products and services.
                </p>
            </div>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                grabCursor={true}
                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    data.map((item, index) => {
                        return <SwiperSlide className='pb-10 flex justify-center' key={index}>
                            <div className='bg-slate-50 rounded py-10 px-20 h-60 lg:h-auto'>
                                <div className='flex items-center gap-3 mb-3'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                    </svg>
                                    <h1 className='text-lg'>{item.name}</h1>
                                </div>
                                <p className='opacity-75'>
                                    {item.message}
                                </p>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </div>
    )
}

export default CarouselComp
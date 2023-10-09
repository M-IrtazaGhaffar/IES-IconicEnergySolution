import Image from 'next/image'
import React from 'react'
import Cctv from "../assets/cctv.jpg";
import Generator from "../assets/generator.png";
import AC from "../assets/ac.jpg";

function Services() {
    return (
        <div>
            <div className='text-center p-10 flex flex-col gap-5 items-center justify-between'>
                <h1 className='text-6xl  font-extrabold '>
                    Services
                </h1>
                <p className='text-sm'>
                    Deal with us? Yes, we are always available. Our services help businesses of all sizes to improve their security and energy problems. We offer a comprehensive range of services, including CCTV Cameras, Generators, ACs and Lifts. Our team of experts will work with you to develop a custom strategy that meets your specific needs.
                </p>
            </div>
            <div className='flex items-center justify-center flex-col'>
                <div className="carousel carousel-center mx-10 lg:w-[24vw] border-2 shadow-2xl rounded-box">
                    <div className="carousel-item">
                        <Image src={Cctv} alt='Img' width={300} />
                    </div>
                    <div className="carousel-item">
                        <Image src={AC} alt='Img' width={300} />
                    </div>
                    <div className="carousel-item">
                        <Image src={Generator} alt='Img' width={300} />
                    </div>
                </div>
                <p className='p-10 lg:p-20 text-sm text-center'>
                    Providing comprehensive range of construcrion related multidimensional constractual services for all kinds of residential projects as well as for small and medium scale commerical, institutional, industrial and educational projects, A persuasive combination of professional experrise and technology makes Iconic Energy Solutions your first choice for building construction. On every projects Our competent and qualified resource monitors all phases of construction project to ensure that optimized use of resources to achieve best quality of customer desired outcome within cost-effective parameters.
                </p>
            </div>
        </div>
    )
}

export default Services
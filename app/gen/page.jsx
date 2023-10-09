import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import Img from "../assets/generator.png";

function page() {

    const data = [
        {
            route: '/gen/perkins',
            name: 'Perkins'
        },
        {
            route: '/gen/cummins',
            name: 'Cummins'
        },
        {
            route: '/gen/yd',
            name: 'YangDong'
        },
        {
            route: '/gen/tazato',
            name: 'Tazato'
        },
        {
            route: '/gen/rental',
            name: 'Rental'
        }
    ]
    return (
        <div className='min-h-[50vh] bg-white'>
            <div className='p-10'>
                <h1 className='text-4xl lg:text-6xl p-5 text-center font-extrabold'>
                    Generators
                </h1>
                <p className='text-xs text-center'>
                    Iconic Energy Solutions offers a wide range of generators to meet the needs of businesses and homes alike. Their generators are powered by gasoline, diesel, or propane and come in a variety of sizes.
                </p>
            </div>
            <div className='flex justify-center'>
            <Image alt='Image' src={Img} width={250} className='mb-5 border-2 border-indigo-500 rounded' />
            </div>
            <div className='bgGray min-h-[50vh]'>
                <h3 className='text-center text-lg font-semibold py-10'>
                    Please select anyone of the following to continue
                </h3>
                <div className='flex justify-center py-20 items-center gap-10 flex-wrap'>
                {
                    data.map((item, index) => {
                        return (
                            <Link key={item.route} href={item.route} className='text-xl font-bold border-4 border-white hover:border-indigo-500 rounded hover:scale-125 transition-all p-5'>
                                {item.name}
                            </Link>
                        )
                    })
                }
                </div>
            </div>
            <div className='h-10'></div>
        </div>
    )
}

export default page
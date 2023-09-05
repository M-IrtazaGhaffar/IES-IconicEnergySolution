import Image from 'next/image'
import React from 'react'
import Img1 from "../assets/perkinsLogo.jpg";
import Img2 from "../assets/cumminsLogo.jpg";
import Link from 'next/link';

function page() {

    const data = [
        {
            route: '/gen/perkins',
            img: Img1
        },
        {
            route: '/gen/cummins',
            img: Img2
        },
        {
            route: '/gen/yd',
            img: Img2
        },
        {
            route: '/gen/tazzato',
            img: Img2
        },
        {
            route: '/gen/rental',
            img: Img2
        }
    ]
    return (
        <div className='min-h-[50vh] p-10 bg-white'>
            <h1 className='text-4xl lg:text-6xl p-5 text-center font-extrabold'>
                Generators
            </h1>
            <p className='text-xs text-center'>
                Iconic Energy Solutions offers a wide range of generators to meet the needs of businesses and homes alike. Their generators are powered by gasoline, diesel, or propane and come in a variety of sizes.
            </p>
            <div className='flex justify-center py-20 items-center gap-10 flex-wrap'>
                {
                    data.map((item, index) => {
                        return (
                            <Link key={item.route} href={item.route}>
                                <Image src={item.img} height={75} className='hover:scale-110 hover:cursor-pointer' />
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default page
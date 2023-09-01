import Image from 'next/image'
import React from 'react'
import HBL from "../assets/hbl.png";
import NBP from "../assets/nbp.png";
import KFC from "../assets/kfc.png";
import Alfalah from "../assets/alfalah bnk.png";
import Dubai from "../assets/dubai islamic bank.png";
import Islamic from "../assets/bank islamic.png";
import Becon from "../assets/beconhouse.png";

function Responses() {
    return (
        <div className='p-10'>
            <div className='text-center py-10 flex flex-col gap-5'>
                <h1 className='text-6xl  font-extrabold '>
                    Our Clients
                </h1>
                <p className='text-sm'>
                    At the core of our mission and achievements, we proudly spotlight our cherished clients who have entrusted us with their aspirations, challenges, and goals. Each client we collaborate with becomes an integral part of our journey, inspiring us to reach new heights and redefine excellence.
                </p>
            </div>
            <div className='flex gap-10 flex-wrap items-center justify-center'>
                <Image src={HBL} width={100} />
                <Image src={KFC} width={100} />
                <Image src={Alfalah} width={100} />
                <Image src={Islamic} width={100} />
                <Image src={Dubai} width={100} />
                <Image src={NBP} width={100} />
                <Image src={Becon} width={100} />
            </div>
        </div>
    )
}

export default Responses
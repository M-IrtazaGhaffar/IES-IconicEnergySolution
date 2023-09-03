import Image from 'next/image'
import React from 'react'
import L1 from "../assets/ac1.png";
import L2 from "../assets/ac2.png";
import L3 from "../assets/ac3.png";
import L4 from "../assets/ac4.png";
import LG from "../assets/lg.png";
import Haier from "../assets/haier.png";
import Kenwood from "../assets/kenwood.png";
import Gree from "../assets/gree.png";
import Orient from "../assets/orient.png";
import Mitsibushi from "../assets/mitsibushi.png";
import Link from 'next/link';

function page() {
  return (
    <div className='min-h-screen bg-white p-10 flex flex-col'>
      <div className="text-center">
        <h1 className='text-6xl py-10 font-extrabold '>
          AC Inverters
        </h1>
        <p className='text-xs'>
          An AC inverter is a device that converts direct current (DC) to alternating current (AC). It is used in a variety of applications, including air conditioners, solar power systems, and electric vehicles.
          In an air conditioner, the inverter controls the speed of the compressor, which is the main component that cools the air. A conventional air conditioner uses a fixed-speed compressor, which means that it runs at full speed all the time, even when the room is already cool. This wastes energy.
          An inverter air conditioner, on the other hand, can vary the speed of the compressor, so that it only runs as fast as needed to maintain the desired room temperature. This results in significant energy savings.
          In addition to being more energy-efficient, inverter air conditioners also tend to be quieter than conventional air conditioners. This is because the compressor does not have to run as fast, so it produces less noise.
          If you are looking for an air conditioner that is energy-efficient and quiet, then an inverter air conditioner is a good option. If you are considering buying an air conditioner, I recommend that you get an inverter air conditioner. It is a more efficient and comfortable option that will save you money in the long run.
        </p>
        <span className='block py-10 text-xl font-semibold'>
          Yes! We are here to provide you.
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <Image src={L1} width={250} className='border-4 rounded border-indigo-500' />
        <Image src={L2} width={250} className='border-4 rounded border-indigo-500' />
        <Image src={L3} width={250} className='border-4 rounded border-indigo-500' />
        <Image src={L4} width={250} className='border-4 rounded border-indigo-500' />
      </div>
      <p className='py-20 text-2xl font-semibold text-center'>
        Iconic Energy Solutions provide services to every type of AC Inverter Tech or Company.
      </p>
      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-10 px-10 py-20">
        <Image src={LG} height={50} />
        <Image src={Orient} height={50} />
        <Image src={Mitsibushi} height={50} />
        <Image src={Haier} height={50} />
        <Image src={Gree} height={50} />
        <Image src={Kenwood} height={50} />
      </div>
      <Link href='/contact' className='text-indigo-500 text-lg flex gap-3 flex-wrap items-center justify-center'>
        Learn More
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor" /></svg>
      </Link>
    </div>
  )
}

export default page
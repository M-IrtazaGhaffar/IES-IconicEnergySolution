import Image from 'next/image'
import React from 'react'
import Hotel from "../assets/hotel.jpg";
import Bank from "../assets/bank.jpg";
import Hospital from "../assets/hospital.jpg";
import Industry from "../assets/industry.jpg";
import Oil from "../assets/oilgas.jpg";
import Tower from "../assets/tower.jpg";
import Residential from "../assets/residential.jpg";

function page() {
    const data = [
        {
            title: 'Telecommunications',
            desc: 'Iconic Energy Solutions has been the pioneer in providing services to the Telecommunications sector. Having telecommunication giants on its clientele, Iconic Energy Solutions is undoubtedly the best at what it does and our clients act as our pride.',
            img: Tower
        },
        {
            title: 'Industrial',
            desc: 'We have been recognised in the Pakistani Industry since last decade. Having installed more than 500 gensets in various industries ranging from 100kVA to 2MW, Iconic Energy Solutions is undoubtedly at prime in providing energy solutions in Pakistan. We have covered industries ranging from pharmaceuticals, paint & cement to sports, beverages & clothing.',
            img: Industry
        },
        {
            title: 'Oil & Gas',
            desc: 'Iconic Energy Solutions has proudly been in the limelight for the Oil & Gas sector of Pakistan. Having installed up to 2MW in various projects, Iconic Energy Solutions has provided exceptional installation and after sales support to its clients from the sector.',
            img: Oil
        },
        {
            title: 'Banking',
            desc: 'The team of Iconic Energy Solutions has worked tirelessly to capture a significant share of the Banking Sector of Pakistan. With unmatched efforts, Iconic Energy Solutions has successfully installed several generator sets ranging from 13kVA to 1250kVA in various commercial banks in Pakistan.',
            img: Bank
        },
        {
            title: 'Hotels',
            desc: 'Iconic Energy Solutions has executed several hospitality power generation projects across all the cities of Pakistan. Our expertise in the hospitality sector is unlike any other as we promise a highly reliable after sales service. Iconic Energy Solutions has initialised generator sets ranging from 100kVA to 1MW in hotels across Pakistan.',
            img: Hotel
        },
        {
            title: 'Residential',
            desc: 'Iconic Energy Solutions has successfully installed several generator sets in residential projects around Pakistan. From celebrities to politicians and doctors to engineers houses, we have done it all! Try out our Load Calculator to see which generator sets meets your house requirements optimally. We offer generator sets ranging from 10kVA-100kVA for residential projects.',
            img: Residential
        },
        {
            title: 'Hospitals',
            desc: 'Just like every other sector and industry, Iconic Energy Solutions has undoubtedly excelled in providing its unmatched services to the Hospital Sector of Pakistan. The company has successfully installed over 100 generator sets ranging from 200kVA to 2MW in different hospitals across Pakistan.',
            img: Hospital
        },

    ]

    const list = [
        'Break-through and innovative proposas for eftective utilization of land space advisory for clients',
        'Construction contract with labor wodk only',
        'Construction contract with labor and material work',
        'Construction contract with Labor, material, complete dravings, interior exterior finishing work',
        'Contracts with material, interior & exterior hnishing work may comprise of B- Class, A-Class and Signature work depending on clients desired',
        'Capacity of executing mega projects with land space of up to 20 kanals/90,000 SFT/10, 117 SQM',
        'Deploynent and Management through muti-functional professional Tesources and arrangement of various kind of construction and finishing material is one of the buil-in features of this product enabling us to asist our valuable cients as per thcir requirements',
        'Project Execution is further divided in to various development phases mutually agreed with the clhents to monitor, control and review the project progress steadily completed under cach phase and moreover assisting the clients to manage the funds against each progress billing',
        'Demolishing and Reconstruction are also covered under the said product but with a diferent construction contract covering demolishing aspect of the product',
        'Back-to-Back Supply of construction material by establishing a strong supply chain with multiple vendors'
    ]
    return (
        <div className='bg-white min-h-screen p-10'>
            <h1 className='text-4xl lg:text-6xl py-10 lg:py-20 text-center font-extrabold'>
                Applications
            </h1>
            <div className='flex justify-center items-center gap-5 flex-wrap'>
                {
                    data.map(item => {
                        return (
                            <div className='lg:w-[20vw] bg-slate-100 rounded hover:scale-110 transition-all' key={item.title}>
                                <Image alt='Image' src={item.img} width={250} className='w-full rounded' />
                                <h3 className='text-lg font-semibold p-3'>{item.title}</h3>
                                <p className='text-xs p-3'>{item.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='py-10'>
                <h3 className='text-2xl lg:text-4xl py-2 font-semibold'>
                    Here are our Features!
                </h3>
                <ul className='list-decimal list-inside space-y-5'>
                    <p className='py-2'>Capable of providing one-window solution for multidimensional and complex sort of construction services for residential & commercial development including the following services :</p>
                    {
                        list.map(item => {
                            return (
                                <li key={item} className='text-md'>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default page
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "../assets/Logo1.png";
// bg-[#576CBC]

function Footer() {
    return (
        <section className='bg-white shadow-2xl'>
            <footer className="footer p-10 bg-indigo-500 text-white rounded-t-3xl boxShadow">
                <div className='lg:w-[50vw]'>
                {/* <Image src={Logo} /> */}
                    <h3 className='pt-10 text-2xl font-bold'>
                        Iconic Energy Solutions
                    </h3>
                    <p className='text-xs'>
                        Iconic Energy Solution is renowned service provider company dealing in Standby Power, Civil Works and Air Conditioning Systems in the Banking, Restaurants, Textile & Education sectors.
                    </p>
                    <ul className='flex flex-col gap-2 py-5'>
                        <span className='text-xs opacity-75 underline'>Click on the given mail address or phone number to continue</span>
                        <li>Mail us at <br /> <a href="mailto:Info@iconicenergy.com.pk" className='p-5'>Info@iconicenergy.com.pk</a>
                        </li>
                        <li>
                            Call us on <br /> <a href="tel:+923335390253" className='text-sm p-5'>+92 333 5390253</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className='link link-hover' href='/ac'>AC Inverter</Link>
                    <Link className={`transition-all outline-none`} href='/ats'>ATS</Link>
                    <Link className={`transition-all outline-none`} href='/cctv'>CCTV</Link>
                    <Link className={`transition-all outline-none`} href='/others'>Others</Link>
                    <Link className={`transition-all outline-none`} href='/contact'>Contact Us</Link>
                    <Link className={`transition-all outline-none`} href='/load'>Load Calculator</Link>
                    <Link className={`transition-all outline-none`} href='/applications'>Applications</Link>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-[#0B2447] text-white text-xs">
                <div className='flex gap-2 flex-col md:gap-7 md:flex-row'>
                    <p>Copyright © 2023 </p>
                    <p> All rights are reserved</p>
                    <p> Made by <a href="https://www.ittidevelops.com" target='_blank'>ITTI Develops</a></p>
                </div>
            </footer>
        </section>
    )
}

export default Footer
import React from 'react'
// bg-[#576CBC]

function Footer() {
    return (
        <section className='bg-white shadow-2xl '>
            <footer className="footer p-10 bg-indigo-500 text-white rounded-t-3xl">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
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
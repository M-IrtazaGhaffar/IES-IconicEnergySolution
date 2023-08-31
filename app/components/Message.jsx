import Image from 'next/image'
import React from 'react'

function Message() {
    return (
        <div className='min-h-screen max-w-[100vw] py-10 flex gap-10 flex-col flex-wrap overflow-hidden'>
            <div className='text-center p-10 flex flex-col gap-5'>
                <h1 className='text-6xl  font-extrabold '>
                    Our Founders
                </h1>
                <p className='text-sm'>
                    Our founders are true pioneers who saw opportunities where others saw challenges. Fueled by their passion for [industry/sector], they embarked on a mission to revolutionize the landscape and push boundaries. Their innovative thinking and unwavering determination have been the driving force behind our company's evolution.
                </p>
            </div>
            <div className='flex justify-between items-center flex-col lg:flex-row'>
                <div className='bg-indigo-500 lg:w-[40%] rounded-3xl messageImg relative left-[-80px] lg:left-[-50px] flex justify-end px-5 py-1 overflow-hidden'>
                    <Image className='scale-90' width={300} height={100} src={'https://th.bing.com/th/id/OIP.FP8wuR2w9ZKyLz8Xjfg8-gHaLH?pid=ImgDet&rs=1'} />
                </div>
                <div className='lg:w-[80%] px-10'>
                    <h1 className='text-2xl font-semibold py-10'>
                        CEO&#39;S MESSAGE
                        <br />
                        <span className='text-base flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            </svg>
                            SYED MUNTAZIR MEHDI
                        </span>
                    </h1>
                    <p>I strongly believe that real business success is not just about profits measured in numbers and rather more importantly as to how those numbers are achieved. Our corporate strategy reflects our commitment to sustainable business practices and balancing responsibility along - side growth and productivity. We certainly have come a long way from being a "sub- contractor" to a quality engineering outfit in the country. The long journey has been hard and difficult with all the pains associated with the birth of a new company. We at Prominent regard every obstacle in the path
                        as a challenge to our own capabilities and an experience in a perpetual learning process.</p>
                </div>
            </div>
            <div className='flex justify-between items-center flex-col-reverse lg:flex-row'>
                <div className='lg:w-[80%] px-10'>
                    <h1 className='text-2xl font-semibold py-10'>
                        DIRECTOR&#39;S MESSAGE
                        <br />
                        <span className='text-base flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            </svg>
                            SYED INTIZAR MEHDI
                        </span>
                    </h1>
                    <p>Power Industry is being revolutionized and getting increasingly competitive and complex, it therefore becomes essential for companies to concentrate more on their core businesses in order to delivering
                        value. ICONIC Management understands this and thus has put to gether every vital component to be largest network national company in generator services throughout Pakistan.
                        Since inception we have strived working towards our vision, and meeting client expectations. So customer satisfaction is at the forefront of our every undertaking. We comply with strategy and regulations of alt clients specially banking sector, and understand the significance of offering our clients prompt and impeccable services.
                        Our expertise in the area of non-core functions enables us to ensure a seamless movement of your business activities. The satisfaction of our
                        customers is our greatest reward. It inspires us to be innovative and motivates us to excel.</p>
                </div>
                <div className='bg-indigo-500 lg:w-[40%] rounded-3xl messageImgr relative right-[-80px] lg:right-[-50px] flex justify-start px-5 py-1 overflow-hidden'>
                    <Image className='scale-90' width={300} height={100} src={'https://th.bing.com/th/id/OIP.FP8wuR2w9ZKyLz8Xjfg8-gHaLH?pid=ImgDet&rs=1'} />
                </div>
            </div>
        </div>
    )
}

export default Message
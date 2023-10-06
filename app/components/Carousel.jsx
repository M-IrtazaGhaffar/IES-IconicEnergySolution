import C2 from "../assets/Carousel/2.jpeg";
import C3 from "../assets/Carousel/3.jpeg";
import C4 from "../assets/Carousel/4.jpeg";
import C5 from "../assets/Carousel/5.jpeg";
import C6 from "../assets/Carousel/6.jpeg";
import C7 from "../assets/Carousel/7.jpeg";
import C10 from "../assets/Carousel/10.jpeg";
import C12 from "../assets/Carousel/12.jpeg";
import C14 from "../assets/Carousel/14.jpeg";
import C15 from "../assets/Carousel/15.jpeg";
import C16 from "../assets/Carousel/16.jpeg";
import C17 from "../assets/Carousel/17.jpeg";
import C18 from "../assets/Carousel/18.jpeg";
import C19 from "../assets/Carousel/19.jpeg";
import C20 from "../assets/Carousel/20.jpeg";
import C21 from "../assets/Carousel/21.jpeg";
import C22 from "../assets/Carousel/22.jpeg";
import C23 from "../assets/Carousel/23.jpeg";
import C24 from "../assets/Carousel/24.jpeg";
import C25 from "../assets/Carousel/25.jpeg";
import C26 from "../assets/Carousel/26.jpeg";
import C27 from "../assets/Carousel/27.jpeg";
import C28 from "../assets/Carousel/28.jpeg";
import C29 from "../assets/Carousel/29.jpeg";
import C30 from "../assets/Carousel/30.jpeg";
import C31 from "../assets/Carousel/31.jpeg";
import Image from "next/image";

function Carousel() {

    const data = [C2, C3, C4, C5, C6, C7, C10, C12, C14, C15, C16, C17, C18, C19, C20, C21, C22, C23, C24, C25, C26, C27, C28, C29, C30, C31]

    return (
        <div className='min-h-[50vh] p-5 lg:p-20 flex items-center justify-center flex-wrap flex-col gap-5'>
            <h1 className="text-2xl p-3 font-bold text-center lg:w-[50%] text-indigo-700">
                Wondering about Our Works?
            </h1>
            <div className="w-[100%] lg:w-[750px] carousel rounded-box bg-slate-300 p-3 flex gap-3">
                {
                    data.map((item, index) => {
                        return (
                            <div className="carousel-item w-full p-3" key={index}>
                                <Image src={item} className="rounded w-full" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carousel
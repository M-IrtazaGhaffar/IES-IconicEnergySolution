import C1 from "../assets/Carousel/1.jpeg";
import C2 from "../assets/Carousel/2.jpeg";
import C3 from "../assets/Carousel/3.jpeg";
import C4 from "../assets/Carousel/4.jpeg";
import C5 from "../assets/Carousel/5.jpeg";
import C6 from "../assets/Carousel/6.jpeg";
import C7 from "../assets/Carousel/7.jpeg";
import C10 from "../assets/Carousel/10.jpeg";
import C12 from "../assets/Carousel/12.jpeg";
import C13 from "../assets/Carousel/13.jpeg";
import Image from 'next/image';

function Carousel() {

    const data = [
        {
            id: 1,
            img: C1
        },
        {
            id: 2,
            img: C2
        },
        {
            id: 3,
            img: C3
        },
        {
            id: 4,
            img: C4
        },
        {
            id: 5,
            img: C5
        },
        {
            id: 6,
            img: C6
        },
        {
            id: 7,
            img: C7
        },
        {
            id: 8,
            img: C10
        },
        {
            id: 9,
            img: C12
        },
        {
            id: 10,
            img: C13
        },
    ]

    return (
        <div className='min-h-[50vh] p-5 lg:p-20 flex items-center justify-center flex-wrap gap-5'>
            <h1 className="text-2xl p-3 font-bold text-center lg:w-[50%] text-indigo-700">
                Wondering about Our Works?
            </h1>
            <div className="w-[100%] lg:w-96 carousel rounded-box bg-slate-300 p-3 flex gap-3">
                {
                    data.map((item, index) => {
                        return (
                            <div className="carousel-item w-full p-3">
                                <Image src={item.img} className="rounded w-full" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carousel
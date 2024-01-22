'use client';

import { Carousel } from 'flowbite-react';

export default function Component() {
    return (
        <div className="">
            <Carousel pauseOnHover className='h-96 bg-red-800 p-0 m-0'>
                <img src="/sliders/slide1.jpg" alt="..." />
                <img src="/sliders/slide2.jpg" alt="..." />
                <img src="/sliders/slide3.jpg" alt="..." />
                <img src="/sliders/slide4.jpg" alt="..." />
                <img src="/sliders/slide5.jpg" alt="..." />
                <img src="/sliders/slide6.jpg" alt="..." />
                <img src="/sliders/slide7.jpg" alt="..." />
                <img src="/sliders/slide8.jpg" alt="..." />
            </Carousel>
        </div>
    )
}
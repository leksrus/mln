'use client';
import Card from './card';

import { Avatar, Blockquote, Carousel } from 'flowbite-react';

export default function Component() {
    return (
        <>
            <div className="flex flex-col items-center w-full gap-4 p-8 mb-8 md:flex-row md:mb-0 justify-center">
                <Carousel pauseOnHover className='w-full h-96 px-20 m-0 mx-auto'>
                    <div className='flex '>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </div>
                    <div className='flex'>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </div>
                </Carousel>
            </div >
        </>

    );
}
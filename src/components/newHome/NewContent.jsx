'use client'
import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import { GiHeartNecklace } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";

const NewContent = () => {
    const [inViewLeft, setInViewLeft] = useState(false);
    const [inViewRight, setInViewRight] = useState(false);

    return (
        <div className='bg-white w-full overflow-y-hidden overflow-x-hidden min-h-screen grid grid-cols-1 md:grid-cols-2 p-5 md:p-6 lg:p-8 gap-6'>
            {/* Left Grid */}
            <ScrollTrigger onEnter={() => setInViewLeft(true)} onExit={() => setInViewLeft(false)}>
                <div className={`p-5  flex flex-col justify-center transform transition-transform duration-1000 ${inViewLeft ? 'translate-x-0 opacity-100' : '-translate-x-32 opacity-0'}`}>
                    <h1 className='text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold text-[#efbf04] pb-7'>
                        HANDCRAFTED & ETHICALLY SOURCED
                    </h1>

                    <div className='flex items-center pb-3'>
                        <div className='bg-[#7b071e] rounded-full p-4 flex items-center justify-center'>
                            <IoDiamondOutline className='text-white text-2xl' />
                        </div>
                        <h3 className='ml-3 text-xl md:text-2xl lg:text-2xl font-bold text-[#7b071e]'>
                            FAIR PRICING
                        </h3>
                    </div>
                    <p className='text-base md:text-lg '>
                        Nullam quis ante. Pellentesque libero tortor, tincidunt et, tincidunt amet est. In hac habitasse platea dictumst. Praesent nec nisl a purus blandit viverra.
                    </p>

                    <div className='flex items-center pb-3 pt-7'>
                        <div className='bg-[#7b071e] rounded-full p-4 flex items-center justify-center'>
                            <GiHeartNecklace className='text-white text-2xl' />
                        </div>
                        <h3 className='ml-3 text-[#7b071e] text-xl md:text-2xl lg:text-2xl font-bold'>
                            HIGH QUALITY
                        </h3>
                    </div>
                    <p className='text-base md:text-lg '>
                        Nullam quis ante. Pellentesque libero tortor, tincidunt et, tincidunt amet est. In hac habitasse platea dictumst. Praesent nec nisl a purus blandit viverra.
                    </p>
                    <div className='flex items-center pb-3 pt-3'>
                        <div className='bg-[#7b071e] rounded-full p-4 flex items-center justify-center'>
                            <IoDiamondOutline className='text-white text-2xl' />
                        </div>
                        <h3 className='ml-3 text-xl md:text-2xl lg:text-2xl font-bold text-[#7b071e]'>
                            FAIR PRICING
                        </h3>
                    </div>
                    <p className='text-base md:text-lg '>
                        Nullam quis ante. Pellentesque libero tortor, tincidunt et, tincidunt amet est. In hac habitasse platea dictumst. Praesent nec nisl a purus blandit viverra.
                    </p>
                    <div className='flex items-center pb-3 pt-3'>
                        <div className='bg-[#7b071e] rounded-full p-4 flex items-center justify-center'>
                            <IoDiamondOutline className='text-white text-2xl' />
                        </div>
                        <h3 className='ml-3 text-xl md:text-2xl lg:text-2xl font-bold text-[#7b071e]'>
                            FAIR PRICING
                        </h3>
                    </div>
                    <p className='text-base md:text-lg '>
                        Nullam quis ante. Pellentesque libero tortor, tincidunt et, tincidunt amet est. In hac habitasse platea dictumst. Praesent nec nisl a purus blandit viverra.
                    </p>
                </div>
            </ScrollTrigger>

            {/* Right Grid */}
            <ScrollTrigger onEnter={() => setInViewRight(true)} onExit={() => setInViewRight(false)}>
                <div className={`flex  justify-center items-center transform transition-transform duration-1000 ${inViewRight ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'}`}>
                    <img
                        src="https://www.totaramsons.com/assets/images/goldcat.jpg"
                        alt='Handcrafted and Ethically Sourced'
                        className='object-cover w-full h-auto' // Full width and maintain aspect ratio
                    />
                </div>
            </ScrollTrigger>
        </div>
    );
};

export default NewContent;

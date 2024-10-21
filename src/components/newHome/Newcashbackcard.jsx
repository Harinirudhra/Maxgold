"use client";
import React, { useEffect, useState } from 'react';
import o from '../../../public/30MIN.png';
import t from '../../../public/DOOR.png';
import th from '../../../public/rating.png';
import f from '../../../public/MONEY.png';
import g from '../../../public/bulid.png';
import ScrollTrigger from 'react-scroll-trigger';

const Newcashbackcard = () => {
    const [visibleItems, setVisibleItems] = useState([false, false, false, false]); // State to control visibility of items

    const handleEnter = () => {
        // Set all items to visible when entering the section
        setVisibleItems([true, true, true, true]);
    };

    const handleExit = () => {
        // Reset the visibility when exiting the section (optional)
        setVisibleItems([false, false, false, false]);
    };

    return (
        <ScrollTrigger onEnter={handleEnter} onExit={handleExit}>
            <div className='w-auto h-auto grid grid-cols-1 md:grid-cols-5 gap-8 pb-10 px-20'>
                {/* Item 1 */}
                <div className={`flex flex-col items-center py-4 transition-opacity duration-[2000ms] ${visibleItems[0] ? 'opacity-100' : 'opacity-0'}`}>
                    <div className='flex items-center justify-center'>
                        <img src={o.src} className='w-36 h-36 object-contain' />
                    </div>
                    <p className='w-60 text-center text-xl pt-4 text-[#7b071e] font-bold'>Instant cash within 30 minutes</p>
                </div>

                {/* Item 2 */}
                <div className={`flex flex-col items-center py-4 transition-opacity duration-[3000ms] ${visibleItems[1] ? 'opacity-100' : 'opacity-0'}`}>
                    <div className='text-[#e22f2f] flex items-center justify-center'>
                        <img src={t.src} className='w-36 h-36 object-contain' />
                    </div>
                    <p className='w-60 text-center text-xl pt-4 font-bold text-[#7b071e]'>Door services</p>
                </div>

                {/* Item 3 */}
                <div className={`flex flex-col items-center py-4 transition-opacity duration-[4000ms] ${visibleItems[2] ? 'opacity-100' : 'opacity-0'}`}>
                    <div className='text-[#e22f2f] flex items-center justify-center'>
                        <img src={th.src} className='w-36 h-36 object-contain' />
                    </div>
                    <p className='w-60 text-center text-xl pt-4 font-bold text-[#7b071e]'>Pledge gold takeover</p>
                </div>

                {/* Item 4 */}
                <div className={`flex flex-col items-center py-4 transition-opacity duration-[5000ms] ${visibleItems[3] ? 'opacity-100' : 'opacity-0'}`}>
                    <div className='text-[#e22f2f] flex items-center justify-center'>
                        <img src={f.src} className='w-36 h-36 object-contain' />
                    </div>
                    <p className='w-60 text-center text-xl pt-4 font-bold text-[#7b071e]'>8 Lacs+ Satisfied customers</p>
                </div>
                <div className={`flex flex-col items-center py-4 transition-opacity duration-[4000ms] ${visibleItems[2] ? 'opacity-100' : 'opacity-0'}`}>
                    <div className='text-[#e22f2f] flex items-center justify-center'>
                        <img src={g.src} className='w-28 h-36 object-contain' />
                    </div>
                    <p className='w-60 text-center text-xl pt-4 font-bold text-[#7b071e]'>30+ years </p>
                </div>
            </div>
        </ScrollTrigger>
    );
}

export default Newcashbackcard;

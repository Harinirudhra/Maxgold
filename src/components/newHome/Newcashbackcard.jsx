"use client"
import React from 'react'
import o from '../../../public/30MIN.png';
import t from '../../../public/DOOR.png';
import th from '../../../public/rating.png';
import f from '../../../public/MONEY.png';

const Newcashbackcard = () => {
    return (
        <div className='w-auto h-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 px-20'>
            {/* Item 1 */}
            <div className="flex flex-col items-center py-4">
                <div className=' flex items-center justify-center'>
                    <img src={o.src} className='w-36 h-36 object-contain' />
                </div>
                <p className='w-60 text-center text-xl pt-4 text-[#550000] font-bold'>Instant cash within 30 minutes</p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center py-4">
                <div className='text-[#e22f2f] flex items-center justify-center'>
                    <img src={t.src} className='w-36 h-36 object-contain' />
                </div>
                <p className='w-60 text-center text-xl pt-4 font-bold text-[#550000]'>Door services</p> {/* Adjusted upwards */}
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center py-4">
                <div className='text-[#e22f2f] flex items-center justify-center'>
                    <img src={th.src} className='w-36 h-36 object-contain' />
                </div>
                <p className='w-60 text-center text-xl pt-4 font-bold text-[#550000]'>Pledge gold takeover</p> {/* Adjusted upwards */}
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center py-4">
                <div className='text-[#e22f2f] flex items-center justify-center'>
                    <img src={f.src} className='w-36 h-36 object-contain' />
                </div>
                <p className='w-60 text-center text-xl pt-4 font-bold text-[#550000]'>8 Lacs+ Satisfied customers</p>
            </div>
        </div>
    )
}

export default Newcashbackcard;

import React from 'react';
import { GiHeartNecklace } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";


const NewContent = () => {
    return (
        <div className='bg-white w-full min-h-screen grid grid-cols-1 md:grid-cols-2 p-5 md:p-6 lg:p-8 gap-6'>
            <div className='p-5 flex flex-col justify-center'>
                <h1 className='text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-bold text-[#efbf04] pb-7'>
                    HANDCRAFTED & ETHICALLY SOURCED
                </h1>

                <div className='flex items-center pb-3'>
                    <div className='bg-[#550000] rounded-full p-4 flex items-center justify-center'>
                        <IoDiamondOutline className='text-white text-2xl' />
                    </div>
                    <h3 className='ml-3 text-xl md:text-2xl lg:text-2xl font-bold text-[#efbf04]'>
                        FAIR PRICING
                    </h3>
                </div>
                <p className='text-base md:text-lg lg:text-xl '>
                    Nullam quis ante. Pellentesque libero tortor, tincidunt et, tincidunt amet est. In hac habitasse platea dictumst. Praesent nec nisl a purus blandit viverra.
                </p>

                <div className='flex items-center pb-3 pt-7'>
                    <div className='bg-[#550000] rounded-full p-4 flex items-center justify-center'>
                        <GiHeartNecklace className='text-white text-2xl' />
                    </div>
                    <h3 className='ml-3 text-[#efbf04] text-xl md:text-2xl lg:text-2xl font-bold'>
                        HIGH QUALITY
                    </h3>
                </div>
                <p className='text-base md:text-lg lg:text-xl'>
                    Nullam quis ante. Pellentesque libero tortor, tincidunt et, tincidunt amet est. In hac habitasse platea dictumst. Praesent nec nisl a purus blandit viverra.
                </p>
            </div>

            <div className='flex justify-center items-center'>
                <img
                    src="https://www.totaramsons.com/assets/images/goldcat.jpg"
                    alt='Handcrafted and Ethically Sourced'
                    layout="responsive" // Ensures responsive sizing
                    width={500} // Add your desired width
                    height={400} // Add your desired height
                    className='object-cover w-full h-auto' // Full width and maintain aspect ratio
                />
            </div>
        </div>
    );
};

export default NewContent;

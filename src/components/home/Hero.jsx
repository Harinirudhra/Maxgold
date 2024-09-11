import React from 'react';

const Hero = () => {
    return (
        <div className="bg-red-100 bg-cover bg-center h-screen flex items-center">
            <img src='https://static.vecteezy.com/system/resources/previews/024/748/938/non_2x/confident-indian-beauty-exudes-sensuality-in-traditional-clothing-and-jewelry-generated-by-ai-free-photo.jpg' className='w-screen h-screen p-6'></img>
            <div className="absolute left-20 top-2/4">
                <h1 className="text-white text-6xl font-bold">You deserve valuable price in <span>market</span></h1>
                <button className="bg-yellow-300 text-amber-900 font-bold py-2 px-4 rounded hover:bg-red-500 hover:text-white mx-6 my-8">
                    Sell Gold
                </button>
                <button className="opacity-75 border border-white text-white font-bold py-2 px-4 rounded hover:bg-red-500  my-8">
                    Know more
                </button>
            </div>
        </div>
    );
}

export default Hero;

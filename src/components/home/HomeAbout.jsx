import React from 'react'
import Image from 'next/image'
import samplepic from "../home/goldsamplepic.jpg"

const HomeAbout = () => {
    return (
        <div>
          <div class="flex flex-col md:flex-row items-center md:items-start">

  <Image src={samplepic}  width={700} height={100} style={{ height: '450px' }} class="p-3 ml-0 md:ml-10 w-full md:w-auto" />
  
  <div class="ml-0 md:ml-10 pr-5 md:pr-10 mt-5 md:mt-0 w-full md:w-1/2 p-5">
    <h1 class="text-red-600 font-bold">____</h1>
    <h1 class="text-red-600 pt-3 text-2xl md:text-3xl font-bold">About Us</h1>
    <p class="mt-9 text-gray-500 text-justify">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus porro quae, ipsam explicabo quaerat sequi quo, tempore assumenda error voluptatem est dolore in culpa eos esse tenetur harum ullam quos? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus porro quae, ipsam explicabo quaerat sequi quo, tempore assumenda error voluptatem est dolore in culpa eos esse tenetur harum ullam quos?
    </p>
    <p class="mt-10 text-gray-500 text-justify">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus porro quae, ipsam explicabo quaerat sequi quo, tempore assumenda error voluptatem est.
    </p>
    <button class="mt-5 text-gray-500 text-sm border rounded-3xl border-red-500 p-2 px-7 hover:bg-red-500 hover:text-white transition duration-300">
      Read More
    </button>
  </div>
</div>





            <div class="flex flex-row gap-x-10 ml-20 mt-10  mb-24 hidden md:flex">
                <div class="text-sm w-[390px] ">
                    <p  class='text-red-500'> Development</p>
                    <h1 class='font-bold pt-1 '>How to deal with subjective Feedback <br></br> from client</h1>
                    <h3 class='text-sm pt-1'>Наша команда состоит из высококлассных<br></br>специалистов с международным опытом...</h3>
                </div>
                <div class=" text-sm w-[390px]">
                    <p  class='text-red-500'>Marketing</p>
                    <h1 class='font-bold pt-1'>How to pretent you know something<br></br>you really dont</h1>
                    <h3 class='text-sm pt-1'>Наша команда состоит из высококлассных <br></br>специалистов с международным опытом...</h3>
                </div>
                <div class=" text-sm  w-[390px]">
                    <p  class='text-red-500'> Development</p>
                    <h1 class='font-bold  pt-1'>What software is our favourite and <br></br>why,</h1>
                    <h3 class='text-sm pt-1'>Наша команда состоит из высококлассных<br></br>специалистов с международным опытом...</h3>
                </div>
            </div>
          
        </div>
    )
}

export default HomeAbout

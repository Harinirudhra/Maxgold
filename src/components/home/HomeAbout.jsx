import React from 'react'
import Image from 'next/image'
import samplepic from "../home/goldsamplepic.jpg"

const HomeAbout = () => {
    return (
        <div>

<div class="flex flex-col sm:flex-row md:flex-row items-center sm:items-start sm:px-5 md:px-10 lg:px-20 ">
  <Image
    src={samplepic}
    width={700}
    height={100}
    style={{ height: '450px' }}
    class="p-3 w-full sm:w-1/2 md:w-1/2 lg:1/4 pt-7"
  />

  <div class="ml-0 sm:ml-5 md:ml-3 lg:ml-10 pr-5 pt-2 md:pr-0 lg:pr-2 mt-0 sm:mt-0 md:mt-0  sm:w-1/2 md:w-1/2 p-3 ">
    <h1 class="text-red-600 font-Extrabold">____</h1>
    <h1 class="text-red-600 pt-3 text-2xl sm:text-3xl md:text-3xl md:pt-1 lg:text-4xl font-bold lg:mt-5">About Us</h1>
    <p class="mt-6 text-gray-500 text-justify  md:mt-1 lg:mt-5 xl:mt-7">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus porro quae, ipsam explicabo quaerat sequi quo, tempore assumenda error voluptatem est dolore in culpa eos esse tenetur harum ullam quos? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus porro quae, ipsam explicabo quaerat sequi quo, tempore assumenda error voluptatem est dolore in culpa eos esse tenetur harum ullam quos?
    </p>
    <p class="mt-10 text-gray-500 text-justify md:mt-2  lg:mt-4 xl:mt-10">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus porro quae, ipsam explicabo quaerat sequi quo, tempore assumenda error voluptatem est.
    </p>
    <button class="mt-5 text-gray-500 text-sm border rounded-3xl border-pink-500 p-2 px-7 hover:bg-red-500 hover:text-white transition duration-300 md:mt-1 lg:mt-3 xl:mt-5">
      Read More
    </button>
  </div>
</div>


        



<div class="flex flex-col md:flex-row gap-x-7 gap-y-10 sm:ml-10 p-5 md:ml-10 mr-7 mt-10 mb-10 lg:ml-20">
  <div class="text-sm w-full sm:w-[300px] md:w-[390px]">
    <p class="text-red-500">Development</p>
    <h1 class="font-bold pt-1 text-black">How to deal with subjective Feedback <br></br>from client</h1>
    <h3 class="text-sm pt-1 text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam pariatur atque </h3>
  </div>

  <div class="text-sm w-full sm:w-[300px] md:w-[390px]">
    <p class="text-red-500">Marketing</p>
    <h1 class="font-bold pt-1 text-black">How to pretend you know something<br></br>fyou really don't</h1>
    <h3 class="text-sm pt-1 text-gray-800 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam pariatur atque</h3>
  </div>

  <div class="text-sm w-full sm:w-[300px] md:w-[390px]">
    <p class="text-red-500">Development</p>
    <h1 class="font-bold pt-1 text-black">What software is our favorite and <br></br>fwhy</h1>
    <h3 class="text-sm pt-1 text-gray-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam pariatur atque</h3>
  </div>
</div>
      


          
        </div>
    )
}

export default HomeAbout

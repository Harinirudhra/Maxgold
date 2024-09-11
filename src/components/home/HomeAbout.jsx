import React from 'react'
import Image from 'next/image'
import samplepic from "../home/goldsamplepic.jpg"

const HomeAbout = () => {
    return (
        <div>
            <div class="flex flex-col md:flex-row">
      
            <Image src={samplepic}   width={700} height={100}  style={{ height: '450px' }} class= "p-3 ml-10 md:" ></Image>
          
            <div class= " ml-10 pr-10   ">
                <h1 class='text-red-600 font-bold  w-50'>____</h1>
                <h1 class='text-red-600 pt-3 text-3xl font-bold  '>About us</h1>
                <p class='mt-9 mr-10 text-gray-500  text-justify '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus porro quae, ipsam explicabo quaerat sequi quo, tempore assumenda error voluptatem est dolore in culpa eos esse tenetur harum ullam quos?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus porro quae, ipsam explicabo quaerat sequi quo, tempore assumenda error voluptatem est dolore in culpa eos esse tenetur harum ullam quos?</p>

                <p class='mt-10 mr-10 text-gray-500 text-justify '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus porro quae, ipsam explicabo quaerat sequi quo, tempore assumenda error voluptatemest</p>
                <button class=' mt-5 text-gray-500 text-sm border rounded-3xl border-red-500 p-2 pl-7 pr-6'>Read More</button>
            </div>
            </div>





            <div class="flex flex-row gap-x-10 ml-20 mt-10  mb-24  ">
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

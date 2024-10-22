import React from 'react'
import cash from '../../../../public/Cashforgold/Cashfirst.png'
const DoorStepY = () => {
    return (
        <div>
            <section class=" bg-[#7b071e]">
                <div class="container  p-6 mx-auto space-y-12 lg:px-8 "> <div>
                    <h2 class="text-3xl  text-[#FFD700] px-2 pt-6 font-bold text-center sm:text-5xl"> We offer Door Step Service </h2>
                  
                </div>

                    <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div aria-hidden="true" class="mt-10 lg:mt-0">
                            <img
                                width="600"
                                height="600"
                                src={cash.src}
                                class="mx-auto rounded-lg shadow-lg dark-bg-gray-500"
                                style={{ color: 'transparent' }} />
                        </div>
                        <div>
                            <div class="mt-4 space-y-12">
                                <div class="flex">

                                    <div class="">
                                        <h4 class="text-3xl font-bold text-[#FFD700]  ">Max Gold’s Convenient Doorstep Services: Sell Your Gold, Your Convenience</h4>
                                        <p class="mt-2 text-white ">In the fast-paced world we live in, convenience is key. Whether you’re looking to sell your gold jewelry, coins, or other gold items, Max Gold offers a solution that’s designed with your convenience in mind. Our doorstep services bring the expertise and trustworthiness of Max Gold right to your door, making the process of selling your precious gold easier and more accessible than ever.</p>
                                            <p class='mt-2 text-white'>This comprehensive guide explores the benefits and steps involved in Max Gold’s doorstep services, so you can unlock the hidden value of your gold without leaving the comfort of your home.</p>
                                    </div>
                                </div>
                                <div class="flex">

                                    <div class="">
                                        <h4 class="text-3xl font-bold  text-[#FFD700] ">Max Gold provides the Convenience of Doorstep Services</h4>
                                        <p class="mt-2 text-white ">Max Gold’s doorstep services are designed to cater to the needs of busy individuals who value their time and comfort. By choosing our doorstep services, you eliminate the need to travel to a physical location, stand in line, or wait for appointments. We bring our expertise to you, ensuring a smooth and convenient transaction process. Here are some key benefits:</p>
                                    </div>
                                </div>
                               

                            </div>
                        </div>

                    </div>


                </div>
            </section>

        </div>

    )
}
export default DoorStepY

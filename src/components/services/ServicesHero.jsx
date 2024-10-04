import React from 'react'

const ServicesHero = ({image,title,description}) => {
  return (
    <div className='flex  sm:justify-center min-h-screen lg:justify-start  lg:items-start '>
      <img src={image} className='w-screen h-screen   object-cover'/>
      <div className='absolute lg:ml-6 text-white lg:w-1/3'>
      <h1 className='lg:text-6xl  md:text-4xl text-2xl lg:pt-4 flex justify-center pt-16 '>{title}</h1>
      <p className='text-xl lg:text-3xl flex font-bold flex-wrap lg:pt-10 pt-4 px-4 justify-center md:text-center lg:text-left md:px-10 lg:px-0'>{description}</p>
      </div>
    </div>
  )
}
const Hero = () => {
  return(
    <ServicesHero
    image = "https://i.pinimg.com/originals/ff/9c/20/ff9c204f62b65141a988cde3c7b1484f.jpg"
    title ="Turning Treasures into Trust"
    description="Transform your gold into cash, ensuring value and fostering trust.Every transaction helps uplift both you and our community."
    
    />
  )
}
export default Hero;
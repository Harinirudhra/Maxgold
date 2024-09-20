import React from 'react'

const ServicesHero = ({image}) => {
  return (
    <div>
      <img src={image} className='w-screen h-screen object-cover'/>
    </div>
  )
}
const Hero = () => {
  return(
    <ServicesHero
    image = "https://i.pinimg.com/originals/ff/9c/20/ff9c204f62b65141a988cde3c7b1484f.jpg"
    />
  )
}
export default Hero;
import React from 'react'

const AboutHero = () => {
  return (
  <div className="relative">
  <img 
    src="https://img.freepik.com/free-photo/elegant-gemstone-necklace-shines-with-rare-sophistication-generated-by-ai_188544-10736.jpg?ga=GA1.1.8839009.1724129443&semt=ais_hybrid" 
    className="object-cover w-screen h-screen"
  />
  <div className="absolute lg:top-0 lg:left-0 lg:mt-20 top-0 left-0 p-4">
    <h1 className="text-yellow-300 lg:text-7xl text-5xl lg:-mt-8 lg:p-14 mt-4 p-4">
      Max gold
    </h1>
    <p className="text-white lg:text-3xl text-2xl ml-5 lg:ml-14 lg:-mt-8 mt-4 lg:font-bold">
      We are the best choice for you to sell 
      <span className="block">your precious gold jewelry and get</span> 
      instant cash
    </p>
  </div>
</div>

  )
}

export default AboutHero
import React from 'react'

const AboutUs = () => {
  return (
    <div>
     <div className="bg-gradient-to-t from-red-400 to-red-300 p-8 rounded-lg">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    <div>
      <h2 className="text-3xl font-extrabold text-white mb-4">Best gold buyer near me</h2>
      <p className="text-black font-black mb-4">
        Looking for "Gold buyer near me"? You have reached the right destination. Yes! <span className="font-semibold underline text-black">Max Gold</span> is the most trusted Old gold buyer in Chennai offering most competitive market rates for your gold jewellery.
      </p>
      <h3 className="text-xl font-extrabold text-white mb-2">Our Journey</h3>
      <p className="text-black font-black">
        Max Gold's journey began with a vision to create a safe and reliable platform for individuals to navigate the intricate world of precious metals. Founded in 2006, we set out to offer a seamless and transparent experience in buying and selling gold, silver, and more. Over the years, our unwavering dedication to our core principles has earned us a reputation as a market leader in the industry.
      </p>
    </div>
    <div className="flex justify-center  ">
      <img 
        src="/RKImages/RAMYA.jpg" 
        alt="Max Gold Buyer"
        className="rounded-3xl shadow-lg "

      />
    </div>
  </div>
</div>

    </div>
  )
}

export default AboutUs
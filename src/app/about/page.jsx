import AboutExtra from '@/components/about/AboutExtra'
import AboutFAQ from '@/components/about/AboutFAQ'
import AboutFAQtop from '@/components/about/AboutFAQtop'
import AboutGrid from '@/components/about/AboutGrid'
import AboutHero from '@/components/about/AboutHero'
import AboutUs from '@/components/about/AboutUs'
// import Customers from '@/components/about/Customers'
import OurValue from '@/components/about/OurValue'
import Parallex from '@/components/about/Parallex'
import Testimonials from '@/components/about/Testimonials'
import Countup from '@/components/home/Countup'
import Extra1 from '@/components/home/Extra1'
// import WhyMaxGold from '@/components/old/WhyMaxGold'
import React from 'react'

const page = () => {
  return (
    <div>
      <AboutHero />
      <AboutUs />
      <Extra1/>
      {/* <WhyMaxGold /> */}
      <OurValue />
      <AboutGrid />
      <Testimonials />
      <AboutExtra/>
      <Countup/>
      {/* <Customers /> */}
      <AboutFAQtop />
      <AboutFAQ />


    </div>
  )
}

export default page
import AboutFAQ from '@/components/about/AboutFAQ'
import AboutFAQtop from '@/components/about/AboutFAQtop'
import AboutGrid from '@/components/about/AboutGrid'
import AboutHero from '@/components/about/AboutHero'
import AboutUs from '@/components/about/AboutUs'
// import Customers from '@/components/about/Customers'
import OurValue from '@/components/about/OurValue'
import Testimonials from '@/components/about/Testimonials'
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
      {/* <Customers /> */}
      <AboutFAQtop />
      <AboutFAQ />


    </div>
  )
}

export default page
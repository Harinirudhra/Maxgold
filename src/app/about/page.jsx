import AboutFAQ from '@/components/about/AboutFAQ'
import AboutGrid from '@/components/about/AboutGrid'
import AboutHero from '@/components/about/AboutHero'
import AboutUs from '@/components/about/AboutUs'
import Customers from '@/components/about/Customers'
import OurValue from '@/components/about/OurValue'
import Testimonials from '@/components/about/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
        <AboutHero/>
        <AboutUs/>
        <AboutGrid/>
        <OurValue/>
        <Testimonials/>
        <Customers/>
        <AboutFAQ/>

        
    </div>
  )
}

export default page
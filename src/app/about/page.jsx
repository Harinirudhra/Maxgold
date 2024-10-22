import AboutFAQ from '@/components/about/AboutFAQ'
import AboutFAQtop from '@/components/about/AboutFAQtop'
import AboutGrid from '@/components/about/AboutGrid'
import AboutHero from '@/components/about/AboutHero'
import AboutUs from '@/components/about/AboutUs'
// import Customers from '@/components/about/Customers'
import OurValue from '@/components/about/OurValue'
import Testimonials from '@/components/about/Testimonials'
import Countup from '@/components/home/Countup'
import Extra1 from '@/components/home/Extra1'
// import WhyMaxGold from '@/components/old/WhyMaxGold'
import React from 'react'
import TestimonialExtra from "@/components/home/TestimonialExtra";
import Aboutsecond from '@/components/about/Aboutsecond'
import AboutExtra from '@/components/about/AboutExtra'
import NewTestimonials from '@/components/newHome/NewTestimonials'
import MaxTamil from '@/components/newHome/MaxTamil'
const page = () => {
  return (
    <div>
      <AboutHero />
      <AboutUs />
      <Aboutsecond />
      <Extra1 />
      {/* <WhyMaxGold /> */}
      <MaxTamil/>
      <OurValue />
      {/* <AboutExtra /> */}
      <NewTestimonials/>

      {/* <TestimonialExtra /> */}
      <Countup />
      {/* <Customers /> */}
      <AboutFAQtop />
      <AboutFAQ />


    </div>
  )
}

export default page
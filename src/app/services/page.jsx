import Achievesucesses from '@/components/services/Achievesucesses'

import Servicegrid from '@/components/services/Servicegrid'
import Aboutus from '@/components/services/Aboutus'
import ServicesHero from '@/components/services/ServicesHero'
import React from 'react'
import Ourservices from '@/components/services/Ourservices'
import Extra2 from '@/components/services/Extra2'
import Extra3 from '@/components/services/Extra3'
import Extra1 from '@/components/home/Extra1'

const page = () => {
  return (
    <div>
      <ServicesHero />
      <Ourservices />
      <Servicegrid />
      <Extra1/>
      <Aboutus />
      <Achievesucesses />
      <Extra3/>
      <Extra2/>

    </div>
  )
}

export default page

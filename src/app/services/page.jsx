import Achievesucesses from '@/components/services/Achievesucesses'

import Servicegrid from '@/components/services/Servicegrid'
import Aboutus from '@/components/services/Aboutus'
import ServicesHero from '@/components/services/ServicesHero'
import React from 'react'
import Ourservices from '@/components/services/Ourservices'

const page = () => {
  return (
    <div>
      <ServicesHero />
      <Ourservices />
      <Servicegrid />
      <Aboutus />
      <Achievesucesses />

    </div>
  )
}

export default page

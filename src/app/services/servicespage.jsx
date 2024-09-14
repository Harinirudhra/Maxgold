import Achievesucesses from '@/components/services/Achievesucesses'
import Ourservices from '@/components/services/ourservices'
import Servicegrid from '@/components/services/Servicegrid'
import ServicesHero from '@/components/services/ServicesHero'
import React from 'react'

const servicespage = () => {
  return (
    <div>
        <ServicesHero/>
        <Ourservices/>
       <Servicegrid/>
       <Achievesucesses/>
    
    </div>
  )
}

export default servicespage

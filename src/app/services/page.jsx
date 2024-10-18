import Achievesucesses from '@/components/services/Achievesucesses'

import Servicegrid from '@/components/services/Servicegrid'
import Aboutus from '@/components/services/Aboutus'

import React from 'react'
import Ourservices from '@/components/services/Ourservices'
import Parallax from '@/components/about/Parallex'
import ServicesHero from '@/components/services/ServicesHero'
import CashforGoldY from '@/components/services/cashforgold/CashforGoldY'
import CashforgoldX from '@/components/services/cashforgold/CashforgoldX'
import CashforgoldZ from '@/components/services/cashforgold/CashforgoldZ'


const page = () => {
  return (
    <div>
      <ServicesHero />
      <Ourservices />
      <Servicegrid />
      <Parallax />
      <CashforgoldX />
      <CashforGoldY />
      <CashforgoldZ />
      <Aboutus />
      <Achievesucesses />


    </div>
  )
}

export default page

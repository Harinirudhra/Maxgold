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
import DoorstepX from '@/components/services/DoorStep/DoorstepX'
import DoorstepY from '@/components/services/DoorStep/DoorstepY'
import DoorstepZ from '@/components/services/DoorStep/DoorstepZ'
import ReleaseGoldX from '@/components/services/releasegold/ReleaseGoldX'
import ReleaseGoldY from '@/components/services/releasegold/ReleaseGoldY'
import AddOnService from '@/components/services/addonservice/AddOnService'
import MaxTamil from '@/components/newHome/MaxTamil'


const page = () => {
  return (
    <div>
      <ServicesHero />
      <Ourservices />
      <MaxTamil/>
      {/*<Servicegrid /> */}

      {/* <Achievesucesses /> */}
      <Parallax />


    </div>
  )
}

export default page

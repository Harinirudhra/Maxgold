import Parallax from '@/components/about/Parallex'
import CashforgoldX from '@/components/services/cashforgold/CashforgoldX'
import CashforGoldY from '@/components/services/cashforgold/CashforGoldY'
import CashforgoldZ from '@/components/services/cashforgold/CashforgoldZ'
import Servicegrid from '@/components/services/Servicegrid'
import React from 'react'

const page = () => {
    return (
        <div>
             <CashforgoldX />
            
            <Parallax/>
            <CashforgoldZ/>
           
        </div>
    )
}

export default page

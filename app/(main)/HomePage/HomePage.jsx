import AboutSection from '@/app/components/AboutSection'
import Gallery from '@/app/components/Gallery'
import GuestComments from '@/app/components/GuestComments'
import MenuSection from '@/app/components/MenuSection'
import OurServices from '@/app/components/OurServices'
import React from 'react'

const HomePage = () => {
    return (
        <div>
            <AboutSection />
            <MenuSection />
            <OurServices />
            <Gallery />
            <GuestComments />
        </div>
    )
}

export default HomePage

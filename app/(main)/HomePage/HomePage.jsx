import AboutSection from '@/app/components/AboutSection'
import Gallery from '@/app/components/Gallery'
import GuestComments from '@/app/components/GuestComments'
import Header from '@/app/components/Header'
import MenuSection from '@/app/components/MenuSection'
import React from 'react'

const HomePage = () => {
    return (
        <div>
            <Header />
            <AboutSection />
            <MenuSection />
            <Gallery />
            <GuestComments />
        </div>
    )
}

export default HomePage

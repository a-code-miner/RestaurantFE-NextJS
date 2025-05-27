import AboutSection from '@/app/components/AboutSection'
import Gallery from '@/app/components/Gallery'
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
        </div>
    )
}

export default HomePage

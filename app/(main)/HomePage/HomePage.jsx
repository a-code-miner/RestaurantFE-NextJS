import AboutSection from '@/app/components/AboutSection'
import Footer from '@/app/components/Footer'
import Gallery from '@/app/components/Gallery'
import GuestComments from '@/app/components/GuestComments'
import Header from '@/app/components/Header'
import MenuSection from '@/app/components/MenuSection'
import WalletButton from '@/app/components/WalletButton'
import React from 'react'

const HomePage = () => {
    return (
        <div>
            <Header />
            <AboutSection />
            <MenuSection />
            <Gallery />
            <GuestComments />
            <Footer />
            <WalletButton />
        </div>
    )
}

export default HomePage

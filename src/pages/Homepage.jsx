import React from 'react'
import MarketingCarousel from '../compenents/MarketingCarousel'
import PrioritizeRevenueSection from '../compenents/PrioritizeRevenueSection'
import ConnectYourTools from '../compenents/ConnectYourTools'
import Footer from '../compenents/Footer'
import GetStartedEasily from '../compenents/GetStartedEasily'

const Homepage = () => {
  return (
    <>
        <MarketingCarousel/>
        <PrioritizeRevenueSection/>
        <ConnectYourTools/>
        <GetStartedEasily/>
        <Footer/>
    </>
  )
}

export default Homepage

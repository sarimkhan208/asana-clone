import React from 'react'
import MarketingCarousel from '../compenents/MarketingCarousel'
import PrioritizeRevenueSection from '../compenents/PrioritizeRevenueSection'
import ConnectYourTools from '../compenents/ConnectYourTools'
import Footer from '../compenents/Footer'
import GetStartedEasily from '../compenents/GetStartedEasily'

const Homepage = () => {
  return (
    <div>
        <MarketingCarousel/>
        <PrioritizeRevenueSection/>
        <ConnectYourTools/>
        <GetStartedEasily/>
        <Footer/>
    </div>
  )
}

export default Homepage

import React from 'react'
import MarketingCarousel from '../compenents/MarketingCarousel'
import PrioritizeRevenueSection from '../compenents/PrioritizeRevenueSection'
import ConnectYourTools from '../compenents/ConnectYourTools'
import Footer from '../compenents/Footer'
import GetStartedEasily from '../compenents/GetStartedEasily'
import ManageComplex from '../compenents/ManageComplex'

const Homepage = () => {
  return (
    <div>
        <MarketingCarousel/>
        <ManageComplex/>
        <PrioritizeRevenueSection/>
        <ConnectYourTools/>
        <GetStartedEasily/>
        
    </div>
  )
}

export default Homepage

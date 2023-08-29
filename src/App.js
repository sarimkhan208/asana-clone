import logo from './logo.svg';
import './index.css'
import Navbar from './compenents/Navbar';
import MarketingCarousel from './compenents/MarketingCarousel';
import PrioritizeRevenueSection from './compenents/PrioritizeRevenueSection';
import Footer from './compenents/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <MarketingCarousel/>
      <PrioritizeRevenueSection/>
      <Footer/>
    </>
  );
}

export default App;

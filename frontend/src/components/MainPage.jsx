import Header from './assets/Header'
import Home from './Home'
import About from './About'
import CompliancyInfo from './compliance/Compliancy-Info'
import ITServices from './ITServices/ITServices'
import Footer from './assets/Footer'
import OtherServices from './other-services/OtherServices'
import Divider from './assets/Divider'

/**
 * Component for site landing page. 
 * 
 * @return {JSX.Element} - The MainPage component.
 */
const MainPage = () => {

  return (
      <div>
        <Header />
        <Home />
        <About />
        <Divider />
        <ITServices />
        <CompliancyInfo />
        <OtherServices />
        <Footer />
      </div>
  )
}

export default MainPage

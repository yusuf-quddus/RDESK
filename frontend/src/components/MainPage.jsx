import Header from './assets/Header'
import Home from './Home'
import About from './About'
import CompliancyInfo from './compliance/Compliancy-Info'
import EdSolutions from './EducationServices/EdSolutions'
import ITServices from './ITServices/ITServices'
import Footer from './assets/Footer'
import OtherServices from './other-services/OtherServices'
import Divider from './assets/Divider'
import AnnouncementBanner from './assets/AnnouncementBanner'

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
        <AnnouncementBanner
          message="We now do Ipad and Tablet Repairs ... Learn more!"
          link='solutions/tablet-repairs'
          versionKey="rdesk-pro-2025-07"
        />
        <Divider />
        <EdSolutions />
        <ITServices />
        <CompliancyInfo />
        <OtherServices />
        <Footer />
      </div>
  )
}

export default MainPage

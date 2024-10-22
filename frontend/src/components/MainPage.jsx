import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';
import Header from './Header'
import Home from './Home'
import About from './About'
import CompliancyInfo from './Compliancy-Info'
import ITServices from './ITServices'
import CallAction from './CallAction'
import OtherServices from './OtherServices'
import Divider from './Divider'
import Footer from './Footer'

import '../css/style.css'
import '../css/bootstrap.min.css'



const MainPage = ({scrollToSection}) => {
  const [displayMessage, setDisplayMessage] = useState(false)
  const location = useLocation();
  const { targetId } = location.state || {};

  useEffect(() => {
    setTimeout(() => {
      scrollToSection(targetId);
    }, 200);
  }, [targetId]);

  const displaySuccessfulSubmit = () => {
    setDisplayMessage(true)
    setTimeout(() => {
      setDisplayMessage(false)
    }, 5000)
  }

  return (
      <div>
        <Header scrollToSection = {scrollToSection}/>
        <Home scrollToSection = {scrollToSection}/>
        <About />
        <Divider />
        <CompliancyInfo scrollToSection = {scrollToSection} />
        <ITServices scrollToSection={scrollToSection}/>
        <OtherServices />
        <CallAction />
        <Footer />
      </div>
  )
}

export default MainPage

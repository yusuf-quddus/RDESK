import { useState, useEffect, useRef } from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import CompliancyInfo from './Compliancy-Info'
import ITServices from './ITServices'
import OtherServices from './OtherServices'
import Contact from './Contact'
import { useLocation } from 'react-router-dom';

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
        <CompliancyInfo scrollToSection = {scrollToSection} />
        <ITServices scrollToSection={scrollToSection}/>
        <OtherServices />
        <Contact handleDisplay={displaySuccessfulSubmit}/>
      </div>
  )
}

export default MainPage

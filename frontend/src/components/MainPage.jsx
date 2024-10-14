import { useState } from 'react'
import Header from './Header'
import Home from './Home'
import About from './About'
import CompliancyInfo from './Compliancy-Info'
import ITServices from './IT-Services'
import Contact from './Contact'
import Notification from './Notification'
import CompliancePage from './Compliance-Page'
import data from '../data.json'

import '../css/style.css'
import '../css/bootstrap.min.css'



const MainPage = () => {
  const [displayMessage, setDisplayMessage] = useState(false)

  const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
		  section.scrollIntoView({ behavior: 'smooth' }); 
		}
	}

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
        <CompliancyInfo />
        <ITServices />
        <Contact handleDisplay={displaySuccessfulSubmit}/>
      </div>
  )
}

export default MainPage

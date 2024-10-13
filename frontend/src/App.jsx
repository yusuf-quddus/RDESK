import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import CompliancyInfo from './components/Compliancy-Info'
import ITServices from './components/IT-Services'
import Contact from './components/Contact'
import Notification from './components/Notification'

import './css/style.css'
import './css/bootstrap.min.css'



const App = () => {
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
      {/* {displayMessage ? <Notification /> : null} */}
      <Contact handleDisplay={displaySuccessfulSubmit}/>
    </div>
  )
}

export default App

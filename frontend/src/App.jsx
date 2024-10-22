import { useState } from 'react'
import MainPage from './components/MainPage'
import CompliancePage from './components/Compliance-Page'
import ComplianceLanding from './components/ComplianceLanding'
import ITLanding from './components/ITLanding'
import OtherLanding from './components/OtherLanding'
import ContactPage from './components/ContactPage'
import Contact from './components/Contact'
import data from './data.json'

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import './css/style.css'
import './css/bootstrap.min.css'


const App = () => {
  const scrollToSection = (id) => {
		const section = document.getElementById(id);
		if (section) {
		  section.scrollIntoView(); 
		}
	}

  return (
    <Router>
      <div> 
        <Routes>
          <Route path='/' element={<MainPage scrollToSection={scrollToSection}/>} />
          {data.compliance.map(iso => (
            <Route key={iso['name']} path={`${iso['page-link']}`} element={<CompliancePage iso={iso} scrollToSection={scrollToSection}/>} />
          ))}
          <Route path='/compliance' element={<ComplianceLanding />} />
          <Route path='/IT_Services' element={<ITLanding />} />
          <Route path='/home_services' element={<OtherLanding />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

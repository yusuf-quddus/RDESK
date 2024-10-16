import { useState } from 'react'
import MainPage from './components/MainPage'
import CompliancePage from './components/Compliance-Page'
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
		  section.scrollIntoView({ behavior: 'smooth' }); 
		}
	}

  return (
    <Router>
      <div> 
        <Routes>
          <Route path="/" element={<MainPage scrollToSection={scrollToSection}/>} />
          {data.compliance.map(iso => (
            <Route key={iso['name']} path={`${iso['page-link']}`} element={<CompliancePage iso={iso} scrollToSection={scrollToSection}/>} />
          ))}
        </Routes>
      </div>
    </Router>
  )
}

export default App

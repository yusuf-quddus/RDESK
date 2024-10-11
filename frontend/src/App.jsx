import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import CompliancyInfo from './components/Compliancy-Info'
import ITServices from './components/IT-Services'
import Contact from './components/Contact'

import './css/style.css'
import './css/bootstrap.min.css'



const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <CompliancyInfo />
      <ITServices />
      <Contact />
    </div>
  )
}

export default App

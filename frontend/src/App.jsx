import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import CompliancyInfo from './components/Compliancy-Info'
import ITServices from './components/IT-Services'
import Contact from './components/Contact'
import Notification from './components/Notification'
import CompliancePage from './components/Compliance-Page'
import MainPage from './components/MainPage'
import data from './data.json'

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

import './css/style.css'
import './css/bootstrap.min.css'



const App = () => {

  return (
    <Router>
      {/* <MainPage /> */}
      <div> 
        <Routes>
          <Route path="/" element={<MainPage />} />
          {data.compliance.map(iso => (
            // console.log(`${iso['page-link']}`);
            <Route key={iso['name']} path={`${iso['page-link']}`} element={<CompliancePage iso={iso}/>} />
))}
          
        </Routes>
      </div>
    </Router>
  )
}

export default App

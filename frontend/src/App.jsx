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

  return (
    <Router>
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

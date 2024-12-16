import MainPage from './components/MainPage';
import CompliancePage from './components/compliance/Compliance-Page';
import ComplianceLanding from './components/compliance/ComplianceLanding';
import ITLanding from './components/ITServices/ITLanding';
import OtherLanding from './components/other-services/OtherLanding';
import Contact from './components/contact/Contact';
import ITPage from './components/ITServices/ITPage';
import servicesData from './data/services.json';  

import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom';

import './css/style.css';
import './css/bootstrap.min.css';

const App = () => {

  return (
    <Router>
      <div> 
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/compliance' element={<ComplianceLanding />} />
          <Route path='/solutions' element={<ITLanding />} />
          <Route path='/home_services' element={<OtherLanding />} />
          <Route path='/contact' element={<Contact />} />

          {/* Compliance routes */}
          {servicesData["Compliance Services"].map(iso => (
            <Route 
              key={iso.name} 
              path={iso["page-link"]} 
              element={<CompliancePage iso={iso} />} 
            />
          ))}

          {/* IT Services routes */}
          {servicesData["IT Solutions"].map(service => (
            <Route 
              key={service.name} 
              path={service["page-link"]} 
              element={<ITPage service={service} />} 
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

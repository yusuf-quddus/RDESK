import React, { useEffect } from 'react';
import Header from '../assets/Header'; 
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'; 
import ComplianceCard from './Compliance-Card';
import servicesData from '../../data/services.json';
import '../../css/style.css';
import '../../css/bootstrap.min.css';
import Footer from '../assets/Footer';

const ComplianceLanding = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Header />
      
      {/* Header section with navigation */}
      <section id="page-header" className="parallax">
        <div className="overlay"></div>
        <div className="container">
          <h1>Compliance Services</h1>
          <div className="landing-links">
            <p className="btn" onClick={() => navigate('/')}>Home</p>
            <p><FontAwesomeIcon icon={faAngleRight} color="white" size="lg" /></p>
            <p className="btn" onClick={() => navigate('/IT_Services')}><strong>Compliance</strong></p>
          </div>
        </div>
      </section>

      {/* Main content section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <p>
              Our compliance services support your business in meeting essential standards and regulations.
              With expertise in ISO standards, data protection, and more, we help ensure your compliance 
              across key areas. Explore our services below.
            </p>
          </div>

          {/* Image and Service Overview */}
          <div className="row content-spacing">
            {/* Left side: Overview image */}
            <div className="col-md-6">
              <img src="path/to/your/image.jpg" alt="Compliance Overview" className="img-fluid rounded shadow" />
            </div>

            {/* Right side: List of Services */}
            <div className="col-md-6">
              <h3>Our Compliance Services</h3>
              <div className="scrollable-accordion fixed-height">
                {/* Access compliance data from services.json */}
                {servicesData["Compliance Services"].map((iso) => (
                  <div className="card" key={iso.name}>
                    <ComplianceCard info={iso} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer"></div>
      <Footer />
    </div>
  );
};

export default ComplianceLanding;

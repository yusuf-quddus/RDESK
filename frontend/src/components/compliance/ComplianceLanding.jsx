import React, { useEffect } from 'react';
import Header from '../assets/Header'; 
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'; 
import ComplianceCard from './Compliance-Card';
import servicesData from '../../data/services.json';
import data from '../../data/data.json';
import Footer from '../assets/Footer';
import '../../css/style.css';
import '../../css/bootstrap.min.css';

/**
 * Component for compliance service landing page.   
 * 
 * @return {JSX.Element} - The ComplianceLanding component.
 */
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

      <section className="section">
        <div className="container">
          <div className="text-center">
            <strong>
              Our compliance services support your business in meeting essential standards and regulations.
              With expertise in ISO standards, data protection, and more, we help ensure your compliance 
              across key areas. Explore our services below.
            </strong>
          </div>

          <div className="row content-spacing">
            <div className="col-md-6">
              <img src={`images/${data["compliance-images"][0]}`} alt="Compliance Overview" className="img-fluid rounded shadow" />
            </div>

            <div className="col-md-6">
              <h3>Our Compliance Services Include: </h3>
              <div className="scrollable-accordion fixed-height">
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

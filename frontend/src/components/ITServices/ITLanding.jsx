import React, { useEffect } from 'react';
import Header from '../assets/Header'; 
import { useNavigate } from 'react-router-dom';
import ITServiceBox from './ITServiceBox';
import ServiceMenu from './ServiceMenu';
import data from '../../data/services.json';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faNetworkWired, faCloud, faDiagramProject, faServer, faWifi } from '@fortawesome/free-solid-svg-icons';
import Footer from '../assets/Footer';
import '../../css/style.css';
import '../../css/bootstrap.min.css';

/**
 * Component for IT Services Landing page.   
 * 
 * @return {JSX.Element} - The ITLanding component.
 */
const ITLanding = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  /* Determine Icon based on service */
  const icon = (service) => {
    switch(service) {
      case "faServer":
        return faServer;
      case "faDiagramProject":
        return faDiagramProject;
      case "faNetworkWired":
        return faNetworkWired;
      case "faCloud":
        return faCloud;
      case "faWifi":
        return faWifi;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      {/* Page Header Section */}
      <section id="page-header" className="parallax">
        <div className="overlay"></div>
        <div className="container">
          <h1>IT Services</h1>
          <div className='landing-links'>
            <p className="btn" onClick={() => navigate('/')}>Home</p>
            <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg' /></p>
            <p className="btn" onClick={() => navigate('/IT_Services')}><strong>IT Services</strong></p>
          </div>
        </div>
      </section>

      <section className="section container">
      <div className="row content-spacing">
            <div className="col-md-6">
              <img src='./images/cloud_solutions.jpg' alt="IT Solutions" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
              <h3>Our Solutions Services</h3>
              <div className="scrollable-accordion fixed-height">
                {data["IT Solutions"].map((solution) => (
                  <div className="card" key={solution.name}>
                    <ServiceMenu info={solution} />
                  </div>
                ))}
              </div>
            </div>
          </div>
      </section>

      {/* <section id="services" className="section">
        <div className="container">
          <div className="row">
            <div>
              {servicesData["IT Solutions"].map((service) => (
                <ITServiceBox 
                  key={service.name}
                  service={service} 
                  icon={icon(service.icon)} 
                  style={{ width: '100px' }} />
                ))}
            </div>
          </div>
        </div> 
      </section>  */}
      <div className="footer"></div>
      <Footer />
    </div>
  );
};

export default ITLanding;

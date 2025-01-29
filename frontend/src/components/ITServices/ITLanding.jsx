import React, { useState, useEffect } from 'react';
import Header from '../assets/Header'; 
import { useNavigate, useLocation } from 'react-router-dom';
import ServiceMenu from './ServiceMenu';
import data from '../../data/services.json';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '../assets/Footer';
import Slideshow from '../assets/Slideshow';
import '../../css/style.css';
import '../../css/bootstrap.min.css';

/**
 * Component for Solutions Landing page.   
 * 
 * @return {JSX.Element} - The ITLanding component.
 */
const ITLanding = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location.pathname]);

  return (
    <div>
      <Header />
      <section id="page-header" className="parallax">
        <div className="overlay"></div>
        <div className="container">
          <h1>IT Solutions</h1>
          <div className='landing-links'>
            <p className="btn" onClick={() => navigate('/')}>Home</p>
            <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg' /></p>
            <p className="btn" onClick={() => navigate('/solutions')}><strong>IT Solutions</strong></p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="row">
          <div style={{ marginTop: "1em"}}>
            <Slideshow images={['./images/recovery.jpg', './images/fix-router.jpg', './images/cloud_solutions.jpg', './images/it-solutions.jpg']} />
            <div className="col-md-6">
              <h3 style={{ marginTop: "0" }}>Our Solutions Services Include:</h3>
              <div className="scrollable-accordion fixed-height">
                { data["IT Solutions"].map((solution) => 
                    <div className="card" key={solution.name}> <ServiceMenu info={solution} /> </div> )}
              </div>
            </div>
          </div>
          <div>
            <div className='col-md-6' style={{ marginTop: "4em" }}>
              <h4>Fixed Fee Managed IT Services</h4>
              <p>
                Our Fixed Fee Managed IT Services offer predictable, all-inclusive IT support tailored to 
                your business needs. For a single, flat monthly fee, we provide proactive monitoring, 
                maintenance, and expert assistance to ensure your technology runs smoothly. Simplify your 
                IT budgeting and focus on growing your business while we handle the rest.
              </p>
            </div>
            <div className='col-md-6' style={{ marginTop: "4em" }}>
              <h4>Hourly IT Support Services</h4>
              <p>
                Our Hourly IT Support Services provide flexible, on-demand assistance for your immediate 
                IT needs. Whether it’s troubleshooting, system updates, or technical consulting, you pay 
                only for the time you use. Get expert support when you need it, without long-term commitments.
              </p>
            </div>
          </div>
        </div> 
      </section>

      <div className="footer"></div>
      <Footer />
    </div>
  );
};

export default ITLanding;
import React, { useEffect } from 'react';
import Header from '../assets/Header'; 
import { useNavigate } from 'react-router-dom';
import ServiceMenu from './ServiceMenu';
import data from '../../data/services.json';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Footer from '../assets/Footer';
import '../../css/style.css';
import '../../css/bootstrap.min.css';

/**
 * Component for Solutions Landing page.   
 * 
 * @return {JSX.Element} - The ITLanding component.
 */
const ITLanding = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

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
            <p className="btn" onClick={() => navigate('/IT_Services')}><strong>IT Services</strong></p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="row">
          <div style={{ marginTop: "2em"}}>
            <img src='./images/cloud_solutions.jpg' alt="IT Solutions" className="img-fluid rounded shadow col-md-6" />
            <div className="col-md-6">
              <h2>Our Solutions Services Include:</h2>
              <div className="scrollable-accordion fixed-height">
                {data["IT Solutions"].map((solution) => (
                    <div className="card" key={solution.name}>
                      <ServiceMenu info={solution} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <div className='col-md-6' style={{ marginTop: "3em" }}>
              <h4>Fixed Fee Managed IT Services</h4>
              <p>Our Fixed Fee Managed IT Services offer predictable, all-inclusive IT support tailored to your business needs. For a single, flat monthly fee, we provide proactive monitoring, maintenance, and expert assistance to ensure your technology runs smoothly. Simplify your IT budgeting and focus on growing your business while we handle the rest.</p>
            </div>
            <div className='col-md-6' style={{ marginTop: "3em" }}>
              <h4>Hourly IT Support Services</h4>
              <p>Our Hourly IT Support Services provide flexible, on-demand assistance for your immediate IT needs. Whether it’s troubleshooting, system updates, or technical consulting, you pay only for the time you use. Get expert support when you need it, without long-term commitments.</p>
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

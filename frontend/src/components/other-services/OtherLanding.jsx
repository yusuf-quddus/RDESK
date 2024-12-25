import React, { useState, useEffect } from 'react';
import Header from '../assets/Header'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Slideshow from '../assets/Slideshow';
import Footer from '../assets/Footer'
import data from '../../data/services.json'
import '../../css/style.css'; 

/**
 * Component for Other Services Landing page.   
 * 
 * @param {Object} props - The properties object.
 * @param {Object} props.otherServices - Object containing data on other services.
 * @return {JSX.Element} - The OtherLanding component.
 */
const OtherLanding = ({otherServices}) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const other = data["Office / Other Services"]

  return (
    <div>
      <Header />
      <section id="page-header" className="parallax">
        <div className="overlay"></div>
        <div className="container">
          <h1>Home Services</h1>
          <div className='landing-links'>
            <p className="btn" onClick={() => navigate('/')}>Home</p>
            <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg' /></p>
            <p className="btn" onClick={() => navigate('/home_services')}><strong>Other Services</strong></p>
          </div>
        </div>
      </section>

      <section>
                <p style={{ textAlign: "center", marginTop: "2em"}}><strong>See below for a detailed description of what RDesk is offering</strong></p>
                <div className="container">
                    <div className="row">					
                        <Slideshow images={['./images/hvac.jpg', './images/installation.jpg','./images/plumbing.webp']} />
                        <div className="col-md-6 work-detail">
                            <h3 className="margin-bottom-15">{otherServices.name} </h3>	
                            <p>{otherServices.description}</p>					
                            <a onClick={() => navigate(`/contact#request-service#other-services`)} className="btn btn-blue">Request Service</a>
                        </div>
                    </div> 
                </div> 	
		    </section>

        <section id="single-work" className="section">
                <div className="container">
                    <div className="row">			
                        <div>
                            {other.headers.map((header, index) => (
                                <div key={index}>
                                    <h2>{header}</h2>
                                    {otherServices.content[index].map((point, subIndex) => {
                                        const parts = point.split(":");
                                        return (
                                            <p key={subIndex} style={{ marginLeft: "4em" }}> <strong> {parts[0]}</strong>: {parts[1]} </p>
                                        );
                                     })}
                                </div>
                            ))}
                        </div>
                    </div>            
                </div>
	        </section>
      <div className="footer"></div>
      <Footer />
    </div>
  );
};

export default OtherLanding;

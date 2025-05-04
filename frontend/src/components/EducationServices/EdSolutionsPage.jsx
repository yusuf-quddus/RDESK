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
 * @param {Object} props.edsolutions - Object containing data on other services.
 * @return {JSX.Element} - The OtherLanding component.
 */
const EdSolutions = ({edsolutions}) => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <section id="page-header" className="parallax">
        <div className="overlay"></div>
        <div className="container">
          <h1>Home, Office and Other Services</h1>
          <div className='landing-links'>
            <p className="btn" onClick={() => navigate('/')}>Home</p>
            <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg' /></p>
            <p className="btn" onClick={() => navigate('/home_services')}><strong>Other Services</strong></p>
          </div>
        </div>
      </section>

      <section>
                <p style={{ textAlign: "center", marginTop: "2em", marginBottom: "2rem"}}><strong>See below for a detailed description of what RDesk is offering</strong></p>
                <div className="container">
                    <div className="row">					
                        <Slideshow images={['./images/edtech2.jpeg', './images/edtech3.jpeg','./images/edtech4.webp', './images/edtech5.jpg']} />
                        <div className="col-md-6 work-detail">
                            <h3 className="margin-bottom-15" style={{marginLeft: "1em"}}>{edsolutions.name} </h3>	
                            <p style={{marginLeft: "1em"}}>{edsolutions.description}</p>					
                            <a onClick={() => navigate(`/contact#educationsolutions`)} style={{marginLeft: "1em"}} className="btn btn-blue">Request Service</a>
                        </div>
                    </div> 
                </div> 	
		    </section>

            <section id="single-work" className="section">
                <div className="container">
                    <div className="row">
                    <div style={{ paddingLeft: "2rem" }}>
                        {edsolutions.headers.map((header, index) => (
                        <div key={index} style={{ marginBottom: "1.5rem" }}>
                            <h2>{header}</h2>
                            <p style={{ paddingLeft: "4rem", marginTop: "1em"}}><strong>{edsolutions.subheader[index]}</strong></p>
                            <p style={{ whiteSpace: "pre-wrap", paddingLeft: "4rem" }}>{edsolutions.content[index]}</p>
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

export default EdSolutions;
import React, { useState, useEffect } from 'react';
import Header from '../assets/Header'; 
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'; 
import Footer from '../assets/Footer';
import '../../css/style.css'
import '../../css/bootstrap.min.css'

/**
 * Component for page of specific IT Service. 
 * 
 * @param {Object} props - The properties object.
 * @param {Object} props.service - Service contains data on specific IT Service.
 * @return {JSX.Element} - The ITPage component.
 */
const ITPage = ({service}) => {
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
                    <h1>{service['title-long']}</h1>
                    <div className='landing-links'>
                        <p className="btn" onClick={()=>navigate('/')}>Home</p>
                        <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg'/></p>
                        <p className="btn" onClick={()=>navigate('/solutions')}>IT Solutions</p>
                        <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg'/></p>
                        <p className="btn" onClick={()=>navigate(service["page-link"])}><strong>{service.name}</strong></p>
                    </div>
                 </div>
		    </section>
            <section>
                <p style={{ textAlign: "center", marginTop: "2em"}}><strong>See below for a detailed description of what RDesk is offering</strong></p>
                <div className="container">
                    <div className="row">					
                        <div className="col-md-6" style={{marginTop: '20px'}}>	
                                <div className="item"><img src={`../../images/${service.images[0]}`} /></div>					 
                        </div>
                        <div className="col-md-6 work-detail">
                            <h3 className="margin-bottom-15">{service.name} </h3>	
                            <p>{service.description}</p>					
                            <a onClick={() => navigate(`/contact#request-service#it-services#${service.name}`)} className="btn btn-blue">Request Consultation for {service.name}</a> 
                        </div>
                    </div> 
                </div> 	
		    </section>
            <section id="single-work" className="section">
                <div className="container">
                    <div className="row">			
                        {service.headers.map((header, index) => (
                            <div key={index}>
                                <h2>{header}</h2>
                                {service.content[index].map((point, subIndex) => {
                                    const parts = point.split(":");
                                    return (
                                        <p key={subIndex} style={{ marginLeft: "4em" }}> <strong> {parts[0]}</strong>: {parts[1]} </p>
                                    );
                                 })}
                            </div>
                        ))}
                    </div>            
                </div>
	        </section>
            <div className="footer"></div>
            <Footer />
        </div>
    )
};

export default ITPage;

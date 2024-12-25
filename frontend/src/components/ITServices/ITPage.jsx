import React from 'react';
import Header from '../assets/Header'; 
import { useNavigate } from 'react-router-dom';
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

    return (
        <div> 
            <Header />
            <section id="page-header" className="parallax">
                <div className="overlay"></div>
                <div className="container">
                    <h1>IT Service</h1>
                    <div className='landing-links'>
                        <p className="btn" onClick={()=>navigate('/')}>Home</p>
                        <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg'/></p>
                        <p className="btn" onClick={()=>navigate('/IT_Services')}>IT Services</p>
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
                                <div className="item"><img src={`../../images/${service.images[0]}`} alt=""/></div>					 
                        </div>
                        <div className="col-md-6 work-detail">
                            <h3 className="margin-bottom-15">{service['title-long']} </h3>	
                            <p>{service.description}</p>					
                            <a onClick={() => navigate(`/contact#request-service#it-services#${service.name}`)} className="btn btn-blue">Request Consultation for {service.name}</a> 
                        </div>
                    </div> 
                </div> 	
		    </section>
            <section id="single-work" className="section">
                <div className="container">
                    <div className="row">			
                        <div>
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
                </div>
	        </section>
            <div className="footer"></div>
            <Footer />
        </div>
    )
};

export default ITPage;

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
                <div className="container">
                    <div className="row">					
                        <div className="col-md-7" style={{marginTop: '20px'}}>	
                                <div className="item"><img src={`../../images/${service.images[0]}`} alt=""/></div>					 
                        </div>
                        <div className="col-md-5 work-detail">
                            <h3 className="margin-bottom-15">{service.name} </h3>	
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet. </p>					
                            <ul className="work-detail-list">
                                <li><span>Category :</span>Business</li>
                                <li><span>Client :</span>Newtheme</li>
                                <li><span>Technoligies used :</span>HTML 5,CSS 3</li>
                                <li><span>Tags :</span>Photography, Branding, Wordpress</li>
                                <li><span>Date released :</span>January 22, 2015</li>
                            </ul>
                            <a onClick={() => navigate(`/contact#request-service#it-services#${service.name}`)} className="btn btn-blue">Request Service</a> 
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

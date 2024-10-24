import React from 'react';
import Header from '../assets/Header'; 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'; 
import '../../css/style.css'
import '../../css/bootstrap.min.css'

const CompliancePage = ({ iso, scrollToSection }) => {
  const navigate = useNavigate()

  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <section id="page-header" className="parallax">
             <div className="overlay"></div>
              <div className="container">
                <h1>Compliance Services</h1>
                  <div className='landing-links'>
                      <p className="btn" onClick={()=>navigate('/')}>Home</p>
                      <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg'/></p>
                      <p className="btn" onClick={()=>navigate('/compliance')}>Compliance</p>
                      <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg'/></p>
                      <p className="btn" onClick={()=>navigate(iso["page-link"])}><strong>{iso.name}</strong></p>
				        </div>
			        </div>
		    </section>
      <div className="tab-content-main">
        <div className="container">
                    <div className="big compliance-title text-center">
                        <h2 className="title">{iso.name}</h2>
                    </div>
                    <div className="tab-content-2">   
                        <div className="col-md-4">
                            <div className="devices-image">
                                <img src="../images/device-desktop.png" alt=""/>
                            </div>
                        </div>       
                          <div className="col-md-8">
                            <div className="core-features">      
                                <p>{iso.description}</p>   
                                <p>{iso.description}</p>
                                <p>{iso.description}</p>
                            </div>
                            <div>
                            <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px' }}> 
                                <a onClick={() => navigate("/", { state: { targetId: "contact" } })} className="middle btn-gray-border hover-btn-blue">
                                    Request Service
                                </a>
                            </div>
                        </div>
                        </div>  
                    </div>
          </div>
      </div>
      </div>
    )
};

export default CompliancePage;

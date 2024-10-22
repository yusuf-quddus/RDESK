import React from 'react';
import Header from '../assets/Header'; 
import { useNavigate } from 'react-router-dom';
import '../../css/style.css'
import '../../css/bootstrap.min.css'

const CompliancePage = ({ iso, scrollToSection }) => {
  const navigate = useNavigate()

  return (
    <div>
      <Header scrollToSection={scrollToSection} />

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

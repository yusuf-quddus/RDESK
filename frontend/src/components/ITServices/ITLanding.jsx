import React from 'react';
import Header from '../assets/Header'; 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ITServiceBox from './ITServiceBox';
import data from '../../data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faNetworkWired, faCloud, 
         faDiagramProject, faServer, faWifi } from '@fortawesome/free-solid-svg-icons'
import '../../css/style.css'
import '../../css/bootstrap.min.css'

const ITLanding = () => {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const icon = (service) => {
    switch(service) {
      case "Server Cloud":
        return faServer
      case "Network Services":
        return faDiagramProject
      case "Professional Wiring":
        return faNetworkWired
      case "Cloud Engineering \\ DevOps":
        return faCloud
      case "IT Solutions":
        return faWifi
    }
  }


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
                      <p className="btn" onClick={()=>navigate('/IT_Services')}><strong>IT Services</strong></p>
				        </div>
			        </div>
		    </section>
        <section id="services" className="section">
          <div className="container">
              <div className="row">
                  <div>
                  {data.ITServices.map((service) => <ITServiceBox key={service.name} 
                    service = {service} icon = {icon(service.name)} style={{width: '100px'}} />)}
                  </div>
              </div>
          </div> 
        </section> 
    </div>
  )
};

export default ITLanding;

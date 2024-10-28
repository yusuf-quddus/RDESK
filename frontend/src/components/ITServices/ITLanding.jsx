import React from 'react';
import Header from '../assets/Header'; 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ITServiceBox from './ITServiceBox';
import data from '../../data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faNetworkWired, faCloud, faDiagramProject, faServer, faWifi } from '@fortawesome/free-solid-svg-icons'
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
        return <FontAwesomeIcon icon={faServer} size="sm" />
      case "Network Services":
        return <FontAwesomeIcon icon={faDiagramProject} size="sm" />
      case "Professional Wiring":
        return <FontAwesomeIcon icon={faNetworkWired} size="sm" />
      case "Cloud Engineering \\ DevOps":
        return <FontAwesomeIcon icon={faCloud} size="sm" />
      case "IT solution":
        return <FontAwesomeIcon icon={faWifi} size="sm" />
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
                  {data.ITServices.map((service, index) => <ITServiceBox key={service.name} 
                    service = {service} icon = {icon(service.name)} style={{width: '100px'}} />)}
                  </div>
              </div>
          </div> 
        </section> 
    </div>
  )
};

export default ITLanding;

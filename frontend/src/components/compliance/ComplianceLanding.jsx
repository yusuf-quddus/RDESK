import React from 'react';
import Header from '../assets/Header'; 
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'; 
import '../../css/style.css'
import '../../css/bootstrap.min.css'

const ComplianceLanding = () => {
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
        <Header />
        <section id="page-header" className="parallax">
             <div className="overlay"></div>
              <div className="container">
                <h1>Compliance Services</h1>
                  <div className='landing-links'>
                      <p className="btn" onClick={()=>navigate('/')}>Home</p>
                      <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg'/></p>
                      <p className="btn" onClick={()=>navigate('/IT_Services')}><strong>Compliance</strong></p>
				        </div>
			        </div>
		    </section>
        <h1>content</h1>
    </div>
  )
};

export default ComplianceLanding;

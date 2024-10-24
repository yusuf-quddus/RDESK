import React from 'react';
import Header from '../assets/Header'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import '../../css/style.css'; 

const OtherLanding = () => {
  const navigate = useNavigate()

  return (
    <div>
       <Header />
        <section id="page-header" className="parallax">
             <div className="overlay"></div>
              <div className="container">
                <h1>Home Services</h1>
                  <div className='landing-links'>
                      <p className="btn" onClick={()=>navigate('/')}>Home</p>
                      <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg'/></p>
                      <p className="btn" onClick={()=>navigate('/home_services')}><strong>Other Services</strong></p>
				        </div>
			        </div>
		    </section>
        <h1>Other Landing</h1>
    </div>
    )
};

export default OtherLanding;

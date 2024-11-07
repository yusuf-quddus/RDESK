import React from 'react';
import Header from '../assets/Header'; 
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
                <h1>{`${iso.name}:${iso.year}`}</h1>
                  <div className='landing-links'>
                      <p className="btn" onClick={()=>navigate('/')}>Home</p>
                      <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg'/></p>
                      <p className="btn" onClick={()=>navigate('/compliance')}>Compliance</p>
                      <p><FontAwesomeIcon icon={faAngleRight} color='white' size='lg'/></p>
                      <p className="btn" onClick={()=>navigate(iso["page-link"])}><strong>{iso.name}</strong></p>
				        </div>
			        </div>
		    </section>
            <section id="single-work" className="section">
			<div className="container">
				<div className="row">					
					<div className="col-md-6">						
						<h1>What is {iso.name}</h1>
                        <p>{iso.description}</p>
                        <p>{iso.description}</p>
                        <p>{iso.description}</p>
					</div>
					<div className="col-md-5 work-detail">
                            <h3 className="margin-bottom-15">Description </h3>	
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet. </p>					
						 
						<ul className="work-detail-list">
							<li><span>Category :</span>text</li>
							<li><span>Client :</span>text</li>
							<li><span>Technoligies used :</span>text</li>
                            <li><span>Tags :</span>text, text, text</li>
							<li><span>Date released :</span>{iso.year}</li>
						</ul>
                        
                        <a onClick={() => navigate(`/contact#request-service#compliancy-services#${iso.name}`)} className="btn btn-blue">Request Service</a>
                        
					</div>
				</div> 
			</div> 		
		</section>
      </div>
    )
};

export default CompliancePage;

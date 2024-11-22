import React from 'react';
import Header from '../assets/Header'; 
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'; 
import '../../css/style.css'
import '../../css/bootstrap.min.css'
import Footer from '../assets/Footer';
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
    <h1 style={{ marginBottom: "20px" }}>Why {iso.name}?</h1>
      <p style={{ whiteSpace: "pre-line" }}>{iso.description}</p>
    
</div>
					<div className="col-md-6 work-detail">
          <h3 className="margin-bottom-15">Summary </h3>	
                            <p>{iso.summary}</p>						 
						<ul className="work-detail-list">
                <li><span>Category :</span> {iso.facts.Category}</li>
                <li><span>Technologies used :</span> {iso.facts["Technologies Used"]}</li>
                <li><span>Tags :</span> {iso.facts.Tags}</li>
                <li><span>Year :</span> {iso.facts.Year}</li>
						</ul>
                        
                        <a onClick={() => navigate(`/contact#request-service#compliance-services#${iso.name}`)} className="btn btn-blue">Request Service</a>
                        
					</div>
				</div> 
			</div> 		
		</section>
    <div className="footer"></div>
    <Footer />
      </div>
    )
};

export default CompliancePage;

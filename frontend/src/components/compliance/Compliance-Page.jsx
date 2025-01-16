import React, { useEffect } from 'react';
import Header from '../assets/Header'; 
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'; 
import Footer from '../assets/Footer';
import '../../css/style.css'
import '../../css/bootstrap.min.css'

/**
 * Component for list of expandable compliance info.   
 * 
 * @param {Object} props - The properties object.
 * @param {Object} props.iso - Object containing info on ISO compliance standard.
 * @return {JSX.Element} - The ComplianceCard component.
 */
const CompliancePage = ({ iso }) => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({top: 0})
  }, []);


  return (
    <div>
      <Header />
      <section id="page-header" className="parallax">
        <div className="overlay"></div>
        <div className="container">
          <h1>{`${iso.name}`}</h1>
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
          <div>
          {iso.headers.map((header, index) => (
            <div key={index}>
              <h2>{header}</h2>
              <p style={{ whiteSpace: "pre-wrap" }}>{iso.content[index]}</p>
            </div>
          ))}
          </div>
              <a onClick={() => navigate(`/contact#request-service#compliance-services#${iso.name}`)} className="btn btn-blue">
                Get Compliance Consultation
              </a>             
          </div>
		    </div> 	
	    </section>
      <div className="footer"></div>
      <Footer />
    </div>
  )
};

export default CompliancePage;

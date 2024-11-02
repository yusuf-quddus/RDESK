import React from 'react';
import Header from '../assets/Header'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../../css/style.css'; 

const OtherLanding = () => {
  const navigate = useNavigate()
  const [index, setIndex] = useState(0)
  const images = ["../../public/images/works/img4.jpg", "../../public/images/works/img5.jpg", "../../public/images/works/img6.jpg"]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000);
    return () => clearInterval(interval)
  }, [images.length])

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
        <section>
                    <div className="container">
                        <div className="row">					
                            <div className="col-md-7" style={{marginTop: '20px'}}>	
                                    <div className="item"><img src={images[index]} alt=""/></div>					 
                            </div>
                            <div className="col-md-5 work-detail">
                                    <h3 className="margin-bottom-15">Home/Other Services </h3>	
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet. </p>					
                                
                                <ul className="work-detail-list">
                                    <li><span>Category :</span>Business</li>
                                    <li><span>Client :</span>Newtheme</li>
                                    <li><span>Technoligies used :</span>HTML 5,CSS 3</li>
                                    <li><span>Tags :</span>Photography, Branding, Wordpress</li>
                                    <li><span>Date released :</span>January 22, 2015</li>
                                </ul>
                                
                                <a onClick={() => navigate(`/contact#home_services`)} className="btn btn-blue">Request Service</a>
                                
                            </div>
                           
                        </div> 
                    </div> 	
		        </section>
    </div>
    )
};

export default OtherLanding;

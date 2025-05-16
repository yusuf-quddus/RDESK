import { useNavigate } from 'react-router-dom';
import '../../css/style.css'
import '../../css/bootstrap.min.css'

/**
 * Component for specific IT Service information on main page. 
 * 
 * @param {Object} props - The properties object.
 * @param {Object} props.service - Service contains data on specific IT Service.
 * @return {JSX.Element} - The ITService card.
 */
const EdSolutions = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="section">
            <div className="container">
                <div className="row"> 
                    <div className="title-box text-center">
                        <h2 className="title">Education Technology Solutions</h2>
                    </div>
                    <div className="slogan">
                    <p><strong style={{ fontWeight: 600,  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'}} onMouseEnter={e => (e.currentTarget.style.fontWeight = 700, e.currentTarget.style.textShadow = "")}
                                onMouseLeave={e => (e.currentTarget.style.fontWeight = 500, e.currentTarget.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.1)')}>Smart Tech</strong></p>
                    <p><strong style={{ fontWeight: 600,  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'}} onMouseEnter={e => (e.currentTarget.style.fontWeight = 700, e.currentTarget.style.textShadow = "")}
                                onMouseLeave={e => (e.currentTarget.style.fontWeight = 500, e.currentTarget.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.1)')}>Secure Schools</strong></p>
                    <p><strong style={{ fontWeight: 600,  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'}} onMouseEnter={e => (e.currentTarget.style.fontWeight = 700, e.currentTarget.style.textShadow = "")}
                                onMouseLeave={e => (e.currentTarget.style.fontWeight = 500, e.currentTarget.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.1)')}>Simplified Support</strong></p>
                    </div>
                  <div className="col-md-12">
                    <div className="tab-content-main">
                        <div className="container">
                            <div className="tab-content">
                                <div className="tab-panel">
                                    <div className="tab-content-2">          
                                        <div className="col-md-6">
                                            <div className="core-features">      
                                                <p>At RDesk Services, we specialize in supporting the unique technology needs of K–12 schools, colleges, and universities. Our team brings the power of enterprise IT—reliability, security, and scalability—into your learning environment.</p>
                                                <p>From cloud integration to cybersecurity and device management, we help educational institutions modernize and maintain their technology ecosystems so staff and students can focus on what matters most: learning.</p>          
                                            </div>
                                            <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
                                                <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px' }}> 
                                                    <a onClick={() => navigate(`/education-technology-solutions`)} className="middle btn-gray-border hover-btn-blue">
                                                        Learn More
                                                    </a>
                                                </div>
                                                <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px' }}> 
                                                    <a onClick={() => navigate(`/contact#request-service#edSolutions`)} className="middle btn-gray-border hover-btn-blue">
                                                        Request Service
                                                    </a>
                                                </div>
                                            </div>
                                        </div>  
                                        <div className="col-md-6">
                                            <div className="devices-image">
                                                <img src={`images/edtechsolutions1.png`} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>          
                </div>  
            </div> 
        </section>
  );
};

export default EdSolutions;
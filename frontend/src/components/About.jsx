import '../css/style.css'
import '../css/bootstrap.min.css'

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import data from '../data/data.json';
import CoreCard from './CoreCard.jsx'

/**
 * Component for 'about us' section.  
 * 
 * @return {JSX.Element} - The About component.
 */
const About = () => {
    const location = useLocation();
    const [expanded, setExpanded] = useState(false);

    const toggleCard = () => setExpanded(!expanded);

    /* scroll to about section when clicked in header */
    useEffect(() => {
        if (location.state?.targetId) {
            const target = document.getElementById(location.state.targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <section  id="about" className="section">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h3>Managed Services Solutions</h3>
                        <p>At RDesk, we deliver Managed Services Solutions to simplify and optimize business operations. 
                            Our focus is on providing reliable and innovative IT services that enable organizations to 
                            concentrate on their core goals. <br></br> <br></br>With over 50 years of combined experience, 
                            our team specializes in tailored IT solutions for industries such as legal, biotech, education 
                            (K-12 and college), and energy. We offer expertise in network management, cloud computing, 
                            cybersecurity, and data center operations, ensuring your business stays secure, efficient, and 
                            ahead in an ever-changing tech landscape. Let RDesk be your trusted partner in achieving success 
                            through technology.<br></br><br></br></p>
                        <h4>Why choose us?</h4>
                        <p>By combining technical expertise with these operational services, we deliver integrated solutions that save you time, reduce costs, and ensure a seamless experience. Whether you’re upgrading your office, maintaining critical systems, or planning new construction, RDesk is your trusted partner for comprehensive business solutions. Let us handle your infrastructure needs so you can focus on growing your business with confidence</p>
                    </div>
                    <div className='col-md-6'>
                        <h2>Our core services:</h2>
                        {data['Core Services'].map((core_services) => (
                            <CoreCard key={core_services.name} info={core_services} />
                        ))}
                        <br></br>
                        <div>
                        <a onClick={() => navigate('/contact#get-quote')} 
                            className="middle btn btn-blue">GET A FREE QUOTE</a>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default About

            {/* <div className="container">
                <div className="title-box text-center">
                    <h2 className="title">about us</h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <h4>Who we are</h4>
                        <p>Lorem ipsum dolor consectetur adipisicing incididunt eiusmod tempor incididunt laboredolore magna aliqua.</p>
                    </div>
                    
                    <div className="col-md-4">
                        <h4>What we do</h4>
                        <p>Lorem ipsum dolor consectetur adipisicing incididunt eiusmod tempor incididunt laboredolore magna aliqua.</p>
                    </div>
    
                    <div className="col-md-4">
                        <h4>Our background</h4>
                        <p>Lorem ipsum dolor consectetur adipisicing incididunt eiusmod tempor incididunt laboredolore magna aliqua.</p>
                    </div>  
                </div> 
            </div> */}
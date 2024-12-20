import '../css/style.css'
import '../css/bootstrap.min.css'

import { useEffect } from 'react';
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
            <div className='container'>
                <div className="title-box text-center">
                    <h2 className="title" style={{ textAlign: "center", marginTop: "2em", marginBottom: "1em" }}>Our IT Services</h2>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <h4>Fixed Fee Managed IT Services</h4>
                        <p>Our Fixed Fee Managed IT Services offer predictable, all-inclusive IT support tailored to your business needs. For a single, flat monthly fee, we provide proactive monitoring, maintenance, and expert assistance to ensure your technology runs smoothly. Simplify your IT budgeting and focus on growing your business while we handle the rest.</p>
                    </div>
                    <div className='col-md-6'>
                        <h4>Hourly IT Support Services</h4>
                        <p>Our Hourly IT Support Services provide flexible, on-demand assistance for your immediate IT needs. Whether it’s troubleshooting, system updates, or technical consulting, you pay only for the time you use. Get expert support when you need it, without long-term commitments.</p>
                    </div>
                </div>
            </div>
        </section> 
    )
}

export default About;
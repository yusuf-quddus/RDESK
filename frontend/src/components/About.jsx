import '../css/style.css'
import '../css/bootstrap.min.css'

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
            <div className="container">
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
            </div>
        </section> 
    )
}

export default About
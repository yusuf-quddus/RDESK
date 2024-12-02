import '../css/style.css'
import '../css/bootstrap.min.css'

import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Component for title section.  
 * 
 * @return {JSX.Element} - The home component.
 */
const Home = () => {
    const navigate = useNavigate()
    const location = useLocation();

    /* scroll to home section when clicked in header */
    useEffect(() => {
        if (location.state?.targetId) {
            const target = document.getElementById(location.state.targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <section id="home" className="home">
            <div className="text-wrapper">  
                <div className="big">Help Desk Solutions </div>          
                <div className="medium">Making Technology Accessible</div>
                <a onClick={() => navigate('/contact#get-quote')} 
                    className="middle btn btn-white hover-btn-blue">GET A FREE QUOTE</a>
            </div>
            <img src="images/1.jpg" />
        </section>
    )
}

export default Home
import '../css/style.css';
import { useNavigate } from 'react-router-dom';
import data from '../data.json';

const Footer = () => {
    const navigate = useNavigate();

    // Define links in an array for flexibility and future additions
    const callToActionLinks = [
        { name: "Request Service", pageLink: data.contact_purpose.find(item => item.name === "Request Service")?.['page-link'] },
        { name: "General Inquiry", pageLink: data.contact_purpose.find(item => item.name === "General Inquiry")?.['page-link'] }
        // Add more links as necessary
    ];

    const handleNavigation = (pageLink) => {
        if (pageLink) {
            navigate(pageLink);
        } else {
            console.warn('Link not found.');
        }
    };

    return (
        <section className="call-action-section">
            <div className="call-action-container">
                {/* Left side logo */}
                <div className="logo-nav">
                    <a onClick={() => handleNavigation('/home')}>
                        <img src="../public/images/rdesklogo.png" alt="Company logo" className="logo-image" />
                    </a>
                </div>

                {/* Right side links */}
                <nav aria-label="Call to Action Links" className="call-action-nav">
                    <ul className="call-action-links">
                        {callToActionLinks.map((link, index) => (
                            <li key={index} className="call-action-link-item">
                                <a 
                                    onClick={() => handleNavigation(link.pageLink)} 
                                    className="call-action-link"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </section>
    );
};

export default Footer;

import '../css/style.css';
import '../css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import data from '../data.json';

const CallAction = () => {
    const navigate = useNavigate();

    const handleItemClick = (pageLink) => {
        if (pageLink) {
            navigate(pageLink);
        } else {
            console.log('No page-link found for this item.');
        }
    };

    const requestServiceLink = data.contact_purpose.find(item => item.name === "Request Service")?.['page-link'];
    const generalInquiryLink = data.contact_purpose.find(item => item.name === "General Inquiry")?.['page-link'];

    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-links">
                    <a 
                        onClick={() => handleItemClick(requestServiceLink)} 
                        className="footer-link"
                    >
                        Request Service
                    </a>
                    <a 
                        onClick={() => handleItemClick(generalInquiryLink)} 
                        className="footer-link"
                    >
                        General Inquiry
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default CallAction;

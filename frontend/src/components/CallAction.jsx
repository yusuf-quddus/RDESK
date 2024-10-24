import '../css/style.css';
import '../css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import data from '../data.json'; // Adjust the import path as necessary

const CallAction = () => {
    const navigate = useNavigate();

    const handleItemClick = (pageLink) => {
        if (pageLink) {
            navigate(pageLink);
        } else {
            console.log('No page-link found for this item.');
        }
    };

    // Find the "Request Service" and "General Inquiry" links using .find()
    const requestServiceLink = data.contact_purpose.find(item => item.name === "Request Service")?.['page-link'];
    const generalInquiryLink = data.contact_purpose.find(item => item.name === "General Inquiry")?.['page-link'];

    return (
        <section id="cta" className="parallax">
            <div className="overlay"></div>
            <div className="container">
                <div className="row text-center align-items-center">
                    <div className="col-md-5">
                        <h2>Requesting a Service?</h2>
                        <a 
                            onClick={() => handleItemClick(requestServiceLink)} // Access through .find()
                            className="btn btn-blue mb-2"
                        >
                            Request Service
                        </a>
                    </div>

                    <div className="col-md-2">
                        <div className="vertical-divider"></div>
                    </div>

                    <div className="col-md-5">
                        <h2>Any General Inquiries?</h2>
                        <a 
                            onClick={() => handleItemClick(generalInquiryLink)} // Access through .find()
                            className="btn btn-blue"
                        >
                            General Inquiry
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default CallAction;
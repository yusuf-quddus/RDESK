import '../css/style.css';
import '../css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import data from '../data.json'; // Adjust the import path as necessary

const CallAction = () => {
    const navigate = useNavigate();

    // Function to handle navigation based on the 'page-link'
    const handleItemClick = (pageLink) => {
        if (pageLink) {
            navigate(pageLink);
        } else {
            console.log('No page-link found for this item.'); // Handle no page link (optional)
        }
    };

    // Find the "General Inquiry" button's page link
    const generalInquiryLink = data.contact_purpose.find(item => item.name === "General Inquiry")?.['page-link'];

    return (
        <section id="cta" className="parallax">
            <div className="overlay"></div>
            <div className="container">
                <div className="row text-center align-items-center">
                    {/* Left Side: Request a Service */}
                    <div className="col-md-5">
                        <h2>Requesting a Service?</h2>
                        {data.contact_purpose.slice(0, 1).map((item) => (
                            <a 
                                key={item.name} 
                                onClick={() => handleItemClick(item['page-link'])} // Use the existing handler
                                className="btn btn-blue mb-2" // Added margin bottom for spacing
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Vertical Divider */}
                    <div className="col-md-2"> {/* Adjusting width to accommodate the divider */}
                        <div className="vertical-divider"></div>
                    </div>

                    {/* Right Side: General Inquiry */}
                    <div className="col-md-5">
                        <h2>Any General Inquiries?</h2>
                        <a 
                            onClick={() => handleItemClick(generalInquiryLink)} // Use the handler for General Inquiry
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

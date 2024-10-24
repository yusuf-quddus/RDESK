import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../../css/style.css';
import '../../css/bootstrap.min.css';

const ComplianceCard = ({ info, scrollToSection }) => {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate for page navigation

    // Toggle the expanded state
    const toggleCard = () => setExpanded(!expanded);

    // Function to handle navigation based on the 'page-link' attribute
    const handleItemClick = (pageLink) => {
        if (pageLink) {
            navigate(pageLink); // Navigate to the page link if it exists
        } else {
            console.log('No page-link found for this item.');
        }
    };

    return (
        <div className="card panel panel-default">
            <div 
                className="panel-heading" 
                onClick={toggleCard} 
                style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
                <h4 className="panel-title">
                    {info.name}
                </h4>
                <span className={expanded ? "up-arrow arrow" : "down-arrow arrow"}></span>
            </div>
            <div
                id="collapseOne"
                style={{
                    maxHeight: expanded ? '200px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.25s ease',
                }}
                className={`panel-collapse ${expanded ? 'show' : ''}`}
            >
                <div className="panel-body">
                    {/* Display the description */}
                    {info.description}

                    {/* Buttons */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '20px'
                    }}>
                        <a 
                            onClick={() => handleItemClick(info['page-link'])} // Use navigate instead of href
                            className="middle btn-gray-border hover-btn-blue" 
                            style={{ marginRight: '10px' }}
                        >
                            Learn More
                        </a>
                        <a 
                            onClick={() => scrollToSection("contact")} 
                            className="middle btn-gray-border hover-btn-blue"
                        >
                            Request Service
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplianceCard;

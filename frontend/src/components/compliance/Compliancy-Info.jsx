import { useState } from 'react';
import '../../css/style.css';
import '../../css/bootstrap.min.css';

const ComplianceCard = ({ info, scrollToSection }) => {
    const [expanded, changeExpanded] = useState(false);

    // Function to toggle the expanded state
    const toggleCard = () => changeExpanded(!expanded);

    return (
        <div className="card panel panel-default" onClick={toggleCard}>
            <div className="panel-heading">
                <h4 className="panel-title">
                    {info.name}
                    <span className={expanded ? "up-arrow arrow" : "down-arrow arrow"}></span>
                </h4>
            </div>
            <div 
                id="collapseOne" 
                style={{ 
                    maxHeight: expanded ? '200px' : '0', // Adjust the maxHeight as needed
                    overflow: 'hidden',
                    transition: 'max-height 0.6s ease', // Adjust the duration to control speed
                }}
            >
                <div className="panel-body">
                    {/* Display the description */}
                    {info.description}

                    {/* Buttons */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center', /* Center horizontally */
                        marginTop: '20px'
                    }}>
                        <a href={info['page-link']} className="middle btn-gray-border hover-btn-blue" style={{ marginRight: '10px' }}>
                            Learn More
                        </a>
                        <a onClick={() => scrollToSection("contact")} className="middle btn-gray-border hover-btn-blue">
                            Request Service
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplianceCard;

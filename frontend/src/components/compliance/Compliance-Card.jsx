import { useState } from 'react';
import '../../css/style.css';
import '../../css/bootstrap.min.css';

const ComplianceCard = ({ info, scrollToSection }) => {
    const [expanded, setExpanded] = useState(false);

    // Toggle the expanded state
    const toggleCard = () => setExpanded(!expanded);

    return (
        <div className="card panel panel-default">
            <div className="panel-heading" onClick={toggleCard} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 className="panel-title">
                    {info.name}
                </h4>
                <span className={expanded ? "up-arrow arrow" : "down-arrow arrow"}></span>
            </div>
            <div
                id="collapseOne"
                style={{
                    maxHeight: expanded ? '200px' : '0', // Change '200px' to whatever fits your content
                    overflow: 'hidden',
                    transition: 'max-height 0.25s ease', // Adjust duration and easing as desired
                }}
                className={`panel-collapse ${expanded ? 'show' : ''}`} // Toggle the 'show' class
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

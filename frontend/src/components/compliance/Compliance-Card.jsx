import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/style.css';
import '../../css/bootstrap.min.css';

/**
 * Component for list of expandable compliance info.   
 * 
 * @param {Object} props - The properties object.
 * @param {Object} props.info - Object containing info on ISO compliance standard.
 * @return {JSX.Element} - The ComplianceCard component.
 */
const ComplianceCard = ({ info }) => {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    const toggleCard = () => setExpanded(!expanded);

    // Function to handle navigation based on the 'page-link' attribute
    const handleItemClick = (pageLink) => {
        if (pageLink) {
            navigate(pageLink);
        } else {
            console.log('No page-link found for this item.');
        }
    };

    return (
        <div className="card panel panel-default">
            <div className="panel-heading" onClick={toggleCard} 
                style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                <h4 className="panel-title">
                    {info.name} - {info.subtitle}
                </h4>
                <span className={expanded ? "up-arrow arrow" : "down-arrow arrow"}></span>
            </div>
            <div id="collapseOne" 
                 style={{ maxHeight: expanded ? '1000px' : '0', overflow: 'hidden',transition: 'max-height 0.25s ease', }}
                 className={`panel-collapse ${expanded ? 'show' : ''}`}>
                <div className="panel-body">
                    {info.summary}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <a onClick={() => handleItemClick(info['page-link'])} 
                           className="middle btn-gray-border hover-btn-blue" style={{ marginRight: '10px' }}>
                            Learn More
                        </a>
                        <a onClick={() => navigate(`/contact#request-service#compliance-services#${info.name}`)} 
                           className="middle btn-gray-border hover-btn-blue">
                            Request Service
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplianceCard;


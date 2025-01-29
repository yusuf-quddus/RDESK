import '../css/style.css'
import '../css/bootstrap.min.css'
import { FaTools, FaNetworkWired, FaCloud, FaShieldAlt, FaHeadset, FaLightbulb, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';

/**
 * Component for expandable core services section.  
 * 
 * @return {JSX.Element} - The CoreCard component.
 */
const CoreCard = ({info}) => {
    const [expanded, setExpanded] = useState(false);
    const toggleCard = () => setExpanded(!expanded);

    const getIcon = (name) => {
        const iconClass = "panel-icon";
        switch (name) {
            case 'Proactive IT Support and Monitoring':
                return <FaTools className={iconClass} />;
            case 'Network Management and Optimization':
                return <FaNetworkWired className={iconClass} />;
            case 'Cloud Solutions':
                return <FaCloud className={iconClass} />;
            case 'Cybersecurity Services':
                return <FaShieldAlt className={iconClass} />;
            case 'Help Desk Support':
                return <FaHeadset className={iconClass} />;
            case 'IT Strategy and Consulting':
                return <FaLightbulb className={iconClass} />;
            default:
                return null;
        }
    };

    return (
        <div className="panel-default"style={{ cursor: 'pointer'}} >
            <div 
                className={`panel-heading ${expanded ? 'expanded' : ''}`}
                onClick={toggleCard}
            >
                <h4 className="panel-title">
                    {getIcon(info.name)}
                    {info.name}
                </h4>
                <span className={`panel-toggle ${expanded ? 'expanded' : ''}`}>
                    { <FaChevronDown />}
                </span>
            </div>
            <div className={`panel-content ${expanded ? 'expanded' : ''}`}>
                <div className={`panel-body ${expanded ? 'expanded' : ''}`}>
                    {info.description}
                </div>
            </div>
        </div>
    );
}

export default CoreCard;
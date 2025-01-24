import '../../css/style.css'
import '../../css/bootstrap.min.css'
import { FaHeadset, FaNetworkWired, FaShieldAlt, FaCloud, FaServer, FaDatabase, FaHistory, FaWrench, FaClipboardCheck } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Component for expandable core services section.  
 * 
 * @return {JSX.Element} - The CoreCard component.
 */
const ServiceMenu = ({info}) => {
    const [expanded, setExpanded] = useState(false);
    const toggleCard = () => setExpanded(!expanded);
    const navigate = useNavigate();

    const getIcon = (name) => {
        const iconStyle = { marginRight: '10px', color: '#333333' };
        switch (name) {
            case 'Helpdesk - Managed Support':
                return <FaHeadset style={iconStyle} />;
            case 'Network Services':
                return <FaNetworkWired style={iconStyle} />;
            case 'Cyber Security':
                return <FaShieldAlt style={iconStyle} />;
            case 'Cloud Engineering \\ DevOps':
                return <FaCloud style={iconStyle} />;
            case 'Virtualization':
                return <FaServer style={iconStyle} />;
            case 'Data Infrastructure':
                return <FaDatabase style={iconStyle} />;
            case 'Disaster Recovery':
                return <FaHistory style={iconStyle} />;
            case 'Professional Wiring':
                return <FaWrench style={iconStyle} />;
            case 'Security/IT Assessment':
                return <FaClipboardCheck style={iconStyle} />;
            default:
                return null;
        }
    };

    const handleItemClick = (pageLink) => {
        if (pageLink) {
            navigate(pageLink);
        } else {
            console.log('No page-link found for this item.');
        }
    };

    return (
        <div className="panel-default">
            <div className="panel-heading" onClick={toggleCard} 
                  style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} >
                <h4 className="panel-title" style={{textAlign: 'center', display: 'flex', alignItems: 'center'}}>
                    {getIcon(info.name)}
                    {info.name}
                </h4>
                <span className={'symbol'}>{expanded ? '-' : '+'}</span>
            </div>
            <div style={{ maxHeight: expanded ? '1000px' : '0', overflow: 'hidden',transition: 'max-height 0.25s ease'}} className={`${expanded ? 'show' : ''}`}>
                <div className="panel-body">
                    {info.description}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <a onClick={() => handleItemClick(info['page-link'])} className="middle btn-gray-border hover-btn-blue" style={{ marginRight: '10px' }}>
                            Learn More
                        </a>
                        <a onClick={() => navigate(`/contact#request-service#it-services#${info.name}`)} className="middle btn-gray-border hover-btn-blue">
                            Request Service
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceMenu;
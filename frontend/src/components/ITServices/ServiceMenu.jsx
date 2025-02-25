import '../../css/style.css'
import '../../css/bootstrap.min.css'

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
                <h4 className="panel-title" style={{textAlign: 'center'}}>
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
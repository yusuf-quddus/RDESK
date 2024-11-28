import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/style.css';
import '../../css/bootstrap.min.css';

/**
 * Component for dropdown menue.  
 * 
 * @param {Object} props - The properties object.
 * @param {string} props.name - Name of dropdown section.
 * @param {Object[]} props.data - Dataset holding info on dropdown items.
 * @param {function} props.onClick - Function that handles clicking dropdown section (not dropdown item).
 * @return {JSX.Element} - The Dropdown component.
 */
const Dropdown = ({ name, data, onClick }) => {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate(); 

    /* Handle navigation of dropdown options */
    const handleItemClick = (pageLink) => {
        if (pageLink) {
            navigate(pageLink); 
        } else {
            console.log('No page-link found for this item.');
        }
    };

    return (
        <div onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)} >
            <a className="dropdown-toggle" onClick={onClick} id="navbarDropdown" 
               role="button" data-toggle="dropdown" aria-haspopup="true"  aria-expanded={expanded ? "true" : "false"} >
                {name} 
                <span className={`arrow ${expanded ? "up-arrow" : ""} dropdown-arrow`} ></span>
            </a>
            
            {/* Show dropdown menu when hover over section on navbar */}
            {expanded && (
                <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="compliancy-dropdown">
                    <ul>
                        {data.map((d) => (
                            <li key={d.name}>
                                <a onClick={() => handleItemClick(d['page-link'])}> {d.name} </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;

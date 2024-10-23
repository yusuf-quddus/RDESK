import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import '../css/style.css';
import '../css/bootstrap.min.css';

const Dropdown = ({ name, data, onClick }) => {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate

    // Function to handle navigation based on the 'page-link' attribute
    const handleItemClick = (pageLink) => {
        if (pageLink) {
            navigate(pageLink);  // Navigate to the page link if it exists
        } else {
            console.log('No page-link found for this item.'); // Handle no page link (optional)
        }
    };

    return (
        <div
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
        >
            <a 
                className="nav-link dropdown-toggle" 
                onClick={onClick} 
                id="navbarDropdown" 
                role="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded={expanded ? "true" : "false"}
            >
                {name} <span className={expanded ? "up-arrow arrow" : "arrow"}></span>
            </a>
            {expanded && (
                <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="compliancy-dropdown">
                    <ul>
                        {data.map((d) => (
                            <li key={d.name}>
                                {/* Handle navigation via onClick, use href as a fallback */}
                                <a onClick={() => handleItemClick(d['page-link'])}>
                                    {d.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;

import { useState } from 'react'
import '../css/style.css'
import '../css/bootstrap.min.css'

const ComplianceCard = ({ info }) => {
    const [expanded, changeExpanded] = useState(false);
    const toggleCard = () => changeExpanded(!expanded);

    return (
        <div className="card panel panel-default" onClick={toggleCard}>
            <div className="panel-heading">
                <h4 className="panel-title">
                    {info.name}
                </h4>
            </div>
            <div id="collapseOne" className={expanded ? "panel-collapse show" : "panel-collapse collapse"}>
                <div className="panel-body">
                    {/* Display the description */}
                    {info.description}

                    {/* Buttons */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center', /* Center horizontally */
                        marginTop: '20px'
                    }}>                        {/* Learn More button */}
                        <a href={info['page-link']} className="middle btn-gray-border hover-btn-blue" style={{ marginRight: '10px' }}>
                            Learn More
                        </a>

                        {/* Request Service button */}
                        <a href="#" className="middle btn-gray-border hover-btn-blue">
                            Request Service
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplianceCard;

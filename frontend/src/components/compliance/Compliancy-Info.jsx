import React from 'react';
import ComplianceCard from './Compliance-Card';
import servicesData from '../../data/services.json';

import '../../css/style.css';
import '../../css/bootstrap.min.css';

/**
 * Component for compliance section in home page.   
 * 
 * @return {JSX.Element} - The ComplianceInfo component.
 */
const CompliancyInfo = () => {
    return (
        <section id="compliance" className="section">
            <div className="container">
                <div className="title-box text-center">
                    <h2 className="title">Compliance Services</h2>
                </div>
                
                <div className="row content-spacing">
                    <div className="col-md-6">
                        <div className="description-box longer-description">
                            <h2 className="subtitle">Compliance Services Overview</h2>
                            <p>
                                Our compliance services cover a wide range of standards and regulations to help your business stay compliant. 
                                We offer expert advice and certified services in various compliance domains such as ISO standards, data protection, 
                                and regulatory requirements. Click on each service on the right to learn more.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="scrollable-accordion fixed-height">
                            <div className="panel-group" id="accordion">
                                {servicesData["Compliance Services"].map(iso => 
                                    <div className="card" key={iso.name}> 
                                        <ComplianceCard info={iso} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CompliancyInfo;

import React from 'react';
import ComplianceCard from './Compliance-Card';
import servicesData from '../../data/services.json';

import '../../css/style.css';
import '../../css/bootstrap.min.css';

const CompliancyInfo = ({ scrollToSection }) => {
    return (
        <section id="compliance" className="section">
            <div className="container">
                {/* Main title for the section */}
                <div className="title-box text-center">
                    <h2 className="title">Compliancy Services</h2>
                </div>
                
                {/* Spacing below header */}
                <div className="row content-spacing">
                    {/* Left side: General description */}
                    <div className="col-md-6">
                        <div className="description-box longer-description">
                            <h2 className="subtitle">Compliancy Services Overview</h2>
                            <p>
                                Our compliancy services cover a wide range of standards and regulations to help your business stay compliant. 
                                We offer expert advice and certified services in various compliance domains such as ISO standards, data protection, 
                                and regulatory requirements. Click on each service on the right to learn more.
                            </p>
                        </div>
                    </div>

                    {/* Right side: Scrollable accordion menu */}
                    <div className="col-md-6">
                        <div className="scrollable-accordion fixed-height">
                            <div className="panel-group" id="accordion">
                                {/* Map over compliance data from services.json */}
                                {servicesData["Compliance Services"].map(iso => 
                                    <div className="card" key={iso.name}> 
                                        <ComplianceCard info={iso} scrollToSection={scrollToSection} />
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

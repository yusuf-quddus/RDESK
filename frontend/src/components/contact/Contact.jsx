import React, { useState, useEffect } from 'react';
import data from '../../data.json';
import Header from '../assets/Header';
import Footer from '../assets/Footer';
import Notification from '../Notification';

import '../../css/style.css';
import '../../css/bootstrap.min.css';

const Contact = () => {
    const [name, setName] = useState("Your Name");
    const [email, setEmail] = useState("Your Email");
    const [subject, setSubject] = useState("");  // Start with empty subject
    const [serv, setService] = useState("Select Service");
    const [ITService, setITService] = useState("Desired IT Service");
    const [compliance, setCompliance] = useState("Select Compliance");
    const [message, setMessage] = useState("");
    const [show, showNotification] = useState(false);
    const [isSubjectChangedManually, setIsSubjectChangedManually] = useState(false); // Flag for manual change
    const inputSize = "col-md-4";

    // New states for tracking highlight effect
    const [subjectHighlighted, setSubjectHighlighted] = useState(false);
    const [serviceHighlighted, setServiceHighlighted] = useState(false);
    const [complianceHighlighted, setComplianceHighlighted] = useState(false); // New state for compliance highlight

    useEffect(() => {
        if (isSubjectChangedManually) return; // If manually changed, don't update the subject from the URL
    
        // Parse URL fragments
        const fragments = window.location.hash.substring(1).split('#');
        console.log(fragments);
    
        // Autofill subject based on URL fragments
        if (fragments[0] === 'request-service' || fragments[0] === 'get-quote' || fragments[0] === 'general-inquiry') {
            setSubject(fragments[0].replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()));  // Properly format the subject
            setSubjectHighlighted(true); // Trigger highlight effect for subject
            setTimeout(() => setSubjectHighlighted(false), 500); // Remove highlight after 500ms
        }
    
        // Autofill the second dropdown based on the second fragment
        if (fragments[1]) {
            if (subject === 'Request Service' || subject === 'Get Quote') {
                if (fragments[1] === 'compliancy-services') {
                    setService("Compliance Services");
                } else if (fragments[1] === 'it-services') {
                    setService("IT Services");
                } else if (fragments[1] === 'other-services') {
                    setService("Office / Other Services"); // Set to "Office / Other Services" for #other-services
                }
                setServiceHighlighted(true); // Trigger highlight effect for service
                setTimeout(() => setServiceHighlighted(false), 500); // Remove highlight after 500ms
            }
        }

        // Autofill compliance based on the third fragment if it exists
        if (fragments[2] && serv === "Compliance Services") {
            // Decode URI component to handle special characters (e.g., spaces in ISO 45001)
            const decodedCompliance = decodeURIComponent(fragments[2]);

            // Find the matching compliance option from data.compliance
            const matchedCompliance = data.compliance.find(
                (comp) => comp.name.toLowerCase() === decodedCompliance.toLowerCase()
            );

            // If a match is found, set it in the dropdown
            if (matchedCompliance) {
                setCompliance(matchedCompliance.name);
                setComplianceHighlighted(true); // Trigger highlight effect for compliance
                setTimeout(() => setComplianceHighlighted(false), 500); // Remove highlight after 500ms
            }
        }
    }, [subject, serv, isSubjectChangedManually]); // Only re-run if subject, service, or manual flag changes

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, subject, message, compliance);
        showNotification(true);
        setTimeout(() => {
            showNotification(false);
        }, 3000);
    };

    const handleSubject = (sub) => {
        setCompliance("Select Compliance");
        setITService("Desired IT Service");
        setService("Select Service");
        setSubject(sub);
        setIsSubjectChangedManually(true); // Flag that the subject was manually changed
        setSubjectHighlighted(true); // Trigger highlight on manual change
        setTimeout(() => setSubjectHighlighted(false), 500); // Remove highlight after 500ms
    };

    const handleServiceChange = (newService) => {
        setService(newService);
        setServiceHighlighted(true); // Trigger highlight on manual change
        setTimeout(() => setServiceHighlighted(false), 500); // Remove highlight after 500ms
    };

    return (
        <div>
            <Header />
            <section id="contact" className="section parallax full-screen-image">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        {show ? (<Notification />) : null}

                        <div className="title-box text-center white">
                            <h2 className="title">Contact Us</h2>
                        </div>
                    </div>
                    <div className="col-md-8 col-md-offset-2 contact-form">
                        <form method="post" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className={inputSize}>
                                    <input className="form-control" id="name" placeholder={name} type="text" onChange={(event) => setName(event.target.value)} />
                                </div>
                                <div className={inputSize}>
                                    <input className="form-control" id="email" placeholder={email} type="email" onChange={(event) => setEmail(event.target.value)} />
                                </div>
                                <div className={inputSize}>
                                    <select
                                        name="Subject"
                                        value={subject}
                                        className={`form-control ${subjectHighlighted ? 'highlight' : ''}`} // Apply highlight class
                                        id="options"
                                        onChange={(event) => handleSubject(event.target.value)}
                                    >
                                        <option value="" disabled>Select Subject</option> {/* Default empty option */}
                                        {data.contact_purpose.map(service => 
                                            (<option key={service.name} value={service.name}>{service.name}</option>)
                                        )}
                                    </select>
                                </div>

                                {(subject === "Request Service" || subject === "Get Quote") && subject !== "General Inquiry" ? (
                                    <div className={inputSize}>
                                        <select
                                            name="services"
                                            value={serv}
                                            className={`form-control ${serviceHighlighted ? 'highlight' : ''}`} // Apply highlight class
                                            onChange={(event) => handleServiceChange(event.target.value)}
                                        >
                                            <option value="Select Service" disabled>Select Service</option>
                                            <option value="Compliance Services">Compliance Services</option>
                                            <option value="IT Services">IT Services</option>
                                            <option value="Office / Other Services">Office / Other Services</option>
                                        </select>
                                    </div>
                                ) : null}
                                
                                {serv === "IT Services" ? (
                                    <div className={inputSize}>
                                        <select name="ITServices" value={ITService} className="form-control" onChange={(event) => setITService(event.target.value)}>
                                            <option value="Desired IT Service" disabled>Desired IT Service</option>
                                            {data.ITServices.map(service => 
                                                (<option key={service.name} value={service.name}>{service.name}</option>)
                                            )}
                                            <option value="option3">Other</option>
                                        </select>
                                    </div>
                                ) : null}
                                
                                {serv === "Compliance Services" ? (
                                    <div className={inputSize}>
                                        <select name="Compliance" value={compliance} className={`form-control ${complianceHighlighted ? 'highlight' : ''}`} onChange={(event) => setCompliance(event.target.value)}>
                                            <option value="Select Compliance" disabled>Select Compliance</option>
                                            {data.compliance.map(service => 
                                                (<option key={service.name} value={service.name}>{service.name}</option>)
                                            )}
                                            <option value="option3">Other / More than one</option>
                                        </select>
                                    </div>
                                ) : null}

                                <div className="col-md-12">
                                    <textarea className="form-control" id="message" rows="7" placeholder={message} onChange={(event) => setMessage(event.target.value)} />
                                </div>
                                <div className="col-md-12 text-right">
                                    <button type="submit" className="btn btn-blue">SEND MESSAGE</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;

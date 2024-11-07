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

    useEffect(() => {
        if (isSubjectChangedManually) return; // If manually changed, don't update the subject from the URL

        // Parse URL fragments
        const fragments = window.location.hash.substring(1).split('#');
        console.log(fragments);

        // Autofill subject based on URL fragments
        if (fragments[0] === 'request-service' || fragments[0] === 'get-quote' || fragments[0] === 'general-inquiry') {
            setSubject(fragments[0].replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()));  // Properly format the subject
        }

        // Autofill the second dropdown based on the second fragment
        if (fragments[1]) {
            if (subject === 'Request Service' || subject === 'Get Quote') {
                // Check if the second fragment matches one of the services and set it accordingly
                const validServices = ['compliancy-services', 'it-services', 'other-services'];
                if (validServices.includes(fragments[1])) {
                    setService(fragments[1].replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()));
                }
            }
        }
    }, [subject, isSubjectChangedManually]); // Only re-run if subject or manual flag changes

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
                                    <select name="Subject" value={subject} className="form-control" id="options" onChange={(event) => handleSubject(event.target.value)}>
                                        <option value="" disabled>Select Subject</option> {/* Default empty option */}
                                        {data.contact_purpose.map(service => 
                                            (<option key={service.name} value={service.name}>{service.name}</option>)
                                        )}
                                    </select>
                                </div>

                                {(subject === "Request Service" || subject === "Get Quote") && subject !== "General Inquiry" ? (
                                    <div className={inputSize}>
                                        <select name="services" value={serv} className="form-control" onChange={(event) => setService(event.target.value)}>
                                            <option value="Select Service" disabled>Select Service</option>
                                            <option value="compliancy-services">Compliance Services</option>
                                            <option value="it-services">IT Services</option>
                                            <option value="other-services">Office / Other Services</option>
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
                                        <select name="Compliance" value={compliance} className="form-control" onChange={(event) => setCompliance(event.target.value)}>
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

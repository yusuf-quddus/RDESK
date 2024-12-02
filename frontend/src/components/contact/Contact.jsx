import React, { useState, useEffect } from 'react';
import data from '../../data/data.json';          
import services from '../../data/services.json';  
import Header from '../assets/Header';
import Footer from '../assets/Footer'
import Notification from '../Notification';

import axios from 'axios'

import '../../css/style.css';
import '../../css/bootstrap.min.css';

/**
 * Component for contact page.   
 * 
 * @return {JSX.Element} - The Contact component.
 */
const Contact = () => {
    const [name, setName] = useState("Your Name");
    const [email, setEmail] = useState("Your Email");
    const [subject, setSubject] = useState("");
    const [serv, setService] = useState("Select Service");
    const [ITService, setITService] = useState("Desired IT Service");
    const [compliance, setCompliance] = useState("Select Compliance");
    const [message, setMessage] = useState("");
    const [show, showNotification] = useState(false);
    const [isSubjectChangedManually, setIsSubjectChangedManually] = useState(false); 
    const [notifMessage, setNotifMessage] = useState("");
    const [success, setSuccess] = useState(true);

    const inputSize = "col-md-4";

    const [highlighted, setHighlighted] = useState({
        subject: false,
        service: false,
        compliance: false,
        ITService: false
    });

    useEffect(() => {
        window.scrollTo({top: 0})
        if (isSubjectChangedManually) return;

        const fragments = window.location.hash.substring(1).split('#').map(f => decodeURIComponent(f).replace(/-/g, ' '));

        if (['request service', 'get quote', 'general inquiry'].includes(fragments[0])) {
            setSubject(fragments[0].replace(/\b\w/g, l => l.toUpperCase()));
            setHighlight('subject');
        }

        if (fragments[1]) {
            const serviceType = {
                'compliance services': "Compliance Services",
                'it services': "IT Services",
                'office other services': "Office / Other Services"
            }[fragments[1]];
            if (serviceType) {
                setService(serviceType);
                setHighlight('service');
            }
        }

        const matchService = (type, fragment, dataKey, setFunc, highlightKey) => {
            const matchedService = services[dataKey]?.find(s => s.name.toLowerCase() === fragment.toLowerCase());
            if (matchedService) {
                setFunc(matchedService.name);
                setHighlight(highlightKey);
            }
        };

        if (serv === "Compliance Services" && fragments[2]) {
            matchService(serv, fragments[2], "Compliance Services", setCompliance, 'compliance');
        } else if (serv === "IT Services" && fragments[2]) {
            matchService(serv, fragments[2], "IT Solutions", setITService, 'ITService');
        }

    }, [subject, serv, isSubjectChangedManually]);

    const setHighlight = (key) => {
        setHighlighted(prev => ({ ...prev, [key]: true }));
        setTimeout(() => setHighlighted(prev => ({ ...prev, [key]: false })), 500);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        window.scrollTo({top: 0})
        if (name === "Your Name" || email === "Your Email" || subject === "" || name === "" || email === "") {
            setNotifMessage(`Missing${name === "Your Name" || name === "" ? " name,": ""}${email === "Your Email" ? " email,": ""}${subject === "" ? " subject,": ""}`)
            setSuccess(false)
        } else {
            try {
                const formData = {
                    name: name,
                    email: email,
                    subject: subject,
                    service: serv,
                    compliance: compliance,
                    it_service: ITService,
                    message: message
                }
                console.log('test')
                const res = await axios.post("/api/request", formData)
                setNotifMessage("Thank you, we recieved your request")
                setSuccess(true)
            } catch (err) {
                console.error("Error submitting form:", err)
                setNotifMessage("Error submitting form")
                setSuccess(false)
            }
        }
        showNotification(true);
        setTimeout(() => showNotification(false), 3000);
    };

    const handleSubject = (sub) => {
        setCompliance("Select Compliance");
        setITService("Desired IT Service");
        setService("Select Service");
        setSubject(sub);
        setIsSubjectChangedManually(true);
        setHighlight('subject');
    };

    return (
        <div>
            <Header />
            <section id="contact" className="section parallax full-screen-image">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="title-box text-center white">
                            {show && <Notification message={notifMessage} success={success}/>}
                            <h2 className="title">Contact Us</h2>
                        </div>
                    </div>
                    <div className="col-md-8 col-md-offset-2 contact-form">
                        <form onSubmit={handleSubmit}>
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
                                        className={`form-control ${highlighted.subject ? 'highlight' : ''}`} 
                                        id="options"
                                        onChange={(event) => handleSubject(event.target.value)}
                                    >
                                        <option value="" disabled>Select Subject</option> 
                                        {data.contact_purpose.map(service => 
                                            <option key={service.name} value={service.name}>{service.name}</option>
                                        )}
                                    </select>
                                </div>

                                {(subject === "Request Service" || subject === "Get Quote") && subject !== "General Inquiry" && (
                                    <div className={inputSize}>
                                        <select
                                            name="services"
                                            value={serv}
                                            className={`form-control ${highlighted.service ? 'highlight' : ''}`} 
                                            onChange={(event) => {
                                                setService(event.target.value);
                                                setHighlight('service');
                                            }}
                                        >
                                            <option value="Select Service" disabled>Select Service</option>
                                            <option value="Compliance Services">Compliance Services</option>
                                            <option value="IT Services">IT Services</option>
                                            <option value="Office / Other Services">Office / Other Services</option>
                                        </select>
                                    </div>
                                )}

                                {serv === "IT Services" && (
                                    <div className={inputSize}>
                                        <select
                                            name="ITServices"
                                            value={ITService}
                                            className={`form-control ${highlighted.ITService ? 'highlight' : ''}`}
                                            onChange={(event) => setITService(event.target.value)}
                                        >
                                            <option value="Desired IT Service" disabled>Desired IT Service</option>
                                            {services["IT Solutions"].map(service => 
                                                <option key={service.name} value={service.name}>{service.name}</option>
                                            )}
                                            <option value="option3">Other</option>
                                        </select>
                                    </div>
                                )}

                                {serv === "Compliance Services" && (
                                    <div className={inputSize}>
                                        <select
                                            name="Compliance"
                                            value={compliance}
                                            className={`form-control ${highlighted.compliance ? 'highlight' : ''}`}
                                            onChange={(event) => setCompliance(event.target.value)}
                                        >
                                            <option value="Select Compliance" disabled>Select Compliance</option>
                                            {services["Compliance Services"].map(service => 
                                                <option key={service.name} value={service.name}>{service.name}</option>
                                            )}
                                            <option value="option3">Other / More than one</option>
                                        </select>
                                    </div>
                                )}

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

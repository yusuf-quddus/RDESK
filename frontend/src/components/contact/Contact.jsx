import { useState } from 'react'
import data from '../../data.json'
import Header from '../assets/Header'
import Footer from '../assets/Footer'
import Notification from '../Notification'

import '../../css/style.css'
import '../../css/bootstrap.min.css'


const Contact = () => {
    const [name, setName] = useState("Your Name")
    const [email, setEmail] = useState("Your Email")
    const [subject, setSubject] = useState("Subject")
    const [serv, setService] = useState("Select Service")
    const [ITService, setITService] = useState("Desired IT Service")
    const [compliance, setCompliance] = useState("Select Compliance")
    const [message, setMessage] = useState("")
    const [show, showNotification] = useState(false) 
    const inputSize = "col-md-4"

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name, email, subject, message, compliance)
        showNotification(true)
        setTimeout(() => {
            showNotification(false);
        }, 3000);
    }

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
                                        <input className="form-control" id="name" placeholder={name} type="text" onChange={(event) => setName(event.target.value)}/>
                                    </div>
                                    <div className={inputSize}>
                                        <input className="form-control" id="email" placeholder={email} type="email" 
                                            onChange = {(event) => setEmail(event.target.value)}/>
                                    </div>
                                    <div className={inputSize}>
                                        <select name="Subject" defaultValue="Subject" className="form-control" id="options" 
                                            placeholder="Subject" onChange = {(event) => setSubject(event.target.value)}>
                                            <option value={subject} disabled>Subject</option>
                                                {data.contact_purpose.map(service => 
                                                (<option key={service.name} value={service.name}> 
                                                {service.name} 
                                                </option>))}
                                        </select>
                                    </div>
                                    {(subject == "Request a Service" || subject == "Get a Quote") ? (
                                        <div className={inputSize}>
                                            <select name="services" defaultValue="Select Service" className="form-control" id="options" 
                                                placeholder="service" onChange = {(event) => setService(event.target.value)}>
                                                <option value={serv} disabled>Select Service</option>
                                                    {data.services.map(service => 
                                                    (<option key={service.name} value={service.name}> 
                                                    {service.name} 
                                                    </option>))}
                                            </select>
                                        </div> ) : null}
                                    {serv == "IT Services" ? (
                                        <div className={inputSize}>
                                        <select name="services" defaultValue="Desired IT Service" className="form-control" id="options" 
                                            placeholder="Subject" onChange = {(event) => setITService(event.target.value)}>
                                            <option value={ITService} disabled>Desired IT Service</option>
                                                {data.ITServices.map(service => 
                                                (<option key={service.name} value={service.name}> 
                                                {service.name} 
                                                </option>))}
                                            <option value="option3">Other</option>
                                        </select>
                                    </div>
                                    ) : null}
                                    {serv == "Compliance Services" ? (
                                        <div className={inputSize}>
                                        <select name="services" defaultValue="Select Compliance" className="form-control" id="options" 
                                            placeholder="Subject" onChange = {(event) => setCompliance(event.target.value)}>
                                            <option value={compliance} disabled>Select Compliance</option>
                                                {data.compliance.map(service => 
                                                (<option key={service.name} value={service.name}> 
                                                {service.name} 
                                                </option>))}
                                            <option value="option3">Other / More than one</option>
                                        </select>
                                    </div>
                                    ) : null}
                                    <div className="col-md-12">
                                        <textarea className="form-control" id="message" rows="7" 
                                            placeholder={message} onChange = {(event) => setMessage(event.target.value)} />
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
    )
}

export default Contact
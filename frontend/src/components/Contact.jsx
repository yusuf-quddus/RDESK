import { useState } from 'react'
import data from '../data.json'

import '../css/style.css'
import '../css/bootstrap.min.css'


const Contact = ({handleDisplay}) => {
    const [name, setName] = useState("Your Name")
    const [email, setEmail] = useState("Your Email")
    const [subject, setSubject] = useState("Select Service")
    const [message, setMessage] = useState("")

    const handleSubmit = (event) => {
        /* submit data */
        event.preventDefault()
        console.log(name, email, subject, message)
        handleDisplay()
    }

    return (
        <section id="contact" className="section parallax">
        <div className="overlay"></div>
         <div className="container">
             <div className="row">
             
                   <div className="title-box text-center white">
                      <h2 className="title">Request a Service</h2>
                   </div>
               </div>
    
                 <div className="col-md-8 col-md-offset-2 contact-form">
                 
                      {/* <!-- <div className="contact-info text-center">
                         <p>123 4567 890</p>
                         <p>123 lorem ipsum, 4th floor, lorem, ipsum </p>
                         <p>mail@demo.com </p>
                      </div> --> */}
                       
                       <form method="post" onSubmit={handleSubmit}>
                          <div className="row">
                              <div className="col-md-4">
                                  <input className="form-control" id="name" placeholder={name} type="text" onChange={(event) => setName(event.target.value)}/>
                              </div>
                              <div className="col-md-4">
                                  <input className="form-control" id="email" placeholder={email} type="email" 
                                    onChange = {(event) => setEmail(event.target.value)}/>
                              </div>
                              <div className="col-md-4">
                                <select name="services" defaultValue="Select Service" className="form-control" id="options" 
                                    placeholder="Subject" onChange = {(event) => setSubject(event.target.value)}>
                                    <option value={subject} disabled>Select Service</option>
                                        {data.services.map(service => 
                                        (<option key={service.name} value={service.name}> 
                                        {service.name} 
                                        </option>))}
                                    <option value="option3">General Inquiry</option>
                                </select>
                            </div>
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
    )
}

export default Contact
import '../css/style.css'
import '../css/bootstrap.min.css'

const Contact = () => {
    return (
        <section id="contact" class="section parallax">
        <div class="overlay"></div>
         <div class="container">
             <div class="row">
             
                   <div class="title-box text-center white">
                      <h2 class="title">Request a Service</h2>
                   </div>
               </div>
    
                 <div class="col-md-8 col-md-offset-2 contact-form">
                 
                      {/* <!-- <div class="contact-info text-center">
                         <p>123 4567 890</p>
                         <p>123 lorem ipsum, 4th floor, lorem, ipsum </p>
                         <p>mail@demo.com </p>
                      </div> --> */}
                       
                       <form method="post">
                          <div class="row">
                              <div class="col-md-4">
                                  <input class="form-control" id="name" placeholder="Full Name" type="text"/>
                              </div>
                              <div class="col-md-4">
                                  <input class="form-control" id="email" placeholder="Your Email" type="email"/>
                              </div>
                              <div class="col-md-4">
                                <select name="services" class="form-control" id="options" placeholder="Subject">
                                    <option value="" disabled selected>Select Service</option>
                                    <option value="option1">IT Services</option>
                                    <option value="option2">Compliance Services</option>
                                    <option value="option3">Office / Other Services</option>
                                    <option value="option3">General Inquiry</option>
                                </select>
                            </div>
                              <div class="col-md-12">
                                  <textarea class="form-control" id="message" rows="7" placeholder="Your Message" />
                              </div>
                              <div class="col-md-12 text-right">
                                  <button type="submit" class="btn btn-blue">SEND MESSAGE</button>
                              </div>
                          </div>
                      </form>
                 </div>
         </div>
     </section>
    )
}

export default Contact
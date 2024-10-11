import '../css/style.css'
import '../css/bootstrap.min.css'

const About = () => {
    return (
        <section  id="about" className="section">
        <div className="container">
         <div className="title-box text-center">
             <h2 className="title">about us</h2>
          </div>
            <div className="row">
               
               <div className="col-md-4">
                   <div className="features-icon-box">
                   
                       <div className="features-icon">
                       <i className="fa fa-leaf"></i>
                       </div>
                       
                       <div className="features-info">
                          <h4>Who we are</h4>
                          <p>Lorem ipsum dolor consectetur adipisicing incididunt eiusmod tempor incididunt laboredolore magna aliqua.</p>
                       </div>
                   </div>
               </div>
  
               <div className="col-md-4">
                   <div className="features-icon-box">
                   
                       <div className="features-icon">
                       <i className="fa fa-paper-plane"></i>
                       </div>
                       
                       <div className="features-info">
                          <h4>What we do</h4>
                          <p>Lorem ipsum dolor consectetur adipisicing incididunt eiusmod tempor incididunt laboredolore magna aliqua.</p>
                       </div>
                   </div>
               </div>
 
               <div className="col-md-4">
                   <div className="features-icon-box">
                   
                       <div className="features-icon">
                      <i className="fa fa-life-saver"></i>
                       </div>
                       
                       <div className="features-info">
                          <h4>Our background</h4>
                          <p>Lorem ipsum dolor consectetur adipisicing incididunt eiusmod tempor incididunt laboredolore magna aliqua.</p>
                       </div>
                   </div>
               </div>   
            </div> 
        </div>
   </section> 
    )
}

export default About
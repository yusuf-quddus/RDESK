import '../../css/style.css'
import '../../css/bootstrap.min.css'

import data from '../../data.json'

const OtherServices = () => {
    const other = data.services.find(service => service.name == "Office / Other Services")
    
    return (
        <section id="other" className="section">
        <div className="container">
         <div className="title-box text-center">
             <h2 className="title">{other.name}</h2>
          </div>
            <div className="row">
               
               <div className="col-md-12">
                   <div className="features-icon-box">
                   
                       <div className="features-icon">
                       <i className="fa fa-leaf"></i>
                       </div>
                       
                       <div className="features-info">
                        {other.description}
                       </div>
                   </div>
               </div>
            </div> 
        </div>
   </section> 
    )
}

export default OtherServices
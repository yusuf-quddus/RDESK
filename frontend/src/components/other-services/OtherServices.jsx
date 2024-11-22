import '../../css/style.css'
import '../../css/bootstrap.min.css'

import data from '../../data/services.json'
import { useNavigate } from 'react-router-dom';

const OtherServices = () => {
    const other = data["Office / Other Services"]

    const navigate = useNavigate()

    return (
        <section id="other" className="section">
        <div className="container">
         <div className="title-box text-center">
             <h2 className="title">{other.name}</h2>
          </div>
            <div className="row">
                <div className="col-md-6">
                            <div className="core-features">      
                                <p>{other.description}</p>          
                            </div>
                            <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
                                <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px' }}> 
                                    <a onClick={() => navigate("/home_services")} className="middle btn-gray-border hover-btn-blue">
                                        Learn More
                                    </a>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px' }}> 
                                    <a onClick={() => navigate(`/contact#request-service#it-services#${ITService.id}`)} className="middle btn-gray-border hover-btn-blue">
                                        Request Service
                                    </a>
                                </div>
                            </div>  
               </div>
               <div className="col-md-6">
                    <div className="devices-image">
                        <img src={`../../public/images/${other.images[0]}`} alt=""/>
                    </div>
                </div>
            </div> 
        </div>
   </section> 
    )
}

export default OtherServices
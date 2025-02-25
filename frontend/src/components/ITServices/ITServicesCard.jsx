import { useNavigate } from 'react-router-dom';
import '../../css/style.css'
import '../../css/bootstrap.min.css'

/**
 * Component for specific IT Service information on main page. 
 * 
 * @param {Object} props - The properties object.
 * @param {Object} props.service - Service contains data on specific IT Service.
 * @return {JSX.Element} - The ITService card.
 */
const ITServicesCard = ({ITService}) => {
  const navigate = useNavigate();

  return (
    <div className="tab-content-main">
        <div className="container">
            <div className="tab-content">
                <div className="tab-panel" id={`${ITService.id}`}>
                    <div className="tab-content-2">          
                        <div className="col-md-6">
                            <div className="core-features">      
                                <p>{ITService.description}</p>          
                            </div>
                            <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
                                <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px' }}> 
                                    <a onClick={() => navigate(`${ITService['page-link']}`)} className="middle btn-gray-border hover-btn-blue">
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
                                <img src={`images/${ITService.images[0]}`} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ITServicesCard;
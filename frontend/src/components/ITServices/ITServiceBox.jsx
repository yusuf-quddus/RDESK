import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons'; 
import '../../css/style.css'
import '../../css/bootstrap.min.css'

const ITServiceBox = ({service, left}) => {
    const navigate = useNavigate()
    return (
            <div className="col-md-4">
            <div className="services-box">
                <div className="services-icon"> <FontAwesomeIcon icon={faNetworkWired} size="sm" /> </div> 
                    <div className="services-desc">
                        <h4>{service.name}</h4>
                        <p>{service.description}</p>
                        <a onClick={() => navigate('/contact#request-service')} className="middle btn btn-gray hover-btn-blue">Request Service</a>
                    </div>
                </div>
            </div>
    )
};

export default ITServiceBox;

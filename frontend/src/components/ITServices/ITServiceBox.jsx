import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../css/style.css'
import '../../css/bootstrap.min.css'

const ITServiceBox = ({service, icon}) => {
    const navigate = useNavigate()
    return (
            <div className="col-md-4">
            <div className="services-box">
                <div className="services-icon"> {icon} </div> 
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

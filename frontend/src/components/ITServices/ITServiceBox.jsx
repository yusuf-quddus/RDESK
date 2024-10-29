import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../css/style.css'
import '../../css/bootstrap.min.css'

const ITServiceBox = ({service, icon}) => {
    const navigate = useNavigate()
    const [hover, setHover] = useState(false)
    const [iconSize, setIconSize] = useState("sm")
    const onHover = (toHover) => {
        setHover(toHover)
        if (toHover) {
            setIconSize("lg")
        } else {
            setIconSize("sm")
        }
    }
    return (
            <div className="col-md-4 clickable">
                <div onMouseEnter={()=>onHover(true)} onMouseLeave={()=>onHover(false)} 
                    className={hover ? "services-box shadow-box" : "services-box"}
                    onClick={()=>navigate(service["page-link"])} >
                    <div className="services-icon"> <FontAwesomeIcon icon={icon} size={iconSize} /> </div> 
                    <div className="services-desc">
                        <h4>{service.name}</h4>
                        <p>{service.description}</p>
                    </div>
                </div>
            </div>
    )
};

export default ITServiceBox;

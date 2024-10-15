import { useState } from 'react'
import '../css/style.css'
import '../css/bootstrap.min.css'


const ITServicesCard = ({ITService}) => {

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
                        </div>  
                        <div className="col-md-6">
                            <div className="devices-image">
                                <img src="images/device-desktop.png" alt=""/>
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

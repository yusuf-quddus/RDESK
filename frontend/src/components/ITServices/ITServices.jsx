import ITServicesPanel from './ITServicesPanel'

import '../../css/style.css'
import '../../css/bootstrap.min.css'

const ITServices = () => {
    return (
        <section id="services" className="section">
            <div className="container">
                <div className="row"> 
                    <div className="title-box text-center">
                        <h2 className="title">IT Services</h2>
                    </div>
                    <div className="col-md-12">
                       <ITServicesPanel />
                    </div>          
                </div>  
            </div> 
        </section>
    )
}

export default ITServices
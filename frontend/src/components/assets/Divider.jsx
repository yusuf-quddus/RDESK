import '../../css/style.css'
import '../../css/bootstrap.min.css'

/**
 * Component image scroll divider.  
 * 
 * @return {JSX.Element} - The Divider component.
 */
const Divider = () => {
    return (
        <section id="facts" className="section parallax">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 facts-box margin-bottom-30">
                        <h3></h3>
                        <span></span>
                    </div>
                            
                    <div className="col-md-3 col-sm-6 facts-box margin-bottom-30">
                        <h3></h3>
                        <span></span>
                    </div>
                            
                    <div className="col-md-3 col-sm-6 facts-box margin-bottom-30">
                        <h3></h3>
                        <span></span>
                    </div>
                            
                    <div className="col-md-3 col-sm-6 facts-box margin-bottom-30">
                        <h3></h3>
                        <span></span>
                    </div>
                </div> 
            </div>
        </section>
    )
}

export default Divider
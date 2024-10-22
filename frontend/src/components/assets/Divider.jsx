import '../../css/style.css'
import '../../css/bootstrap.min.css'

const Divider = ({img}) => {
    return (
        <section id="facts" className="section parallax">
            <div className="overlay"></div>
                <div className="container">
                <div className="row">
                        <div className="col-md-3 col-sm-6 facts-box margin-bottom-30">
                            <h3>841</h3>
                            <span>Happy Clients</span>
                        </div>
                        
                        <div className="col-md-3 col-sm-6 facts-box margin-bottom-30">
                            <h3>800</h3>
                            <span>Projects</span>
                        </div>
                        
                        <div className="col-md-3 col-sm-6 facts-box margin-bottom-30">
                            <h3>1232</h3>
                            <span>Lines of Code</span>
                        </div>
                        
                        <div className="col-md-3 col-sm-6 facts-box margin-bottom-30">
                            <h3>300</h3>
                            <span>Awards Won</span>
                        </div>
                    </div> 
            </div>
        </section>
    )
}

export default Divider
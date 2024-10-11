import '../css/style.css'
import '../css/bootstrap.min.css'

const CompliancyInfo = () => {
    return (
        <section id="compliancy" className="section">
            <div className="container">
            <div className="row"> 
                <div className="title-box text-center">
                <h2 className="title">Compliancy</h2>
                </div>
                <div>
                <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                        <div className="services-info"></div>
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"> 
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        Collapsible Group Item #1
                                    </h4>
                                 </div>
                            </a>
                            <div id="collapseOne" className="panel-collapse collapse">
                                <div className="panel-body">
                                    Anim pariatur cliche reprehenderit
                                </div>
                            </div>
                        </div>
                
                        <div className="panel panel-default">
                            <div className="services-info"></div>
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                    <div className="panel-heading">
                                        <h4 className="panel-title">
                                            Collapsible Group Item #2
                                        </h4>
                                     </div>
                                </a>
                                <div id="collapseTwo" className="panel-collapse collapse">
                                    <div className="panel-body">
                                        Anim pariatur cliche reprehenderit
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default CompliancyInfo
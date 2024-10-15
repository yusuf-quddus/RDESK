import ComplianceCard from './Compliance-Card'
import data from '../data.json'

import '../css/style.css'
import '../css/bootstrap.min.css'

const CompliancyInfo = ({scrollToSection}) => {
    return (
        <section id="compliancy" className="section">
            <div className="container">
                <div className="row"> 
                    <div className="title-box text-center">
                        <h2 className="title">Compliancy</h2>
                    </div>
                    <div className="panel-group" id="accordion">
                        {data.compliance.map(iso => 
                            <div className="card" key = {iso.name}> 
                                <ComplianceCard info={iso} scrollToSection={scrollToSection}/>
                            </div>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompliancyInfo
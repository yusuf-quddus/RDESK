import { useState } from 'react'
import '../css/style.css'
import '../css/bootstrap.min.css'

const ComplianceCard = ({name, description}) => {
    const [expanded, changeExpanded] = useState(false)
    const toggleCard = () => changeExpanded(!expanded)
    return (
        <div className="card panel panel-default" onClick={() => toggleCard()}>
            <div className="panel-heading">
                <h4 className="panel-title">
                    {name}
                </h4>
            </div>
            <div id="collapseOne" className= {expanded ? "panel-collapse show" : "panel-collapse collapse"}>
                <div className="panel-body">
                    {description}
                </div>
            </div> 
        </div>
    )
}

export default ComplianceCard
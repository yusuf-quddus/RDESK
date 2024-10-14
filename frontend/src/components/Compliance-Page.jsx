import { useState } from 'react'
import '../css/style.css'
import '../css/bootstrap.min.css'


const CompliancePage = ({iso}) => {

    return (
       <div>
            <h1>{iso['name']}</h1>
       </div>
    )
}

export default CompliancePage
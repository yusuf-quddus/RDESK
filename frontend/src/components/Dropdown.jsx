import { useState } from 'react'
import '../css/style.css'
import '../css/bootstrap.min.css'


const Dropdown = ({name, data, onClick}) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <div onMouseEnter={() => setExpanded(!expanded)} onMouseLeave={()=>setExpanded(false)}>
            <a className="nav-link dropdown-toggle" onClick = {onClick} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {name} <span className={expanded ? "up-arrow arrow" : "arrow"}></span>
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="compliancy-dropdown">
                <ul>
                    {data.map(d => (
                        <li key={d.name}><a href="">{d.name}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Dropdown
import { useState } from 'react'
import '../css/style.css'
import '../css/bootstrap.min.css'


const Dropdown = ({name, data, onClick, scrollToSection=null}) => {
    const [expanded, setExpanded] = useState(false)
    if (scrollToSection) {
      return (
          <div onMouseEnter={() => setExpanded(true)} onMouseLeave={()=>setExpanded(false)}>
              <a 
                  className="nav-link dropdown-toggle" 
                  onClick = {onClick} id="navbarDropdown" 
                  role="button" 
                  data-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded={expanded ? "true" : "false"}
              >
                  {name} <span className={expanded ? "up-arrow arrow" : "arrow"}></span>
              </a>
              {expanded && (
          <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="compliancy-dropdown">
            <ul>
              {data.map((d) => (
                <li key={d.name}>
                  <a onClick={() => scrollToSection("services")}>{d.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
        </div>
      )
    }
    return (
        <div onMouseEnter={() => setExpanded(true)} onMouseLeave={()=>setExpanded(false)}>
            <a 
                className="nav-link dropdown-toggle" 
                onClick = {onClick} id="navbarDropdown" 
                role="button" 
                data-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded={expanded ? "true" : "false"}
            >
                {name} <span className={expanded ? "up-arrow arrow" : "arrow"}></span>
            </a>
            {expanded && (
        <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="compliancy-dropdown">
          <ul>
            {data.map((d) => (
              <li key={d.name}>
                <a href={d['page-link']}>{d.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
        </div>
    )
}

export default Dropdown
import { useState } from 'react'
import data from '../../data.json'
import ITServicesCard from './ITServicesCard'
import '../../css/style.css'
import '../../css/bootstrap.min.css'


const ITServicesPanel = ({scrollToSection}) => {
 const [active, setActive] = useState("server-cloud")

 const click = (id) => {
    setActive(id)
    scrollToSection("services")
 }

  return (
    <section>
        <div className="content-tab-1">
            <ul className="nav" id="service-content">
                {data.ITServices.map(s =>(
                    <li key = {s.id} className={active == s.id ? "active services-tab" : "services-tab"} onClick={()=>click(s.id)}>
                        <a>
                            <h4>{s.name}</h4>
                        </a>
                    </li>
                ))}
            </ul>
         </div>
        {data.ITServices.map(s =>(
            <div key={s.id}>
                {(active == s.id) ? (<ITServicesCard ITService={s} scrollToSection={scrollToSection} />) : null}
            </div>
        ))}
    </section> 
  );
};

export default ITServicesPanel;

import { useState } from 'react';
import servicesData from '../../data/services.json';  
import ITServicesCard from './ITServicesCard';
import '../../css/style.css';
import '../../css/bootstrap.min.css';

/**
 * Component for clicking through IT Service Information on home page. 
 * 
 * @return {JSX.Element} - The ITServicesPanel component.
 */
const ITServicesPanel = () => {
  const [active, setActive] = useState("helpdesk");

  const click = (id) => { setActive(id); };

  return (
    <section>
      <div className="content-tab-1 btn">
        <ul className="nav" id="service-content">
          {servicesData["IT Solutions"].map(s => (
            <li key={s.id} className={active === s.id ? "active services-tab" : "services-tab"} onClick={() => click(s.id)} >
              <a> <h4>{s.name}</h4> </a>
            </li>
          ))}
        </ul>
      </div>
      {servicesData["IT Solutions"].map(s => (
        <div key={s.id}>
          {active === s.id ? ( <ITServicesCard ITService={s} /> ) : null}
        </div>
      ))}
    </section>
  );
};

export default ITServicesPanel;

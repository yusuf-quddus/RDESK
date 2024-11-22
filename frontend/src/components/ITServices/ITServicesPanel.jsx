import { useState } from 'react';
import servicesData from '../../data/services.json';  
import ITServicesCard from './ITServicesCard';
import '../../css/style.css';
import '../../css/bootstrap.min.css';

const ITServicesPanel = () => {
  const [active, setActive] = useState("server-cloud");

  const click = (id) => {
    setActive(id);
  };

  return (
    <section>
      <div className="content-tab-1 btn">
        <ul className="nav" id="service-content">
          {/* Map over IT Solutions data from services.json */}
          {servicesData["IT Solutions"].map(s => (
            <li 
              key={s.id} 
              className={active === s.id ? "active services-tab" : "services-tab"} 
              onClick={() => click(s.id)}
            >
              <a>
                <h4>{s.name}</h4>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Render the ITServicesCard component conditionally based on active tab */}
      {servicesData["IT Solutions"].map(s => (
        <div key={s.id}>
          {active === s.id ? (
            <ITServicesCard ITService={s} />
          ) : null}
        </div>
      ))}
    </section>
  );
};

export default ITServicesPanel;

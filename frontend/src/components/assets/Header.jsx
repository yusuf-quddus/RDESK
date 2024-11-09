import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import data from '../../data.json';  // Keep using data.json for contact_purpose
import services from '../../services.json';  // Use services.json for IT and Compliance Services
import Dropdown from '../Dropdown';
import '../../css/style.css';
import '../../css/bootstrap.min.css';

const Header = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActive] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const menuClick = (item) => {
    setActive(item);
    switch(item) {
      case 'home':
      case 'about':
        navigate('/', { state: { targetId: item } });
        break;
      case 'compliance':
        navigate('/compliance');
        break;
      case 'services':
        navigate('/IT_Services');
        break;
      case 'other':
        navigate('/home_services');
        break;
      case 'contact':
        navigate('/contact');
        break;
      default:
        break;
    }
  };

  return (
    <header id="header" className={isScrolled ? 'menu-bg' : 'menu-bg-transparent'}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#main-menu"
            >
              <span className="sr-only">Toggle navigation</span>
            </button>
            <div className="logo-nav">
              <a onClick={() => menuClick('home')}>
                <img src="../public/images/rdesklogo.png" alt="Company logo" />
              </a>
            </div>
            <div className="clear-toggle"></div>
            <div id="main-menu" className="collapse scroll navbar-right">
              <ul className="nav">
                <li className={activeMenu === 'home' ? 'active' : ''}>
                  <a onClick={() => menuClick('home')}>Home</a>
                </li>

                <li className={activeMenu === 'about' ? 'active' : ''}>
                  <a onClick={() => menuClick('about')}>About</a>
                </li>

                <li className={activeMenu === 'compliance' ? 'dropdown active' : 'dropdown'}>
                  <Dropdown name="Compliancy Services" data={services['Compliance Services']} onClick={() => menuClick('compliance')} />
                </li>

                <li className={activeMenu === 'services' ? 'dropdown active' : 'dropdown'}>
                  <Dropdown name="IT Services" data={services['IT Solutions']} scrollToSection={scrollToSection} onClick={() => menuClick('services')} />
                </li>

                <li className={activeMenu === 'other' ? 'active' : ''}>
                  <a onClick={() => menuClick('other')}>Other Services</a>
                </li>

                <li className={activeMenu === 'contact' ? 'active' : ''}>
                  <Dropdown 
                    name="Contact Us" 
                    data={data.contact_purpose} 
                    scrollToSection={scrollToSection} 
                    onClick={() => menuClick('contact')} 
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import data from '../../data/data.json';
import services from '../../data/services.json';
import Dropdown from './Dropdown';
import '../../css/style.css';
import '../../css/bootstrap.min.css';


/**
 * Header component for website.  
 * 
 * @return {JSX.Element} - The Header component.
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActive] = useState('home');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView();
    }
  };

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
    setMobileMenuOpen(false); // Close the mobile menu when an item is clicked
    switch(item) {
      case 'home':
        navigate('/');
        break;
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

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header id="header" className={isScrolled ? 'menu-bg btn' : 'menu-bg-transparent btn'}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="logo-nav">
              <a onClick={() => menuClick('home')}>
                <img className="btn" src="../public/images/rdesklogo.png" alt="Company logo" />
              </a>
            </div>
            <button
              type="button"
              className="navbar-toggle collapsed"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div id="main-menu" className={`navbar-right ${isMobileMenuOpen ? 'open' : ''}`}>
              <ul className="nav">
                <li className={activeMenu === 'home' ? 'active' : ''}>
                  <a onClick={() => menuClick('home')}>Home</a>
                </li>
                <li className={activeMenu === 'about' ? 'active' : ''}>
                  <a onClick={() => menuClick('about')}>About</a>
                </li>
                <li className={activeMenu === 'services' ? 'dropdown active' : 'dropdown'}>
                  <Dropdown name="IT Services" data={services['IT Solutions']} onClick={() => menuClick('services')} />
                </li>
                <li className={activeMenu === 'compliance' ? 'dropdown active' : 'dropdown'}>
                  <Dropdown name="ISO/Compliance" data={services['Compliance Services']} onClick={() => menuClick('compliance')} />
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
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation
import data from '../data.json';
import Dropdown from './Dropdown';
import '../css/style.css';
import '../css/bootstrap.min.css';

const Header = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActive] = useState('home');
  const navigate = useNavigate(); // React Router navigation hook
  const location = useLocation(); // To get the current path

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle menu click behavior based on the current page
  const menuClick = (item) => {
    setActive(item);

    // If on the main page, allow scroll to section behavior
    if (location.pathname === '/') {
      scrollToSection(item);
    } else {
      // If on ISO pages, just navigate to the main page for Home, About, and Contact
      if (item === 'home' || item === 'about' || item === 'contact') {
        navigate('/');
      }
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
                  <Dropdown name="Compliancy Services" data={data.compliance} onClick={() => menuClick('compliance')} />
                </li>

                <li className={activeMenu === 'services' ? 'dropdown active' : 'dropdown'}>
                  <Dropdown name="IT Services" data={data.ITServices} onClick={() => menuClick('services')} />
                </li>

                <li className={activeMenu === 'contact' ? 'active' : ''}>
                  <a onClick={() => menuClick('contact')}>Contact</a>
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

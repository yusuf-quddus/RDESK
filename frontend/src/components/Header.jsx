import { useState, useEffect } from 'react'
import data from '../data.json'

import '../css/style.css'
import '../css/bootstrap.min.css'


const Header = ({scrollToSection}) => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [activeMenu, setActive] = useState("home")

	useEffect(() => {
		const handleScroll = () => {
		  if (window.scrollY > 50) {
			setIsScrolled(true);
		  } else {
			setIsScrolled(false);
		  }
		}
	
		window.addEventListener('scroll', handleScroll);

		return () => {
		  window.removeEventListener('scroll', handleScroll);
		}
	}, []);

	const menuClick = (item) => {
		setActive(item)
		scrollToSection(item)
	}

    return (
        <header id="header" className={isScrolled ? "menu-bg" : "menu-bg-transparent"}>
			<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu">
								<span className="sr-only">Toggle navigation</span>
								<span className="fa fa-bars"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<div className="logo-nav">
								<a href="#">
									<img src="../public/images/rdesklogo.png" alt="Company logo" />
								</a>
							</div>
							<div className="clear-toggle"></div>
							<div id="main-menu" className="collapse scroll navbar-right">
								<ul className="nav">
									<li className={activeMenu == "home" ? "active" : ""}> <a onClick = {() => menuClick("home")}>Home</a> </li>
									
									<li className={activeMenu == "about" ? "active" : ""}> <a onClick = {() => menuClick("about")}>About</a> </li>

                                    <li className={activeMenu == "compliancy" ? "dropdown active" : "dropdown"}> 
                                        <a className="nav-link dropdown-toggle" onClick = {() => menuClick("compliancy")} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          Compliancy <span className="arrow"></span>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="compliancy-dropdown">
											<ul>
												{data.compliance.map(iso => (
													<li key={iso.name}><a href="">{iso.name}</a></li>
												))}
											</ul>
                                        </div>
                                      </li>
                                   
								    <li className={activeMenu == "services" ? "active" : ""}> <a onClick = {() => menuClick("services")}> IT Solutions</a> </li>
									<li className={activeMenu == "contact" ? "active" : ""}> <a onClick = {() => menuClick("contact")}>Contact</a> </li>	
								</ul>
							</div>
						</div>
					</div>
				</div>
		</header>
    )
}

export default Header
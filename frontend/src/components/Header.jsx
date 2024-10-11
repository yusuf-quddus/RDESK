import '../css/style.css'
import '../css/bootstrap.min.css'

import React, { useState } from 'react';


const Header = () => {
	const [isDropdownOpen, setDropdown] = useState(false)

	const toggleDropdown = () => {
		setDropdown(!isDropdownOpen)
	}

    return (
        <header id="header" className="menu-bg-transparent">
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
                                
									<li className="active"> <a href="#home">Home</a> </li>
									
									<li> <a href="#about">About</a> </li>

                                    <li className="dropdown"> 
                                        <a className="nav-link dropdown-toggle" href="#compliancy" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          Compliancy <span className="arrow"></span>
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="compliancy-dropdown">
											<ul>
													<li><a href="">option 1</a></li>
													<li><a href="">option 2</a></li>
													<li><a href="">option 3</a></li>
												</ul>
										
                                        </div>
                                      </li>
                                   
								    <li> <a href="#services"> IT Solutions</a> </li>
									<li> <a href="#contact">Contact</a> </li>	
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
    )
}

export default Header
import React from 'react';// eslint-disable-next-line 
import { BrowserRouter as Route,Link} from 'react-router-dom';

function Header() {
	return (
		<React.Fragment>
			<header class="header-navbar">
				<Link to="/" class="logo"><img src="images/logo1.png" alt="logo"/></Link>
				<input class="menu-btn" type="checkbox" id="menu-btn" />
				<label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
				<ul class="menu">
					
					<li><Link to="/"> Home </Link></li>
					<li><Link to="/about"> About Us </Link></li>
					<li><Link to="/services"> Services </Link></li>
					<li><Link to="/contact"> Contact </Link></li>
					<li><Link to="/login"> Login </Link></li>
					
				</ul>
			</header>
		</React.Fragment>
	);
}
export default Header;
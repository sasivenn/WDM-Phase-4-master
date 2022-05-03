import React, { useState } from 'react';
import Footer from './Footer';
import VisitorSidebar from './VisitorSidebar';
import VisitorChat from './VisitorChat';
import VisitorMain from './VisitorMain';
import VisitorIssues from './VisitorIssues'; // eslint-disable-next-line
import { BrowserRouter as Route,Link} from 'react-router-dom';
function VisitorHome() {
	let [ currTab, setCurrTab ] = useState('visitormain');
	return (
		<React.Fragment>
			<div id="wrapper">
			<header class="header-navbar">
			
					<Link to="/" class="logo"><img src="images/logo1.png" alt="logo"/></Link>
					<input class="menu-btn" type="checkbox" id="menu-btn" />
					<label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
					<ul class="menu">
						<li><Link to="/visitorhome"> Dashboard </Link></li>
						<li><Link to="/logout"> Logout </Link></li>
					</ul>
					
				</header>
				<section id="banner-sub">
					<div class="inner">
						<header class="major">
							<h1>Hello Visitor</h1>
						</header>
					</div>
				</section>
				{/*<!-- Main -->*/}
				<div id="main">
					<section id="one">
						<div class="inner">
							<div class="row">
								{/*<!-- Break -->*/}
								<div class="col-3 col-12-medium">
									<VisitorSidebar changeTab={setCurrTab} />
								</div>
								<div class="col-9 col-12-medium">
									<div class="row">
										<div className="visitor-tabs">
											{
												currTab === 'visitormain' && (<VisitorMain />)
											}
											{
												currTab === 'visitorchat' && (<VisitorChat />)
											}
											{
												currTab === 'visitorissues' && (<VisitorIssues />)
											}
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<Footer />
			</div>
		</React.Fragment>
	)
}
export default VisitorHome;

import React, { useState } from 'react';
import Footer from './Footer';
import UserSidebar from './UserSidebar';
import UserChat from './UserChat';
import UserMain from './UserMain';
import UserPlaceOrder from './UserPlaceOrder';
import UserIssues from './UserIssues'; // eslint-disable-next-line
import { BrowserRouter as Route,Link} from 'react-router-dom';
function UserHome() {
	let [ currTab, setCurrTab ] = useState('usermain');
	const logout = () => {
		localStorage.removeItem('uid');
		localStorage.removeItem('name');
		localStorage.removeItem('email');
		localStorage.removeItem('phone');
		localStorage.removeItem('role');
	}
	return (
		<React.Fragment>
			<div id="wrapper">
			<header class="header-navbar">
			
					<Link to="/" class="logo"><img src="images/logo1.png" alt="logo1" /></Link>
					<input class="menu-btn" type="checkbox" id="menu-btn" />
					<label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
					<ul class="menu">
						<li><Link to="/userhome"> Dashboard </Link></li>
						<li onClick={() => logout()}><Link to="/login"> Logout </Link></li>
					</ul>
					
				</header>
				<section id="banner-sub">
					<div class="inner">
						<header class="major">
							<h1>Hello User</h1>
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
									<UserSidebar changeTab={setCurrTab} />
								</div>
								<div class="col-9 col-12-medium">
									<div class="row">
										<div className="user-tabs">
											{
												currTab === 'usermain' && (<UserMain />)
											}
											{
												currTab === 'userchat' && (<UserChat />)
											}
											{
												currTab === 'userissues' && (<UserIssues />)
											}
											{
												currTab === 'userplaceorder' && (<UserPlaceOrder />)
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
export default UserHome;

import React, { useState } from 'react';
import Footer from './Footer';
import ManagerSidebar from './ManagerSidebar';
import ManagerChat from './ManagerChat';
import ManagerMain from './ManagerMain';
import ManagerCustomer from './ManagerCustomer';
import ManagerEmployee from './ManagerEmployee';
import ManagerEquipment from './ManagerEquipment';
import ManagerIssues from './ManagerIssues';
import ManagerNewOrder from './ManagerNewOrder';
import ManagerAddCustomer from './ManagerAddCustomer';
import ManagerAddEquipment from './ManagerAddEquipment';
import ManagerAddEmployee from './ManagerAddEmployee';
import ManagerContactForm from './ManagerContactForm';
import ManagerDelete from './ManagerDelete';
 // eslint-disable-next-line
import { BrowserRouter as Route, Link} from 'react-router-dom';
function ManagerHome() {
	let [ currTab, setCurrTab ] = useState('managermain');
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
							<li><Link to="/maangerhome"> Dashboard </Link></li>
							<li onClick={() => logout()}><Link to="/login"> Logout </Link></li>
						</ul>
						
					</header>
				<section id="banner-sub">
					<div class="inner">
						<header class="major">
							<h1>Hello Manager</h1>
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
									<ManagerSidebar changeTab={setCurrTab} />
								</div>
								<div class="col-9 col-12-medium">
									<div class="row">
										<div className="manager-tabs">
											{
												currTab === 'managermain' && (<ManagerMain />)
											}
											{
												currTab === 'manageremployees' && (<ManagerEmployee />)
											}
											{
												currTab === 'managerchat' && (<ManagerChat />)
											}
											{
												currTab === 'managerissues' && (<ManagerIssues />)
											}
											{
												currTab === 'managercustomers' && (<ManagerCustomer />)
											}
											{
												currTab === 'managerequipment' && (<ManagerEquipment />)
											}
											{
												currTab === 'managerneworder' && (<ManagerNewOrder />)
											}
											{
												currTab === 'manageraddcustomers' && (<ManagerAddCustomer />)
											}
											{
												currTab === 'manageraddequipment' && (<ManagerAddEquipment />)
											}
											{
												currTab === 'manageraddemployees' && (<ManagerAddEmployee />)
											}
											{
												currTab === 'managercontactform' && (<ManagerContactForm />)
											}
											{
												currTab === 'managerdelete' && (<ManagerDelete />)
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
export default ManagerHome;

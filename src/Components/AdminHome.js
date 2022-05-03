import React, { useState } from 'react';
import Footer from './Footer';
import AdminSidebar from './AdminSidebar';
import AdminChat from './AdminChat';
import AdminMain from './AdminMain';
import AdminCustomers from './AdminCustomers';
import AdminAddCustomers from './AdminAddCustomers';
import AdminNewOrder from './AdminNewOrder';
import AdminManagers from './AdminManagers';
import AdminAddManagers from './AdminAddManagers';
import AdminEquipment from './AdminEquipment';
import AdminAddEquipment from './AdminAddEquipment';
import AdminDelete from './AdminDelete';// eslint-disable-next-line 
import { BrowserRouter as Route, Link} from 'react-router-dom';
function AdminHome() {
	let [currTab, setCurrTab] = useState('adminmain');
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
					
						<li><Link to="/adminhome"> Dashboard </Link></li>
						<li onClick={() => logout()}><Link to="/login"> Logout </Link></li>
						
					</ul>
				</header>
				<section id="banner-sub">
					<div class="inner">
						<header class="major">
							<h1>Hello Admin</h1>
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
									<AdminSidebar changeTab={setCurrTab} />
								</div>
								<div class="col-9 col-12-medium">
									<div class="row">
										<div className="admin-tabs">
											{
												currTab === 'adminmain' && (<AdminMain />)
											}
											{
												currTab === 'adminneworder' && (<AdminNewOrder />)
											}
											{
												currTab === 'adminmanagers' && (<AdminManagers />)
											}
											{
												currTab === 'adminaddmanagers' && (<AdminAddManagers />)
											}
											{
												currTab === 'adminchat' && (<AdminChat />)
											}
											{
												currTab === 'admincustomers' && (<AdminCustomers />)
											}
											{
												currTab === 'adminaddcustomers' && (<AdminAddCustomers />)
											}
											{
												currTab === 'adminequipment' && (<AdminEquipment />)
											}
											{
												currTab === 'adminaddequipment' && (<AdminAddEquipment />)
											}
											{
												currTab === 'admindelete' && (<AdminDelete />)
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
export default AdminHome;

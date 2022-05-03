import React from 'react';
import Header from './Header';
import Footer from './Footer'; // eslint-disable-next-line
import { BrowserRouter as Route,Link} from 'react-router-dom';
//import {API_ENDPOINT} from '../API/api.dev';
class login extends React.Component {
	constructor() {
		super() 
		this.state = {
			username: '',
			password: '',
			emailError: '',
			passwdError: '',
		}
	}
	validateEmail (email) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return re.test(email)
	}

	clearError() {
		this.setState({emailError: '', passwdError: ''})
	}

	submitForm() {
		//let self = this;

		if(!this.validateEmail(this.state.username)) {
			this.setState({emailError: 'Email format is wrong'})
		}
		if(this.state.password.length < 4) {
			this.setState({passwdError: 'Password is too short'});
		}
	// 	setTimeout(() => {
	// 		if(this.state.emailError !== '' && this.state.passwdError !== '') {
	// 	const reqObj = {
	// 		method: 'POST',
	// 		headers: {'Content-Type': 'application/json'},
	// 		body: JSON.stringify({
	// 			username: self.state.username,
	// 			password: self.state.password
	// 		})
	// 	}
	// 	fetch(API_ENDPOINT+'/user_login.php', reqObj)
	// 	.then(res => res.json())
	// 	.then(data => {
			
	// 		console.log('data login', data);
	// 		localStorage.setItem('uid', data.id);
	// 		localStorage.setItem('name', data.name);
	// 		localStorage.setItem('email', data.email || '');
	// 		localStorage.setItem('phone', data.phone);
	// 		localStorage.setItem('role', data.type);
	// 		if(data.type.toLowerCase() === 'user')
	// 			this.props.history.push('/userhome');
	// 		else if(data.type.toLowerCase() === 'admin')
	// 			this.props.history.push('/adminhome')
	// 		else if(data.type.toLowerCase() === 'manager')
	// 			this.props.history.push('/managerhome');
	// 	})
	// }
	// 	}, 0)
		
		
	}

	setEmail() {

	}

	setPassword(passwd) {
		this.setState({
			password: passwd
		}, () => {

		})
	}
 
	validateLoginData() {
		if(!this.validateEmail(this.state.username)) {
			this.setState({emailError: 'Email format is wrong'})
		}
		if(this.state.password.length < 4) {
			this.setState({passwdError: 'Password is too short'});
		}

		if(!this.state.emailError && !this.state.passwdError) {
			this.submitForm();
			if(this.state.username === 'admin@gmail.com' && this.state.password === 'admin') this.props.history.push('/adminhome')
			if(this.state.username === 'manager@gmail.com' && this.state.password === 'manager') this.props.history.push('/manager')
			if(this.state.username === 'visitor@gmail.com' && this.state.password === 'visitor') this.props.history.push('/visitorhome')
			if(this.state.username === 'user@gmail.com' && this.state.password === 'user') this.props.history.push('/userhome')
		}
	}
	render() {
		return (
			<React.Fragment>
				{/* <!-- Wrapper --> */}
				<div id="wrapper">
					<Header />
					{/*<!-- Main --> */}
					<div id="main">
						<section >
							<div class="inner">
								<div class="row">
									<div class="col-6 col-12-small">
										<h1>Login</h1>
										<form method="POST">
											<div class="row gtr-uniform">
												<div class="col-12 col-12-xsmall">
													<input type="email" name="email" id="email" placeholder="Email" onChange={(e) => this.setState({username: e.target.value})} />
												</div>
												{/* <div> {this.state.emailError}</div> */}
												<div class="col-12 col-12-xsmall">
													<input type="password" name="password" id="password" placeholder="Password" onChange={(e) => this.setState({password: e.target.value})}/>
												</div>
												{/* <div> {this.state.passwdError}</div> */}
												<div class="col-12">
													<ul class="actions">
														<li><input type="button" value="Login" class="primary" id="loginButton" onClick={() => this.validateLoginData()}/></li>
													</ul>
												</div>
											</div>
										</form>
									</div>
									<div class="col-6 col-12-small">
										<h2>Don't have an account yet</h2>
										<ul class="actions">
									
											<li><Link to="/signup" class="button primary small">Create an account</Link></li>
										
										</ul>
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
}
export default login;
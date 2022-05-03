import React from 'react';
import { API_ENDPOINT } from "../API/api.dev";
import Header from './Header';
import Footer from './Footer'; // eslint-disable-next-line
import { BrowserRouter as Route, Link } from 'react-router-dom';
class Signup extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            address: "",
            password: ""
        }
    }
	validateEmail (email) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return re.test(email)
	}
	clearError() {
		this.setState({emailError: '', passwdError: ''})
	}
    SignUpSubmit() {
        let self = this;
        let name = this.state.name;
        let email = this.state.email;
        let phone = this.state.phone;
        let address = this.state.address;
        let password = this.state.password;
		if(!this.validateEmail(this.state.email)) {
			this.setState({emailError: 'Email format is wrong'})
		}
		if(this.state.password.length < 4) {
			this.setState({passwdError: 'Password is too short'});
		}
		if(this.state.name ==='') {
			this.setState({nameError: 'Name cannot be empty'});
		}
		if(this.state.phone.length !==10) {
			this.setState({phoneError: 'Contact number should be 10 digits'});
		}
		if(this.state.address.length ==='') {
			this.setState({addressError: 'Address cannot be empty'});
		}
		setTimeout(() => {
			if(this.state.emailError !== '' && this.state.passwdError !== '' && this.state.nameError !== '' && this.state.phoneError!== '' && this.state.addressError!==''){
				let reqOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						name, email, phone, address, password
					})
				}
				fetch(API_ENDPOINT + "/post_signup.php", reqOptions)
					.then(res => res.json())
					.then(data => {
						self.setState({
							name: "",
							email: "",
							phone: "",
							address: "",
							password: ""
						})
						this.props.history.push('/login');
					})
					.catch(err => console.log(err))
			}
		}, 0)
		

        
    }
	render() {
		return (
			<React.Fragment>
				{/* <!-- Wrapper --> */}
				<div id="wrapper">
					<Header />
					{/*<!-- Main --> */}
					<div id="main">
						<section class="spotlights">
							<div class="inner">
								<div class="row">
									<div class="col-6 col-12-medium">
										<h1>Signup</h1>
											<div class="row gtr-uniform">
												<div class="col-12 col-12-xsmall">
													<input type="text" name="name" id="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ "name": e.target.value })} />
												</div>
												<div> {this.state.nameError}</div>
												<div class="col-12 col-12-xsmall">
													<input type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ "email": e.target.value })}  />
												</div>
												<div> {this.state.emailError}</div>
												<div class="col-12 col-12-xsmall">
													<input type="tel" name="tel" id="tel" placeholder="Phone" value={this.state.phone} onChange={(e) => this.setState({ "phone": e.target.value })} />
												</div>
												<div> {this.state.phoneError}</div>
												<div class="col-12 col-12-xsmall">
													<input type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ "password": e.target.value })} />
												</div>
												<div> {this.state.passwdError}</div>
												<div class="col-12 col-12-xsmall">
													<input type="text" name="Address" id="address" placeholder="Address" value={this.state.address} onChange={(e) => this.setState({ "address": e.target.value })} />
												</div>
												<div> {this.state.addressError}</div>
												<div class="col-12">
													<ul class="actions">
                                                    <li><input type="submit" value="Sign Up" class="primary" onClick={(e) => this.SignUpSubmit(e)}/></li>
													</ul>
												</div>
											</div>
									</div>
                                    <div class="col-6 col-12-small">
										<h2>Already have an account</h2>
										<ul class="actions">
										
											<li><Link to="/login" class="button primary small">Login</Link></li>
											
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
export default Signup;
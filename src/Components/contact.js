import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { API_ENDPOINT } from "../API/api.dev";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        }
    }

    validateEmail (email) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return re.test(email)
	}

    clearError() {
		this.setState({emailError: '', passwdError: ''})
	}

    handelFormSubmit() {
        let name = this.state.name;
        let email = this.state.email;
        let message = this.state.message;

        console.log('In here');
        let reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                name, email, message
            })
        }
        fetch(API_ENDPOINT + "/post_contact_us.php", reqOptions)
        .then(res => res.json())
        .then(data => {
            console.log("data is", data);
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <React.Fragment>
                {/*<!-- Wrapper --> */}
                <div id="wrapper">
                   <Header />
                    <section id="banner-sub">
                        <div class="inner">
                            <header class="major">
                                <h1>Contact US</h1>
                            </header>
                        </div>
                    </section>
                    {/*<!-- Main --> */}
                    <div id="main">
                        <section id="contact">
                            <div class="inner">
                                <section>
                                    <div class="fields">
                                        <div class="field half">
                                            <label for="name">Name</label>
                                            <input type="text" name="name" id="name" onChange={(e) => this.setState({"name": e.target.value})} />
                                        </div>
                                        <div class="field half">
                                            <label for="email">Email</label>
                                            <input type="email" name="email" id="email" onChange={(e) => this.setState({"email": e.target.value})}/>
                                        </div>
                                        <div class="field">
                                            <label for="message">Message</label>
                                            <textarea name="message" id="message" rows="6" onChange={(e) => this.setState({"message": e.target.value})}></textarea>
                                        </div>
                                    </div>
                                    <ul class="actions">
                                        <li><input type="button" value="Send Message" class="primary" onClick={() => this.handelFormSubmit()} /></li>
                                    </ul>
                                </section>
                                <section class="split">
                                    <section>
                                        <div class="contact-method">
                                            <span class="icon solid alt fa-envelope"></span>
                                            <h3>Email</h3>
                                            <a href="mailto:washanddry@gmail.com">sasikalyan97@gmail.com</a>
                                        </div>
                                    </section>
                                    <section>
                                        <div class="contact-method">
                                            <span class="icon solid alt fa-phone"></span>
                                            <h3>Phone</h3>
                                            <a href="tel:6825619652">111111111</a>
                                        </div>
                                    </section>
                                    <section>
                                        <div class="contact-method">
                                            <span class="icon solid alt fa-home"></span>
                                            <h3>Address</h3>
                                            <span>xx street </span>
                                        </div>
                                    </section>
                                </section>
                            </div>
                        </section>
                    </div>
                    <Footer />
                </div>
            </React.Fragment>
        )
    }
}
export default Contact;

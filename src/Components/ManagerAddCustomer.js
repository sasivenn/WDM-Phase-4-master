import React from 'react';
import { API_ENDPOINT } from "../API/api.dev";
class ManagerAddCustomer extends React.Component {
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
    handelFormSubmit() {
        let self = this;
        let name = this.state.name;
        let email = this.state.email;
        let phone = this.state.phone;
        let address = this.state.address;
        let password = this.state.password;
        console.log('In here');
        let reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name, email, phone, address, password
            })
        }
        fetch(API_ENDPOINT + "/post_customers.php", reqOptions)
            .then(res => res.json())
            .then(data => {
                self.setState({
                    name: "",
                    email: "",
                    phone: "",
                    address: "",
                    password: ""
                })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <React.Fragment>
                <div class="row">
                    <div class="col-12 col-12-medium">
                        <section>
                            <div class="fields">
                                <div class="field half">
                                    <label>Name</label>
                                    <input type="text" name="name" id="name" value={this.state.name} onChange={(e) => this.setState({ "name": e.target.value })} />
                                </div>
                                <div class="field half">
                                    <label>Email</label>
                                    <input type="email" name="email" id="email" value={this.state.email} onChange={(e) => this.setState({ "email": e.target.value })} />
                                </div>
                                <div class="field half">
                                    <label>Phone</label>
                                    <input type="tel" name="phone" id="phone" value={this.state.phone} onChange={(e) => this.setState({ "phone": e.target.value })} />
                                </div>
                                <div class="field half">
                                    <label>Address</label>
                                    <input type="text" name="address" id="address" value={this.state.address} onChange={(e) => this.setState({ "address": e.target.value })} />
                                </div>
                                <div class="field half">
                                    <label>Password</label>
                                    <input type="password" name="password" id="password" value={this.state.password} onChange={(e) => this.setState({ "password": e.target.value })} />
                                </div>
                            </div>
                            <ul class="actions">
                                <li><input type="button" value="Add" class="primary" onClick={() => this.handelFormSubmit()} /></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default ManagerAddCustomer;

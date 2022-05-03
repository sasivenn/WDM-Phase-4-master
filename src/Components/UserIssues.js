import React from 'react';
import { API_ENDPOINT } from "../API/api.dev";
class UserIssues extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        }
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
        fetch(API_ENDPOINT + "/post_issues.php", reqOptions)
        .then(res => res.json())
        .then(data => {
            console.log("data is", data);
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <React.Fragment>
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
				</div>
            </React.Fragment>
        )
    }
}
export default UserIssues;

import React from 'react';
import { API_ENDPOINT } from "../API/api.dev";
class ManagerNewOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            status: ""
        }
    }
    handelFormSubmit() {
        let self = this;
        let name = this.state.name;
        let status = this.state.status;
        console.log('In here');
        let reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name, status
            })
        }
        fetch(API_ENDPOINT + "/post_equipment.php", reqOptions)
            .then(res => res.json())
            .then(data => {
                self.setState({
                    name: "",
                    status: ""
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
                                    <label for="name">Name</label>
                                    <input type="text" name="name" id="name" value={this.state.name} onChange={(e) => this.setState({ "name": e.target.value })} />
                                </div>
                                <div class="field half">
                                    <label for="status">Status</label>
                                    <input type="text" name="status" id="status" value={this.state.status} onChange={(e) => this.setState({ "status": e.target.value })} />
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
export default ManagerNewOrder;

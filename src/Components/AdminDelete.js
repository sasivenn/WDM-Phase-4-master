import React from 'react';
import { API_ENDPOINT } from "../API/api.dev";
class AdminDelete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderid: "",
        }
    }
    deleteOrder() {
        let self = this;
        let orderid = this.state.orderid;
        console.log('In here');
        let reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                orderid
            })
        }
        fetch(API_ENDPOINT + "/delete_orders.php", reqOptions)
            .then(res => res.json())
            .then(data => {
                self.setState({
                    orderid: "",
                })
            })
            .catch(err => console.log(err))
    }

    deleteEquipment() {
        let self = this;
        let equipmentid = this.state.equipmentid;
        console.log('In here');
        let reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                equipmentid
            })
        }
        
        fetch(API_ENDPOINT + "/delete_equipment.php", reqOptions)
            .then(res => res.json())
            .then(data => {
                self.setState({
                    equipmentid: "",
                })
            })
            .catch(err => console.log(err))
    }

    deleteCustomer() {
        let self = this;
        let customerid = this.state.customerid;
        console.log('In here');
        let reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                customerid
            })
        }
        
        fetch(API_ENDPOINT + "/delete_customers.php", reqOptions)
            .then(res => res.json())
            .then(data => {
                self.setState({
                    customerid: "",
                })
            })
            .catch(err => console.log(err))
    }

    deletemanager() {
        let self = this;
        let managerid = this.state.managerid;
        console.log('In here');
        let reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                managerid
            })
        }
        
        fetch(API_ENDPOINT + "/delete_managers.php", reqOptions)
            .then(res => res.json())
            .then(data => {
                self.setState({
                    managerid: "",
                })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <React.Fragment>
                <div class="row">
                    <div class="col-3 col-12-medium">
                            <div class="fields">
                                <div class="field half">
                                    <label> Order ID</label>
                                    <input type="text" name="orderid" id="orderid" value={this.state.orderid} onChange={(e) => this.setState({ "orderid": e.target.value })} />
                                </div>
                                <ul class="actions">
                                    <li><input type="button" value="Delete" class="button red" onClick={() => this.deleteOrder()} /></li>
                                </ul>
                            </div>
                    </div>
                    <div class="col-3 col-12-medium">
                        <div class="fields">
                            <div class="field half">
                                <label> Equipment ID</label>
                                <input type="text" name="equipmentid" id="equipmentid" value={this.state.equipmentid} onChange={(e) => this.setState({ "equipmentid": e.target.value })} />
                            </div>
                            <ul class="actions">
                                <li><input type="button" value="Delete" class="button red" onClick={() => this.deleteEquipment()} /></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-3 col-12-medium">
                        <div class="fields">
                            <div class="field half">
                                <label> Customer ID</label>
                                <input type="text" name="customerid" id="customerid" value={this.state.customerid} onChange={(e) => this.setState({ "customerid": e.target.value })} />
                            </div>
                            <ul class="actions">
                                <li><input type="button" value="Delete" class="button red" onClick={() => this.deleteCustomer()} /></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-3 col-12-medium">
                        <div class="fields">
                            <div class="field half">
                                <label> Manager ID</label>
                                <input type="text" name="managerid" id="managerid" value={this.state.managerid} onChange={(e) => this.setState({ "managerid": e.target.value })} />
                            </div>
                            <ul class="actions">
                                <li><input type="button" value="Delete" class="button red" onClick={() => this.deleteManager()} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default AdminDelete;

import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { API_ENDPOINT } from "../API/api.dev";

function AdminCustomer() {
	const [data, setData] = useState([]);
	const [headers, setHeaders] = useState([]);
	const [values, setValues] = useState([]);
	const [setModalData] = useState([]);
	const [show, setShow] = useState(false);
	const [modalRowIndex, setModalRowIndex] = useState(-1);
	const handleClose = () => setShow(false);
	const handleShow = (index = -1) => { setShow(true); if (index > -1) setModalRowIndex(index); }
	const [userID, setUserID] = useState("");
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPhone, setUserPhone] = useState("");
	const [userAddress, setUserAddress] = useState("");
	const [userPassword, setUserPassword] = useState("");

	const UpdateUser = (value) => {
		console.log('In here');
		let reqOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				userID, userName, userEmail, userPhone, userAddress, userPassword
			})
		}
		fetch(API_ENDPOINT + "/update_user.php", reqOptions)
			.then(res => res.json())
			.then(data => {
				console.log("data is", data);
			})
			.catch(err => console.log(err))
	}
	function getCustomers() {
		let reqOptions = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		}
		fetch(API_ENDPOINT + "/get_customers.php", reqOptions)
			.then(res => res.json())
			.then(data => {
				console.log("data is", data);
				setData(data);
			})
			.catch(err => console.log(err))
	}
	useEffect(() => {
		setModalData(values[modalRowIndex]);
		if (values[modalRowIndex] && values[modalRowIndex].length > 1) {
			setUserID(values[modalRowIndex][0])
			setUserName(values[modalRowIndex][1])
			setUserEmail(values[modalRowIndex][2])
			setUserPhone(values[modalRowIndex][3])
			setUserAddress(values[modalRowIndex][4])
			setUserPassword(values[modalRowIndex][5])
		}// eslint-disable-next-line 
	}, [modalRowIndex])
	useEffect(() => {
		getCustomers();
	}, [])
	useEffect(() => {
		let header = [];
		let values = [];
		data.forEach(value => {
			header = Object.keys(value);
			let val = Object.values(value);
			values.push(val);
		})
		setHeaders(header);
		setValues(values);
	}, [data])
	return (
		<React.Fragment>
			<div class="row">
				<div class="col-12 col-12-medium">
					<h2>Customers</h2>
					<div class="table-wrapper">
						<table>
							<thead>
								<tr>
									{
										headers.map((val, i) => {
											return <th>{val}</th>
										})
									}
									<th>Edit</th>
								</tr>
							</thead>
							<tbody>
								{values.map((val, i) => {
									return (
										<tr>
											{val.map((v, i) => {
												return <td>{v}</td>
											})}
											<td><Button variant="primary" onClick={() => handleShow(i)}>Edit</Button>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
					<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
						<Modal.Header closeButton>
							<Modal.Title>Edit</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<div class="row">
								<div class="col-9 col-12-medium">
									<div class="row gtr-uniform">
										<div class="col-12">
											<label>User Id</label>
											<input type="text" value={userID} onChange={(e) => setUserID(e.target.value)} />
										</div>
										<div class="col-12">
											<label>User Name</label>
											<input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
										</div>
										<div class="col-12 col-12-xsmall">
											<label> User Email</label>
											<input type="text" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
										</div>
										<div class="col-12 col-12-xsmall">
											<label> User Phone</label>
											<input type="text" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} />
										</div>
										<div class="col-12 col-12-xsmall">
											<label> User Address</label>
											<input type="text" value={userAddress} onChange={(e) => setUserAddress(e.target.value)} />
										</div>
										<div class="col-12 col-12-xsmall">
											<label> User Password</label>
											<input type="text" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
										</div>
										<div class="col-12">
											<ul class="actions">
												<li><input type="submit" value="Update" class="primary" onClick={(e) => UpdateUser(e)} /></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		</React.Fragment>
	)
}
export default AdminCustomer;

import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { API_ENDPOINT } from "../API/api.dev";
function AdminManagers() {
	const [data, setData] = useState([]);
	const [headers, setHeaders] = useState([]);
	const [values, setValues] = useState([]);
	const [setModalData] = useState([]);
	const [show, setShow] = useState(false);
	const [modalRowIndex, setModalRowIndex] = useState(-1);
	const handleClose = () => setShow(false);
	const handleShow = (index = -1) => { setShow(true); if (index > -1) setModalRowIndex(index); }
	const [ManagerID, setManagerID] = useState("");
	const [ManagerName, setManagerName] = useState("");
	const [ManagerEmail, setManagerEmail] = useState("");
	const [ManagerPhone, setManagerPhone] = useState("");
	const [ManagerRole, setManagerRole] = useState("");
	const [ManagerPassword, setManagerPassword] = useState("");
	const UpdateManager = (value) => {
		console.log('In here');
		let reqOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				ManagerID, ManagerName, ManagerEmail, ManagerPhone, ManagerRole, ManagerPassword
			})
		}
		fetch(API_ENDPOINT + "/update_manager.php", reqOptions)
			.then(res => res.json())
			.then(data => {
				console.log("data is", data);
			})
			.catch(err => console.log(err))
	}
	function getOrders() {
		let reqOptions = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		}
		fetch(API_ENDPOINT + "/get_manager.php", reqOptions)
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
			setManagerID(values[modalRowIndex][0])
			setManagerName(values[modalRowIndex][1])
			setManagerEmail(values[modalRowIndex][2])
			setManagerPhone(values[modalRowIndex][3])
			setManagerRole(values[modalRowIndex][4])
			setManagerPassword(values[modalRowIndex][5])
		}// eslint-disable-next-line 
	}, [modalRowIndex])
	useEffect(() => {
		getOrders();
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
					<h2>Managers</h2>
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
											<label>Manager Id</label>
											<input type="text" value={ManagerID} onChange={(e) => setManagerID(e.target.value)} />
										</div>
										<div class="col-12">
											<label>Manager Name</label>
											<input type="text" value={ManagerName} onChange={(e) => setManagerName(e.target.value)} />
										</div>
										<div class="col-12 col-12-xsmall">
											<label> Manager Email</label>
											<input type="text" value={ManagerEmail} onChange={(e) => setManagerEmail(e.target.value)} />
										</div>
										<div class="col-12 col-12-xsmall">
											<label> Manager Phone</label>
											<input type="text" value={ManagerPhone} onChange={(e) => setManagerPhone(e.target.value)} />
										</div>
										<div class="col-12 col-12-xsmall">
											<label> Manager Role</label>
											<input type="text" value={ManagerRole} onChange={(e) => setManagerRole(e.target.value)} />
										</div>
										<div class="col-12 col-12-xsmall">
											<label> Manager Password</label>
											<input type="text" value={ManagerPassword} onChange={(e) => setManagerPassword(e.target.value)} />
										</div>
										<div class="col-12">
											<ul class="actions">
												<li><input type="submit" value="Update" class="primary" onClick={(e) => UpdateManager(e)} /></li>
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
export default AdminManagers;

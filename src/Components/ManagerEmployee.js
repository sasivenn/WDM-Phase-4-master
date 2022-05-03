import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { API_ENDPOINT } from "../API/api.dev";
function ManagerEmployees() {
	const [data, setData] = useState([]);
	const [headers, setHeaders] = useState([]);
	const [values, setValues] = useState([]);
	const [setModalData] = useState([]);
	const [show, setShow] = useState(false);
	const [modalRowIndex, setModalRowIndex] = useState(-1);
	const handleClose = () => setShow(false);
	const handleShow = (index = -1) => { setShow(true); if (index > -1) setModalRowIndex(index); }
	const [EmployeeID, setEmployeeID] = useState("");
	const [EmployeeName, setEmployeeName] = useState("");
	const [EmployeeEmail, setEmployeeEmail] = useState("");
	const [EmployeePhone, setEmployeePhone] = useState("");
	const [EmployeeRole, setEmployeeRole] = useState("");
	const [EmployeePassword, setEmployeePassword] = useState("");
	const UpdateEmployee = (value) => {
		console.log('In here');
		let reqOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				EmployeeID, EmployeeName, EmployeeEmail, EmployeePhone, EmployeeRole, EmployeePassword
			})
		}
		fetch(API_ENDPOINT + "/update_employee.php", reqOptions)
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
		fetch(API_ENDPOINT + "/get_employee.php", reqOptions)
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
			setEmployeeID(values[modalRowIndex][0])
			setEmployeeName(values[modalRowIndex][1])
			setEmployeeEmail(values[modalRowIndex][2])
			setEmployeePhone(values[modalRowIndex][3])
			setEmployeeRole(values[modalRowIndex][4])
			setEmployeePassword(values[modalRowIndex][5])
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
					<h2>Employees</h2>
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
											<label>Employee Id</label>
											<input type="text" value={EmployeeID} onChange={(e) => setEmployeeID(e.target.value)} />
										</div>
										<div class="col-12">
											<label>Employee Name</label>
											<input type="text" value={EmployeeName} onChange={(e) => setEmployeeName(e.target.value)} />
										</div>
										<div class="col-12 col-12-xsmall">
											<label> Employee Email</label>
											<input type="text" value={EmployeeEmail} onChange={(e) => setEmployeeEmail(e.target.value)} />
										</div>
										<div class="col-12 col-12-xsmall">
											<label> Employee Phone</label>
											<input type="text" value={EmployeePhone} onChange={(e) => setEmployeePhone(e.target.value)} />
										</div>
										<div class="col-12 col-12-xsmall">
											<label> Employee Role</label>
											<input type="text" value={EmployeeRole} onChange={(e) => setEmployeeRole(e.target.value)} />
										</div>
										<div class="col-12 col-12-xsmall">
											<label> Employee Password</label>
											<input type="text" value={EmployeePassword} onChange={(e) => setEmployeePassword(e.target.value)} />
										</div>
										<div class="col-12">
											<ul class="actions">
												<li><input type="submit" value="Update" class="primary" onClick={(e) => UpdateEmployee(e)} /></li>
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
export default ManagerEmployees;

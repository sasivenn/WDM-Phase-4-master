import React, {useEffect, useState} from 'react';
import { API_ENDPOINT } from "../API/api.dev";

function ManagerContactForm() {
	const [data, setData] = useState([]);
	const [headers, setHeaders] = useState([]);
	const [values, setValues] = useState([]);

	function getOrders() {
		let reqOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
        }
        fetch(API_ENDPOINT + "/get_contact.php", reqOptions)
        .then(res => res.json())
        .then(data => {
            console.log("data is", data);
			setData(data);
        })
        .catch(err => console.log(err))
	}
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
					<h2>Contact Form Queries</h2>
					<div class="table-wrapper">
						<table>
							<thead>
								<tr>
									
									{
										headers.map((val, i) => {
											return <th>{val}</th>
										})
										
									}
								</tr>
							</thead>
							<tbody>
								{values.map((val, i) => {
									return (
										<tr>
											{val.map((v, i) => {
												return <td>{v}</td>
											})}
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
export default ManagerContactForm;

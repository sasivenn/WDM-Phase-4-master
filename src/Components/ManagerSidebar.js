import React, { useEffect } from 'react';



function ManagerSidebar(props) {
	useEffect(() => {
		console.log(props.changeTab)// eslint-disable-next-line 
	}, [])
	return (
		<React.Fragment>
			<div class="table-wrapper">
				<table>
					<tbody>
					<tr>
							<td onClick={() => props.changeTab('managermain')}>Summary</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('managerneworder')}>New Order</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('managerequipment')}>Equipment</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('manageraddequipment')}>Add Equipment</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('managercustomers')}>Customers</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('manageraddcustomers')}>Add Customers</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('manageremployees')}>Employees</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('manageraddemployees')}>Add employees</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('managerissues')}>Incidents</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('managercontactform')}>Contact Form</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('managerchat')}>Chat</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('managerdelete')}>Delete</td>
						</tr>

					</tbody>
				</table>
			</div>
		</React.Fragment>
	);
}
export default ManagerSidebar;
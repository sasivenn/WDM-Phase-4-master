import React, { useEffect } from 'react';

function AdminSidebar(props) {
	useEffect(() => {
		console.log(props.changeTab)// eslint-disable-next-line 
	}, [])
	return (
		<React.Fragment>
			<div class="table-wrapper">
				<table>
					<tbody>
						<tr>
							<td onClick={() => props.changeTab('adminmain')}>Summary</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('adminneworder')}>New Order</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('adminequipment')}>Equipment</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('adminaddequipment')}>Add Equipment</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('admincustomers')}>Customers</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('adminaddcustomers')}>Add Customers</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('adminmanagers')}>Managers</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('adminaddmanagers')}>Add Managers</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('admindelete')}>Delete</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('adminchat')}>Chat</td>
						</tr>
					</tbody>
				</table>
			</div>

		</React.Fragment>
	);
}
export default AdminSidebar;
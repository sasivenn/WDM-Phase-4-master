import React, { useEffect } from 'react';



function UserSidebar(props) {
	useEffect(() => {
		console.log(props.changeTab)// eslint-disable-next-line 
	}, [])
	return (
		<React.Fragment>
			<div class="table-wrapper">
				<table>
					<tbody>
						<tr>
							<td onClick={() => props.changeTab('usermain')}>Summary</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('userplaceorder')}>Place Order</td>
						</tr>
                        <tr>
							<td onClick={() => props.changeTab('userissues')}>Issues</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('userchat')}>Chat</td>
						</tr>
					</tbody>
				</table>
			</div>
		</React.Fragment>
	);
}
export default UserSidebar;
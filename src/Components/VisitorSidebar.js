import React, { useEffect } from 'react';



function VisitorSidebar(props) {
	useEffect(() => {
		console.log(props.changeTab)// eslint-disable-next-line 
	}, [])
	return (
		<React.Fragment>
			<div class="table-wrapper">
				<table>
					<tbody>
						<tr>
							<td onClick={() => props.changeTab('visitormain')}>Summary</td>
						</tr>
                        <tr>
							<td onClick={() => props.changeTab('visitorissues')}>Issues</td>
						</tr>
						<tr>
							<td onClick={() => props.changeTab('visitorchat')}>Chat</td>
						</tr>
					</tbody>
				</table>
			</div>
		</React.Fragment>
	);
}
export default VisitorSidebar;
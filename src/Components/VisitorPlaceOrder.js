import React from 'react';
function VisitorPlaceOrder() {
	return (
		<React.Fragment>
			<div class="row">
				<div class="col-12 col-12-medium">
					<h1>Schedule Drop</h1>
					<form method="post" action="#">
						<div class="row gtr-uniform">
							<div class="col-12">
								<select name="category" id="category">
									<option>Select Order</option>
									<option value="1">Order1</option>
									<option value="1">Order2</option>
									<option value="1">Order3</option>
								</select>
							</div>
							<div class="col-12 col-12-xsmall">
								<input type="text" name="Ampunt" id="Amount" placeholder="$50.35" disabled />
							</div>
							<div class="col-12 col-12-xsmall">
								<label for="name">Pickup Date</label>
								<input type="text" name="text" id="text" placeholder="10/13/2021, 09:35 PM" disabled />
							</div>
							<div class="col-6 col-12-xsmall">
								<input type="radio" id="priority-low" name="priority" />
								<label for="priority-low">Choose to deliver</label>
							</div>
							<div class="col-6 col-12-xsmall">
								<label for="name">Delivery Date</label>
								<input type="datetime-local" name="date" id="date" />
							</div>
							<div class="col-4 col-12-xsmall">
								<input type="text" name="HouseNumber" id="HouseNumber" placeholder="Apt/ House" />
							</div>
							<div class="col-8 col-12-xsmall">
								<input type="text" name="Street" id="Street" placeholder="Street" />
							</div>
							<div class="col-5 col-12-xsmall">
								<input type="text" name="City" id="City" placeholder="City" />
							</div>
							{/*<!-- Break -->*/}
							<div class="col-4">
								<select name="category" id="category">
									<option>State</option>
									<option value="1">TX</option>
									<option value="1">NY</option>
									<option value="1">OK</option>
								</select>
							</div>
							<div class="col-3 col-12-xsmall">
								<input type="text" name="Zip" id="Zip" placeholder="Zip" />
							</div>
							{/*<!-- Break -->*/}
							<div class="col-12">
								<ul class="actions">
									<li><input type="submit" value="Place Order" class="primary" /></li>
								</ul>
							</div>
						</div>
					</form>
				</div>
			</div>
		</React.Fragment>
	);
}
export default VisitorPlaceOrder;

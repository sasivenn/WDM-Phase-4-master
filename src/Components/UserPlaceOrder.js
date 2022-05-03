import React, { useState } from 'react';// eslint-disable-next-line 
import { API_ENDPOINT } from "../API/api.dev";
function UserNewOrder() {
    
    const [isDeliveryfeeDisabled, setIsDeliveryfeeDisabled] = useState(false);
    const [isServiceCostDisabled, setServiceCostDisabled] = useState(false);// eslint-disable-next-line 
    const [isTotalCostDisabled] = useState(false);// eslint-disable-next-line 
    const [setServiceType] = useState("");
    const [deliveryFee, setDeliveryFee] = useState(1);
    const [serviceCost, setServiceCost] = useState(0);
    const [weight, setweight] = useState(0);
    const [date, setDate] = useState("");
    const [selectedOption, setSelectedOption] = useState(0);
    const [deliveryOption, setDeliveryOption] = useState(0);


    const handelDelivery = (value) => {
        setDeliveryOption(value);
        setIsDeliveryfeeDisabled(false);
        setDeliveryFee(1);
        if(value === 'Pickup') {
            setIsDeliveryfeeDisabled(true);
            setDeliveryFee(0);


        } 
    }



    const handelServices = (value) => {
        setServiceCost(0)
        setSelectedOption(value);
        if(value === 'Wash + Dry') {
            setServiceCostDisabled(true);
            setServiceCost(4);
        } else if(value === 'Wash + Dry + Iron') {
            setServiceCostDisabled(true);
            setServiceCost(9);
        } else if(value === 'Iron') {
            setServiceCostDisabled(true);
            setServiceCost(5);
        }

        // setServiceType(val);
        // fetch(URL+"/get_services.php?service="+serviceType)
        // .then(res => res.json())
        // .then(val => {
            //Set the data in a state variable


        }
        const handleOrderSubmit = (value) => {
            let total = ((weight*serviceCost)+deliveryFee)
            let customerId = localStorage?.getItem('uid')
            console.log('In here');// eslint-disable-next-line 
            let reqOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    selectedOption, serviceCost, deliveryOption, date, weight, deliveryFee, total, customerId
                })
            }
            // fetch(API_ENDPOINT + "/post_orders.php", reqOptions)
            // .then(res => res.json())
            // .then(data => {
            //     console.log("data is", data);
            //     setServiceType("");//
                
            // })
            alert('Order placed successfully')
            .catch(err => console.log(err))
        }
    
	return (
		<React.Fragment>
			<div class="row">
				<div class="col-9 col-12-medium">
					<h1>Place Order</h1>
						<div class="row gtr-uniform">
                        
                        <div class="col-12">
                                <label>Service Type</label>
								<select name="ordertype" id="ordertype" onChange={(e) => handelServices(e.target.value)}>
									<option>---</option>
									<option value="Wash + Dry">Wash + Dry</option>
									<option value="Wash + Dry + Iron">Wash + Dry + Iron</option>
                                    <option value="Iron">Iron</option>
								</select>
							</div>
                            <div class="col-12 col-12-xsmall">
                            <label> Service Cost</label>
								<input type="text" name="servicecost" value={serviceCost} id="servicecost" disabled={isServiceCostDisabled} placeholder="serviceCost" />
							</div>
							<div class="col-12">
                            <label>Delivery Type</label>
								<select name="ordertype" id="ordertype" onChange={(e) => handelDelivery(e.target.value)}>
									<option>---</option>
									<option default value="Pickup">Pickup</option>
									<option value="Delivery">Delivery</option>
								</select>
							</div>
                            <div class="col-6 col-12-xsmall">  
								<label for="name">Date</label>
								<input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} name="date" id="date" />
							</div>
							<div class="col-12 col-12-xsmall">
                            <label> Weight</label>
								<input type="text" name="weight" value={weight} onChange={(e) => setweight(e.target.value)} id="weight" placeholder="Weight" />
							</div>
                            <div class="col-12 col-12-xsmall">
                            <label> Delivery Fee</label>
								<input type="text" name="deliveryfee" value={deliveryFee} id="deliveryfee" disabled={isDeliveryfeeDisabled} placeholder="Delivery Fee" />
							</div>
                            <div class="col-12 col-12-xsmall">
                            <label> Total Cost</label>
								<input type="text" name="Price" id="Price" value={((weight*serviceCost)+deliveryFee)} disabled={isTotalCostDisabled} placeholder="Price" />
							</div>
                            <div class="col-12 col-12-xsmall">
                            <label> Customer ID</label>
								<input type="text" name="customerid" disabled value={localStorage?.getItem('uid')} id="customerid"  />
							</div>
							<div class="col-12">
								<ul class="actions">
									<li><input type="submit" value="Place Order" class="primary" onClick={(e) => handleOrderSubmit(e)}/></li>
								</ul>
							</div>
						</div>
				</div>
			</div>
		</React.Fragment>
	);
}
export default UserNewOrder;

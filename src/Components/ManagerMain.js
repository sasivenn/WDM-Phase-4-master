import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { API_ENDPOINT } from "../API/api.dev";
function ManagerMain() {
    const [data, setData] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [values, setValues] = useState([]);
    
    const [setModalData] = useState([]);
    const [show, setShow] = useState(false);
    const [modalRowIndex, setModalRowIndex] = useState(-1);
    const handleClose = () => setShow(false);
    const handleShow = (index = -1) => {setShow(true); if(index>-1) setModalRowIndex(index); }


    const [serviceType, setServiceType] = useState("");
    const [deliveryType, setDeliveryType] = useState("");
    const [deliveryFee, setDeliveryFee] = useState("");
    const [serviceCost, setServiceCost] = useState("");
    const [weight, setWeight] = useState("");
    const [date, setDate] = useState("");
    const [totalCost, setTotalCost] = useState("");
    const [customerID, setCustomerID] = useState("");
    const [orderID, setOrderID] = useState("");



        const UpdateOrder = (value) => {
            console.log('In here');
            let reqOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    orderID, serviceType, serviceCost, deliveryType, date, weight, deliveryFee, totalCost, customerID
                })
            }
            fetch(API_ENDPOINT + "/update_orders.php", reqOptions)
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
        fetch(API_ENDPOINT + "/get_orders_admin.php", reqOptions)
            .then(res => res.json())
            .then(data => {
                console.log("data is", data);
                setData(data);
                setModalData(values[modalRowIndex]);
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        setModalData(values[modalRowIndex]);
        if(values[modalRowIndex] && values[modalRowIndex].length>1) {
            setOrderID(values[modalRowIndex][0])
            setServiceType(values[modalRowIndex][1])
            setServiceCost(values[modalRowIndex][2])
            setDeliveryType(values[modalRowIndex][3])
            setDate(values[modalRowIndex][4])
            setWeight(values[modalRowIndex][5])
            setDeliveryFee(values[modalRowIndex][6])
            setTotalCost(values[modalRowIndex][7])
            setCustomerID(values[modalRowIndex][8])}// eslint-disable-next-line 
    }, [modalRowIndex])

    useEffect(() => {
        getOrders();// eslint-disable-next-line 
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
                    <div class="row">
                        <div class="col-12 col-12-medium">
                            <h2>All Orders</h2>
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
                                                    <label>Order Id</label>
                                                    <input type="text" value={orderID} onChange={(e) => setOrderID(e.target.value)}/>
                                                </div>
                                                <div class="col-12">
                                                    <label>Service Type</label>
                                                    <input type="text" value={serviceType} onChange={(e) => setServiceType(e.target.value)}/>
                                                </div>
                                                <div class="col-12 col-12-xsmall">
                                                    <label> Service Cost</label>
                                                    <input type="text" value={serviceCost} onChange={(e) => setServiceCost(e.target.value)}/>
                                                </div>
                                                <div class="col-12">
                                                    <label>Delivery Type</label>
                                                    <input type="text" value={deliveryType} onChange={(e) => setDeliveryType(e.target.value)} />
                                                </div>
                                                <div class="col-6 col-12-xsmall">
                                                    <label for="name">Date</label>
                                                    <input type="text" value={date} onChange={(e) => setDate(e.target.value)}/>
                                                </div>
                                                <div class="col-12 col-12-xsmall">
                                                    <label> Weight</label>
                                                    <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
                                                </div>
                                                <div class="col-12 col-12-xsmall">
                                                    <label> Delivery Fee</label>
                                                    <input type="text" value={deliveryFee} onChange={(e) => setDeliveryFee(e.target.value)} />
                                                </div>
                                                <div class="col-12 col-12-xsmall">
                                                    <label> Total Cost</label>
                                                    <input type="text" value={totalCost} onChange={(e) => setTotalCost(e.target.value)}/>
                                                </div>
                                                <div class="col-12 col-12-xsmall">
                                                    <label> Customer ID</label>
                                                    <input type="text" value={customerID} onChange={(e) => setCustomerID(e.target.value)} />
                                                </div>
                                                <div class="col-12">
                                                    <ul class="actions">
                                                        <li><input type="submit" value="Update" class="primary" onClick={(e) => UpdateOrder(e)} /></li>
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
                </div>
            </div>
        </React.Fragment>
    )
}
export default ManagerMain;

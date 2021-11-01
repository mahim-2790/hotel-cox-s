import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SingleOrder from '../SingleOrder/SingleOrder';
const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://frozen-tundra-41468.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className="mt-4 py-5">
            <Container>
                <h1 className="text-center customized-text-color">All Orders</h1>
                <hr />
                {
                    orders.map(order => <SingleOrder key={order._id} orderInfo={order}></SingleOrder>)
                }
            </Container>

        </div>
    );
};

export default ManageAllOrder;
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import SingleMyOrder from '../SingleMyOrder/SingleMyOrder';
const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://frozen-tundra-41468.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
    }, [])
    const myOrders = orders.filter(order => user.email === order.email)
    console.log(myOrders)
    return (
        <Container className="my-4 pt-5">
            <h1 className="text-center customized-text-color">My Order</h1>
            {
                myOrders.map(myorder => <SingleMyOrder key={myorder._id} myorder={myorder}></SingleMyOrder>)
            }
        </Container>
    );
};

export default MyOrder;
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SingleOrder = (props) => {
    const { _id, name, email, address, city, phone, sName, img, description, price, status } = props.orderInfo;

    const [orders, setOrders] = useState([]);
    const [updateOrder, setUpdateOrder] = useState({});

    useEffect(() => {
        const url = `https://frozen-tundra-41468.herokuapp.com/orders/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdateOrder(data))
    }, []);



    useEffect(() => {
        fetch('https://frozen-tundra-41468.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleUpdateStatus = (_id) => {
        axios.put(`https://frozen-tundra-41468.herokuapp.com/order/${_id}`, {
            status: 'Approved'
        })
            .then(response => {
                alert('Updated Successfully')
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to Delete? ');
        if (proceed) {
            const url = `https://frozen-tundra-41468.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                        alert("data is deleted");
                    }
                })
        }
    }


    return (
        <div className="row gx-4 my-5 border border-3 p-4 rounded rounded-3 shadow-lg">
            <div className="col-lg-4 col-sm-12">
                <h4>User's Information</h4>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>City: {city}</p>
                <p>Address: {address}</p>
                <p>Phone: {phone}</p>
            </div>
            <div className="col-lg-8 col-sm-12">
                <h4>Product Info</h4>
                <div className="row">
                    <div className="col-sm-8">
                        <h6>Product's Name : {sName}</h6>
                        <p>About Product : {description}</p>
                        <p>Price : {price}</p>
                        <p>Status : {status}</p>
                    </div>
                    <div className="col-sm-4">
                        <img src={img || 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'} className="img-fluid rounded rounded-3 shadow-lg" alt="" />
                    </div>
                </div>

            </div>
            <div className="col-sm-12 text-center">
                {
                    status === 'pending' && <button onClick={() => handleUpdateStatus(_id)} className="btn btn-outline-success m-2">Approve</button>
                }
                <button onClick={() => handleDelete(_id)} className="btn btn-outline-danger m-2">Delete</button>
            </div>
        </div>
    );
};

export default SingleOrder;
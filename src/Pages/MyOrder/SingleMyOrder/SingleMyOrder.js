import React, { useEffect, useState } from 'react';

const SingleMyOrder = (props) => {
    console.log(props.myorder)
    const { _id, name, email, address, city, phone, sName, img, description, price, status } = props.myorder;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://frozen-tundra-41468.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
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
        <div>
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
                            <p>Status: {status}</p>
                        </div>
                        <div className="col-sm-4">
                            <img src={img || 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'} className="img-fluid rounded rounded-3 shadow-lg" alt="" />
                        </div>
                    </div>

                </div>
                <div className="col-sm-12 text-center">
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline-danger m-2">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleMyOrder;
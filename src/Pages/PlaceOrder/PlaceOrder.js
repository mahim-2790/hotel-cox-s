import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'
import { useParams } from 'react-router';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

const PlaceOrder = () => {
    const [service, setService] = useState({});
    const { register, handleSubmit, reset, formState: { errors }, setFocus } = useForm();
    const { user } = useAuth();
    const { _id } = useParams();
    console.log(useParams());
    useEffect(() => {
        const url = `https://frozen-tundra-41468.herokuapp.com/services/${_id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    service.status = 'pending';
    // console.log(service)
    const dollar = <FontAwesomeIcon icon={faDollarSign} />

    const onSubmit = data => {
        axios.post('https://frozen-tundra-41468.herokuapp.com/order', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Room Booked");
                    reset();
                }
                else {
                    alert("Did not submitted");
                }
            })
    };
    React.useEffect(() => {
        setFocus("sName");
    }, [setFocus]);
    return (
        <div className="mt-5 pt-5">
            <h1 className="text-center">Place Your order</h1>
            <form className="shipping-form my-5 border border-2 text-center" onSubmit={handleSubmit(onSubmit)}>
                <h2>Service Information</h2>
                <div className="col">
                    <div className="card h-100">
                        <img src={service.img} className="card-img-top rounded rounded-3" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{service.title}</h5>
                            <hr />
                            <p className="card-text text-muted">{service.description}</p>
                            <p className="customized-text-color">Price :{dollar} {service.price} </p>
                            <p>Bed type: {service.bedType}</p>
                            <p>Max guest: {service.maxGuest}</p>
                            <p>Max area: {service.area}</p>
                            <p>Bed type: {service.bedType}</p>
                        </div>
                        <div className="card-footer text-center">

                        </div>
                    </div>
                </div>
                <div className="">
                    <input defaultValue={service.title} {...register("sName")} />
                    <input defaultValue={service.description} {...register("description")} />
                    <input defaultValue={service.img} {...register("img")} />
                    <input defaultValue={service.price} {...register("price")} />
                    <input placeholder="status" defaultValue={service.status} {...register("status")} />
                </div>
                <hr />
                <h2>User's Information </h2>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email")} />
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="Phone" defaultValue="" {...register("phone")} />
                <hr />
                <input type="submit" />
            </form>
        </div>
    );
};

export default PlaceOrder;
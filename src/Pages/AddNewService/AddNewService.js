import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
// import { useHistory } from 'react-router';
import './AddNewService.css'
const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    // const history = useHistory()
    const onSubmit = data => {
        console.log(data);
        axios.post('https://frozen-tundra-41468.herokuapp.com/addServices', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Insertion was successful");
                    // history.push('http://localhost:3000/myOrder')
                    reset();
                }
            })
    }
    return (
        <div className="mt-3 pt-5 addService">
            <h1 className="customized-text-color text-center">Add new Service</h1>
            <hr className="w-75 mx-auto" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Enter service name" {...register("title")} />
                <textarea placeholder="Enter Description" {...register("description")} className="mb-3" />
                <input placeholder="Price" {...register("price")} />
                <input placeholder="Enter img url" {...register("img")} />
                <input placeholder="Number of guest can hos" {...register("maxGuest")} />
                <input placeholder="Size of bedroom" {...register("area")} />
                <input placeholder="Type of bed" {...register("bedType")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddNewService;
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const dollar = <FontAwesomeIcon icon={faDollarSign} />
    const { _id, title, img, description, price } = props.service;
    console.log(_id);

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top rounded rounded-3 h-50" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <hr />
                    <p className="card-text text-muted">{description}</p>
                    <p className="customized-text-color">Price :{dollar} {price} </p>
                </div>
                <div className="card-footer text-center">
                    <Link to={`/placeOrder/${_id}`}><button className="btn btn-outline-danger">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
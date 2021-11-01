import { faClipboardCheck, faGlobe, faHandHoldingUsd, faLightbulb, faMapMarked, faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Iframe from 'react-iframe';

const MapAndFAQ = () => {

    const { register } = useForm();
    return (
        <div id="faqAndMap" className="my-3 pt-4">
            <h1 className="customized-text-color">Contact</h1>
            <Container className="my-5 rounded rounded-3 p-5 shadow-lg">
                <Row>
                    <Col xs={12} lg={6}>
                        {/* Map Location  */}
                        <Container className="h-100 ">
                            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.37497982838!2d91.93286137834087!3d21.450883578607165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1635785740412!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></Iframe>
                        </Container>


                    </Col>
                    <Col xs={12} lg={6}>
                        <form onSubmit="" className="d-flex flex-column">
                            <input className="form-control mb-3" placeholder="Enter your name" {...register("title")} />
                            <input className="form-control mb-3" placeholder="Enter your email" {...register("title")} />
                            <input className="form-control mb-3" placeholder="Enter querys" {...register("query")} />
                            <input className="form-control" type="submit" />
                        </form>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default MapAndFAQ;
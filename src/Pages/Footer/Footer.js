import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <Container>
                <footer className="row align-items-center justify-content-center mt-5 g-4">
                    <div className="col-sm-12 col-lg-4">
                        <h3 className="customized-text-color">Hotel Cox's</h3>
                        <p>We are providing high quality accommodation since 1983. It is our grate pleasure to host our guest we love to have you guys. Welcome to Hotel Cox's for your great vacation.</p>
                    </div>
                    <div className="col-sm-12 col-lg-4 ">
                        <div className="d-flex flex-column">
                            <h3 className="customized-text-color">Useful Links</h3>
                            <Link to="">About us</Link>
                            <Link>Rules And Regulation</Link>
                            <Link>Places to travel</Link>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <h3 className="customized-text-color">Contact Us</h3>
                        <p>25, Cox's Bazar, Chatragram</p>
                        <p>Phone: 096684567</p>
                        <p>Email: contact@hotelcox's.com</p>
                    </div>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;
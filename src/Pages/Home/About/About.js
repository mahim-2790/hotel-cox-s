import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../../images/download.jpg'
import './About.css'
const About = () => {

    return (
        <Container className="my-3 pt-5" id="about">
            <div className="p-4">
                <h2 className="text-center customized-text-color">ABOUT US</h2>
                <hr />
                <div className="row align-items-center">
                    <div className="col-lg-6 col-sm-12 pt-2">

                        <p>Hotel Cox's is a member of Bangladesh-listed UOL Group Limited, one of Asia’s most established hotel and property companies with an outstanding portfolio of investment and development properties.</p>
                        <p>Voted “Best Regional Hotel Chain” by readers in Asia from 2017 to 2020, Hotel Cox's</p>

                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <img src={img} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;
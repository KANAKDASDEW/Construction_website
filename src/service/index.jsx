import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import image1 from "../image/img/1.jpg";
import image2 from "../image/img/2.jpg";
import image3 from "../image/img/3.jpg";
import image4 from "../image/img/4.jpg";
import image5 from "../image/img/5.jpg";
import image6 from "../image/img/6.jpg";
import "./service.css";

const Service = () => {
    return (
        <>
            <div className="service_part1">
                <Container>
                    <Row>
                        <Col sm={10} className="service_part11">
                            <h4> START PLANNING YOUR NEW DREAM HOME WITH US</h4>
                            <p>
                                WE STRIVE TO PROVIDE OUR CUSTOMERS WITH TOP
                                NOTCH SUPPORT TO MAKE THEIR THEME
                            </p>
                        </Col>
                        <Col sm={2} className=" button">
                            <Button variant="success">Start Now</Button>{" "}
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col sm={12} className="service_part2 ">
                        <h1>Some of Our Services</h1>
                        <p>
                            We offer variety of services including Home A/C
                            Cleaning Servicing, Carpentry <br />
                            Flooring, Plumbing, Electrician, Home Painting,
                            Garden Pool Servicing and other house
                            <br />
                            repair services in Dubai.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} className="service_part3 ">
                        <div class="feature-box media-box">
                            <div class="fbox-media ">
                                <img  style={{ width:'400px'}}
                                    class="rounded"
                                    src={image1}
                                    alt="Why choose Us?"
                                />
                            </div>
                            <div class="fbox-content px-0">
                                <h3>Interior Designing</h3>
                                <p>
                                    We believe that every client we meet is
                                    unique and individual – so our interior
                                    designs can never be the same too
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4} className="service_part3 ">
                        <div class="feature-box media-box">
                            <div class="fbox-media">
                                <img style={{ width:'400px'}}
                                    class="rounded"
                                    src={image2}
                                    alt="Why choose Us?"
                                />
                            </div>
                            <div class="fbox-content px-0">
                                <h3>RENOVATION OF APARTMENT</h3>
                                <p>
                                    Renovate your home in the way you like it by
                                    our experienced, qualified, and professional
                                    team.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4} className="service_part3 ">
                        <div class="feature-box media-box">
                            <div class="fbox-media">
                                <img style={{ width:'400px'}}
                                    class="rounded"
                                    src={image3}
                                    alt="Why choose Us?"
                                />
                            </div>
                            <div class="fbox-content px-0">
                                <h3>CARPENTRY AND FLOORING</h3>
                                <p>
                                    If you require new floor, fixing the kitchen
                                    cabinets or building a brand new patio, we
                                    can do it all.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} className="service_part3 ">
                        <div class="feature-box media-box">
                            <div class="fbox-media">
                                <img style={{ width:'400px'}}
                                    class="rounded"
                                    src={image4}
                                    alt="Why choose Us?"
                                />
                            </div>
                            <div class="fbox-content px-0">
                                <h3>Interior Designing</h3>
                                <p>
                                    We believe that every client we meet is
                                    unique and individual – so our interior
                                    designs can never be the same too
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4} className="service_part3 ">
                        <div class="feature-box media-box">
                            <div class="fbox-media">
                                <img style={{ width:'400px'}}
                                    class="rounded"
                                    src={image5}
                                    alt="Why choose Us?"
                                />
                            </div>
                            <div class="fbox-content px-0">
                                <h3>RENOVATION OF APARTMENT</h3>
                                <p>
                                    Renovate your home in the way you like it by
                                    our experienced, qualified, and professional
                                    team.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={4} className="service_part3 ">
                        <div class="feature-box media-box">
                            <div class="fbox-media">
                                <img style={{ width:'400px'}}
                                    class="rounded"
                                    src={image6}
                                    alt="Why choose Us?"
                                />
                            </div>
                            <div class="fbox-content px-0">
                                <h3>CARPENTRY AND FLOORING</h3>
                                <p>
                                    If you require new floor, fixing the kitchen
                                    cabinets or building a brand new patio, we
                                    can do it all.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Service;

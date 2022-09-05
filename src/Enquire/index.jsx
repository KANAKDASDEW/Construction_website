import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import image1 from "../image/img/bottom-trust.jpg";

import { Nav, Navbar } from "react-bootstrap";
import "./Enquire.css";

const Enquire = () => {
    return (
        <>
            <div className="Enquire">
                <Container>
                    <Row>
                        <Col sm={12} className="Enquire1">
                            <span>
                                <Nav.Link
                                    style={{
                                        marginBottom: "40px",
                                        marginTop: "40px",
                                        fontSize: "25px",
                                        letterSpacing: "2px",
                                    }}
                                >
                                    {" "}
                                    Would you like to Build your Dream Home with
                                    Us? <strong>Enquire Here</strong>{" "}
                                    <i class="icon-angle-right"></i>
                                </Nav.Link>{" "}
                            </span>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div class="container ">
                <div className="row">
                    <div class="col-sm-7 col-md-7">
                        <img style={{ width:'650px'}} src={image1} />
                    </div>

                    <div class="col-lg-5 e">
                        <div class="heading-block ">
                            <h2>You're in Good Hands.</h2>
                            <span class="ls1">
                                Five Points that define Our Reliability.
                            </span>
                        </div>

                        <ul class="iconlist iconlist-large iconlist-color">
                            <li style={{ marginTop: "40px", fontSize: "20px" }}>
                                <i class="bi bi-arrow-right"></i> Market Leader
                                since 1915
                            </li>
                            <li style={{ marginTop: "10px", fontSize: "20px" }}>
                                <i class="bi bi-arrow-right"></i> Positive
                                Results within Deadlines
                            </li>
                            <li style={{ marginTop: "10px", fontSize: "20px" }}>
                                <i class="bi bi-arrow-right"></i> 100%
                                Reliability &amp; Guarantee
                            </li>
                            <li style={{ marginTop: "10px", fontSize: "20px" }}>
                                <i class="bi bi-arrow-right"></i> Dedicated
                                Professional Team of 500+
                            </li>
                            <li style={{ marginTop: "10px", fontSize: "20px" }}>
                                <i class="bi bi-arrow-right"></i> Unmatched
                                After Project Completion Support
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Enquire;

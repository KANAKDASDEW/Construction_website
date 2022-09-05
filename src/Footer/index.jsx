import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import image1 from "../image/business_patner/1.png";
import image2 from "../image/business_patner/2.png";

import { Nav, Navbar } from "react-bootstrap";
import "./footer_part.css";

const Footer = () => {
    return (
        <>
            <div className="footer_part">
                <Container>
                    <Row>
                        <Col sm={4} className="Footer">
                            <div className="Footerimage">
                                <h1> Our Business Partner</h1>
                                <img
                                    style={{
                                        width: "150px",
                                        marginRight: "40px",
                                        marginBottom: "40px",
                                    }}
                                    src={image1}
                                />
                                <img
                                    style={{
                                        width: "150px",
                                        marginRight: "40px",
                                        marginBottom: "40px",
                                    }}
                                    src={image2}
                                />
                            </div>
                        </Col>
                        <Col sm={4} className="Footer2">
                            <div className="location">
                                <h2>
                                    Locations
                                </h2>
                                #217, Al Attar Shopping Center​, 16 Kuwait
                                Street, <br />
                                ​Al Karama, Bur Dubai, Dubai, UAE
                            </div>
                        </Col>
                        <Col sm={4} className="Footer3">
                            <div className="location">
                                <h2>
                                Contract with Us
                                </h2>
                                <abbr title="Phone Number"><strong>Phone:</strong></abbr> (+971) 43706689 <br/><abbr title="Mobile Number"><strong>Mobile:</strong></abbr>(+971) 5440008406 <br/>

                                <abbr title="Email Address"><strong>Email:</strong></abbr> info@bustantechnical.com
                            </div>
                        </Col>
                      
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Footer;

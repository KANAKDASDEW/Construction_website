import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "react-bootstrap/Button";
import imgagee from "../image/img/parallax.jpg"
import image from "../image/slider/1.jpg";
import image1 from "../image/slider/1.jpg";
import image2 from "../image/slider/2.jpg";
import image3 from "../image/slider/3.jpg";
import icon1 from "../image/icons/building.png";
import icon2 from "../image/icons/bank.png";
import icon3 from "../image/icons/drawer.png";
import icon4 from "../image/icons/paint-brush.png";
import icon5 from "../image/icons/paper-money.png";
import icon6 from "../image/icons/traffic-cone.png";


import { Nav, Navbar } from "react-bootstrap";
import Navar from "../Navar";
import Header from "../Header";
import Service from "../service";
import Footer from "../Footer";
import "./Main_About.css";

const MainAbout = () => {
    return (
        <>
            <Navar />
            <Header />

            <div className="serviceimage">
                <img
                    style={{
                        width: "100%",
                        height: "300px",
                        position: "relative",
                    }}
                    src={image}
                />
                <h1
                    style={{
                        position: "absolute",
                        top: "270px",
                        marginLeft: "50px",
                        color: "white",
                    }}
                >
                    WHAT WE DO
                </h1>
                <p
                    style={{
                        position: "absolute",
                        top: "320px",
                        marginLeft: "50px",
                        color: "white",
                    }}
                >
                    A Short Page Title Tagline
                </p>
            </div>
            <Container className=" about_part">
                <Row>
                    <Col sm={6} className="AboutMain">
                        <h3>WHAT WE DO</h3>
                        <br />
                        <p>
                            Bustan Al Neel Technical Services is a full-service
                            property maintenance partnership with a vision to
                            ethically and professionally provide high-quality
                            property maintenance services to homeowners, real
                            estate investors, and property management companies,
                            with a focus on personal attention.
                        </p>
                        <br />
                        <p>
                            Our heritage is hospitality and serviced apartments
                            and we leverage on our experience, competence,
                            customer service as well as on expertise of our
                            dedicated team.
                        </p>
                        <p>
                            Our philosophy is that in this line of work only by
                            providing the highest quality maintenance service we
                            can aim for your trust and integrity. At the end of
                            the day our reputation is the only thing that makes
                            us (or break us).
                        </p>
                        <p>
                            We also believe that highest quality should not cost
                            you arms and legs, and by our common-sense approach
                            to any work we make sure affordability of our
                            services.
                        </p>
                        <Button variant="success">Learn More</Button>
                    </Col>
                    <Col sm={6} className="AboutMain2">
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    src={image1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>
                                        Nulla vitae elit libero, a pharetra
                                        augue mollis interdum.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    src={image1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>
                                        Nulla vitae elit libero, a pharetra
                                        augue mollis interdum.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    src={image1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>
                                        Nulla vitae elit libero, a pharetra
                                        augue mollis interdum.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    src={image1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>
                                        Nulla vitae elit libero, a pharetra
                                        augue mollis interdum.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                    className="d-block w-100"
                                    src={image2}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                        Praesent commodo cursus magna, vel
                                        scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={4}>
                        <div className="imageabout">
                            <img 
                                style={{ height:'500px'}}
                                className="d-block w-100"
                                src={imgagee}
                                alt="Third slide"
                            />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div class="fbox-icon">
                            <a href="#">
                                <img style={{ width: "65px" }} src={icon1} />
                            </a>
                        </div>
                        <div class="fbox-content">
                            <h3>Concrete Developments</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Autem minima, facere
                                distinctio placeat.
                            </p>
                        </div>
                        <div class="fbox-icon">
                            <a href="#">
                                <img style={{ width: "65px" }} src={icon2} />
                            </a>
                        </div>
                        <div class="fbox-content">
                            <h3>Finance Assistance</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Autem minima, facere
                                distinctio placeat.
                            </p>
                        </div>
                        <div class="fbox-icon">
                            <a href="#">
                                <img style={{ width: "65px" }} src={icon3} />
                            </a>
                        </div>
                        <div class="fbox-content">
                            <h3>Smart Builders</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Autem minima, facere
                                distinctio placeat.
                            </p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div class="fbox-icon">
                            <a href="#">
                                <img style={{ width: "65px" }} src={icon4} />
                            </a>
                        </div>
                        <div class="fbox-content">
                            <h3>Concrete Developments</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Autem minima, facere
                                distinctio placeat.
                            </p>
                        </div>
                        <div class="fbox-icon">
                            <a href="#">
                                <img style={{ width: "65px" }} src={icon5} />
                            </a>
                        </div>
                        <div class="fbox-content">
                            <h3>Finance Assistance</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Autem minima, facere
                                distinctio placeat.
                            </p>
                        </div>
                        <div class="fbox-icon">
                            <a href="#">
                                <img style={{ width: "65px" }} src={icon6} />
                            </a>
                        </div>
                        <div class="fbox-content">
                            <h3>Quality Infrastructure</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Autem minima, facere
                                distinctio placeat.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Service />
            <Footer />
        </>
    );
};

export default MainAbout;

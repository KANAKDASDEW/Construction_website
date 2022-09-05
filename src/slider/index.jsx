import Carousel from "react-bootstrap/Carousel";
import image from "../image/1.jpg";
import image2 from "../image/2.jpg";
import image3 from "../image/3.jpg";
import "./slider.css";
function CarouselFadeExample() {
    return (
        <section className="slider">
            <Carousel fade>
                <Carousel.Item style={{ height: "500px" }}>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <div>
                            <h2>
                                Welcome to{" "}
                                <span class="he-text">
                                    {" "}
                                    Bustan Al Neel Technical Services
                                </span>{" "}
                            </h2>
                            <p class="d-none d-sm-block">
                                We guarantee you that our professionals will
                                perform excellent work, and give you quality
                                work.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "500px" }}>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div>
                            <h2>
                                Welcome to{" "}
                                <span class="he-text">
                                    {" "}
                                    Bustan Al Neel Technical Services
                                </span>{" "}
                            </h2>
                            <p class="d-none d-sm-block">
                                We guarantee you that our professionals will
                                perform excellent work, and give you quality
                                work.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ height: "500px" }}>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <div>
                            <h2>
                                Welcome to{" "}
                                <span class="he-text">
                                    {" "}
                                    Bustan Al Neel Technical Services
                                </span>{" "}
                            </h2>
                            <p class="d-none d-sm-block">
                                We guarantee you that our professionals will
                                perform excellent work, and give you quality
                                work.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default CarouselFadeExample;

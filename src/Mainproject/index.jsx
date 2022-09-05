import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "../Header";

import image from "../image/slider/1.jpg";
import { Nav } from "react-bootstrap";

import Navar from "../Navar";
import Service from "../service";
import "./mainproject.css";
import Footer from "../Footer";
import Footer1 from "../Footer1";

const MainProject = () => {
    return (
        <>
            <Navar />
            <Header />

            <div className="serviceimage">
                <img style={{ width:'100%',height:'300px',position:'relative'}} src={image} />
                <h1 style={{position:'absolute',  top:'270px' ,marginLeft:'50px',color:'white'}}>WHAT WE DO</h1>
                <p style={{position:'absolute',  top:'320px' ,marginLeft:'50px',color:'white'}} >A Short Page Title Tagline</p>
            </div>

            <Service />
            <Footer />
            <Footer1/>
        </>
    );
};

export default MainProject;

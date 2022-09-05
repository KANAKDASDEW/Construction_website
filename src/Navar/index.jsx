import React from "react";
import image from "../image/Kd.jpg"

import "./navar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaBold, FaCheck } from "react-icons/fa";


const Navar = () => {
  const isActive = {
    fontWeight: "bold",

    backgroundColor: "#64ffda",
  };         
  return (
    <React.Fragment>
    <>
      <Navbar collapseOnSelect expand="md" variant="dark" className="nav-conatiner">
        <Navbar.Brand as={Link} to="/">
          <div className="img-container">
            <img className="w-50" src={image} alt="" srcset="" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ml-auto ">
            <Nav.Link className="ho" activeStyle={isActive} as={NavLink} to="/home">
            <FontAwesomeIcon style={{ color:'red'}} icon= {FaBold} /> 
            <div class="he-text">
									Home<br/>
								
								</div>
            </Nav.Link>
            <Nav.Link >
								<div class="he-text">
									Call Us <br/>
                 
								<span > <FontAwesomeIcon style={{ color:'red'}} icon= {FaBold} /> 	(+971) 43706689 </span>
                 
								</div>
                </Nav.Link>
            <Nav.Link activeStyle={isActive} as={NavLink} to="/" >
            <div class="he-text">
									Email Us <br/>
									<span>info@bustantechnical.com</span>
								</div>
              
            </Nav.Link>
            <Nav.Link  className="ho" activeStyle={isActive} as={NavLink} to="/contact">
            <div class="he-text">
									We'are Open <br/>
									<span>Mon - Sat, 10AM to 6PM</span>
								</div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </>
   
    </React.Fragment>
    
  );
};

export default Navar;
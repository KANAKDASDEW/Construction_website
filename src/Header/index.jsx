import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <>
            <div className="nav_bar ">
                <div className="nav container">
                    <div className="logo">
                        
                    </div>
                    <div className="main_menu">
                        <ul className='menu'>
                            <li className='nav-item'><Link className='nav-link'  to="/">Home </Link></li>
                            <li className='nav-item'><Link className='nav-link' to="/service_part">Service</Link></li>
                            <li className='nav-item' href="#about" ><Link className='nav-link' to='/about_part' >About Us</Link></li>
                            <li className='nav-item'><Link className='nav-link' to="/project">Project</Link></li>
                            <li className='nav-item'><Link className='nav-link' to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="resister_account">
                       
                    </div>
                    <div className="app_bar">
                        <i className="fa fa-bars"></i> 
                    </div>
                </div>
            </div>
            
        </>

    );
};

export default Header;
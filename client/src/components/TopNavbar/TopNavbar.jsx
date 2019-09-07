import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logout from '../authComponents/Logout';


const TopNavbar = (props) => {
    return(
        <Navbar className="shadow-sm" collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Link className="navbar-brand" to="/">Raport Online</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto text-center">
            {props.routes.map((route, index) => (
                <Link className="nav-link" key={index} to={route.path}>{route.name}</Link>
            ))}
        </Nav>
        <Nav className="ml-auto text-center">
            <Logout/>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

export default TopNavbar;
import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logout from '../authComponents/Logout';


const TopNavbar = (props) => {
    return(
        <Navbar className="shadow-sm" collapseOnSelect expand="lg" bg="gray" variant="light">
        <button onClick={props.toggle} className="bg-transparent border-0 mr-2" variant="light"><i style={{fontSize:20}} className="fas fa-ellipsis-v text-secondary border px-3 py-2 rounded-circle"></i></button>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Link to="/menu" className="nav-link">Menu</Link>
        </Nav>
        <Nav>
            <Logout/>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

export default TopNavbar;
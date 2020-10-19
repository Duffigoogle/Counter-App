import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="#home">My Counter App</Navbar.Brand>
                    {/* <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav> */}
                </Navbar>
            </React.Fragment>
        );
    }
};

export default NavBar

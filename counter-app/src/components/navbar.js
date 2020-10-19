import React, { Component } from 'react';
import {Container, Navbar} from 'react-bootstrap';

class NavBar extends Component {
    render() {
        return (
            <div className='Nav'>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">My Counter App</Navbar.Brand>
                    </Container>
                </Navbar>
            </div>
        );
    }
};

export default NavBar

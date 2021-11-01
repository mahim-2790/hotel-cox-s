import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={NavLink} to="/home" className="fw-bold">Cox's</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        {
                            user.email ? <div className="d-flex flex-warp">
                                <Nav.Link as={NavLink} to="/bookedroom">My Room</Nav.Link>
                                <Nav.Link as={NavLink} to="/manageroom">Manage Service</Nav.Link>
                                <Nav.Link as={NavLink} to="/addservice">Add Service</Nav.Link>
                                <div className="d-flex align-items-center">
                                    <span className="mx-2 text-dark">{user.displayName}</span>
                                    <button onClick={logOut} className="btn btn-outline-danger">Log Out</button>
                                </div>
                            </div> : <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                        }

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
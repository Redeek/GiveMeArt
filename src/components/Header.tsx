import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FiMenu, FiHeart} from 'react-icons/fi'
import {BsPerson, BsCart2} from 'react-icons/bs'

export const Header = () => {


    return (
        <Navbar 
            bg="light" 
            data-bs-theme="light"
        >
            <Container>
                <Nav>
                    <Nav.Link> 
                        <h2> 
                            <FiMenu/> 
                        </h2>
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#liked"> 
                        <h2> 
                            <FiHeart />
                        </h2> 
                    </Nav.Link>
                    <Nav.Link href="#cart"> 
                        <h2> 
                            <BsCart2 /> 
                        </h2>  
                    </Nav.Link>
                    <Nav.Link href="#person"> 
                        <h2> 
                            <BsPerson />
                        </h2> 
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
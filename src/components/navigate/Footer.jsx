import React from "react";
import { Navbar, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer
            style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                backgroundColor: "#343a40",
            }}>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#">Footer</Navbar.Brand>
                    <Link>
                        <Button variant="dark">Main contact</Button>
                    </Link>
                </Container>
            </Navbar>
        </footer>
    );
};

export default Footer;

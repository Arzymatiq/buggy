import { Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Link to="/">
                    <Navbar.Text href="#">Navbar with text</Navbar.Text>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Link to="/create">
                            <Button variant="dark">add User</Button>
                        </Link>
                        <Link to="/list">
                            <Button
                                variant="dark"
                                style={{ marginLeft: "20px" }}>
                                List User
                            </Button>
                        </Link>

                        <Link to="/favorites">
                            <Button
                                // type=""
                                variant="dark"
                                style={{ marginLeft: "20px" }}>
                                favorites
                            </Button>
                        </Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;

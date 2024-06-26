import { Navbar, Nav, Container, NavDropdown, Badge, Form, DropdownButton, Dropdown, Button, InputGroup, } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
const HeaderComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>

                <LinkContainer to="/">
                    <Navbar.Brand href="/">Airashi Adorable</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav>
                            <InputGroup>
                                <DropdownButton id="dropdown-basic-button" title="All">
                                    <Dropdown.Item> Electronics </Dropdown.Item>
                                    <Dropdown.Item> Cars </Dropdown.Item>
                                    <Dropdown.Item> Books </Dropdown.Item>

                                </DropdownButton>
                                <Form.Control type="text" placeholder="Search in Shop..." />
                                <Button variant="warning">
                                    <i className="bi bi-search-heart"></i>
                                </Button>
                            </InputGroup>
                        </Nav>
                        <Nav>
                            <LinkContainer to="/adminorderspage">
                                <Nav.Link>
                                    Admin
                                    <span className="position-absolute top-1 start-10 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
                                </Nav.Link>
                            </LinkContainer>

                            <NavDropdown title="Antora Amir " id="collasible-nav-dropdown">
                                <NavDropdown.Item eventKey="/user/my-orders" as={Link} to="/userorderpage">My orders</NavDropdown.Item>
                                <NavDropdown.Item eventKey="/user/my-orders" as={Link} to="/userprofile">My profile</NavDropdown.Item>
                                <NavDropdown.Item >Logout </NavDropdown.Item>
                            </NavDropdown>
                            <LinkContainer to="/login">
                                <Nav.Link> Login  </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/register">
                                <Nav.Link> Register </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    <Badge pill bg="danger">
                                        2
                                    </Badge>
                                    CART

                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default HeaderComponent; 
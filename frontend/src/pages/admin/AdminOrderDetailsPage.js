import { Row, Col, Container, Form, Alert, ListGroup, ListGroupItem, Button} from "react-bootstrap";
import CartItemComponent from '../../components/CartItemComponent'
const AdminOrderDetailsPage = () => {
    return (
        <Container fluid>
            <Row className="mt-4">
                <h1>Order Details</h1>
                <Col md={8}>
                    <br />
                    <Row>
                        <Col md={6}>
                            <h2>Shipping</h2>
                            <b>Name</b>:Antora Amir <br />
                            <b>Address</b>: Mirpur Dhaka <br />
                            <b>Phone number</b>:016532489
                        </Col>
                        <Col md={6}>
                            <h2>Payment method</h2>
                            <Form.Select disabled={false}>
                                <option value="pp">
                                    paypal
                                </option>
                                <option>
                                    Cash On Delivery (delivery may be delayed)
                                </option>

                            </Form.Select>
                        </Col>
                        <Row>
                            <Col>
                                <Alert className="mt-3" variant="danger">
                                    Not delivered
                                </Alert>
                            </Col>
                            <Col>
                                <Alert className="mt-3" variant="success">
                                    paid 2022.05.12
                                </Alert>
                            </Col>
                        </Row>
                    </Row>
                    <br />
                    <h2>Order items</h2>
                    <ListGroup variant="flush">
                        {Array.from({ length: 3 }).map((item, idx) => (
                            <CartItemComponent key={idx} />
                        ))}
                    </ListGroup>


                </Col>
                <Col md={4}>
                    <ListGroup>
                        <ListGroupItem>
                            <h3>Order summary</h3>
                        </ListGroupItem>
                    </ListGroup>

                        <ListGroupItem>
                           Items price (after tax): <span className="fw-bold">$892</span>
                        </ListGroupItem>

                        <ListGroupItem>
                           Shipping: <span className="fw-bold">included</span>
                        </ListGroupItem>

                        <ListGroupItem>
                           Tax: <span className="fw-bold">included</span>
                        </ListGroupItem>

                        <ListGroupItem className="text-danger">
                           Total price: <span className="fw-bold">$562</span>
                        </ListGroupItem>
                        <ListGroupItem>
                            <div className="d-grid gap-2">
                            <Button size="lg" variant="danger" type="Button">
                             Mark as delivered
                           </Button>
                            </div>
                           
                        </ListGroupItem>
                    
                    

                </Col>

            </Row>
        </Container>
    )
}
export default AdminOrderDetailsPage;
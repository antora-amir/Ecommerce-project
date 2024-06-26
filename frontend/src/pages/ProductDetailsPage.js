import { List } from '@material-ui/core';
import { Col, Container, Row, Image, Alert, Button, ListGroup, Form, } from 'react-bootstrap';
import { Rating } from "react-simple-star-rating";
import AddedToCartMessageComponent from "../components/user/AddedToCartMessageComponent";
import ImageZoom from 'js-image-zoom';
import { useEffect } from 'react';
const ProductDetailsPage = () => {
    var options = {
        scale: 2,
        offset: { vertical: 0, horizontal: 10 },
    }
    useEffect(() => {
        new ImageZoom(document.getElementById("first"),options)
        new ImageZoom(document.getElementById("second"),options)
        new ImageZoom(document.getElementById("third"),options)
        new ImageZoom(document.getElementById("fourth"),options)
        new ImageZoom(document.getElementById("fifth"),options)
        new ImageZoom(document.getElementById("sixth"),options)
    })
    return (
        <Container>
            <AddedToCartMessageComponent />
            <Row className="mt-5">
                <Col style={{ zIndex: 1 }} md={4}>
                    <div id="first">
                        <Image crossOrigin="anonymous " fluid src="/images/Carousel/Tablets.jpg" />
                    </div>
                    <br />

                    <div id="second">
                        <Image fluid src="/images/Carousel/Monitors.jpg" />
                    </div>
                    <br />

                    <div id="third">
                        <Image fluid src="/images/Carousel/Games.jpg" />
                    </div>
                    <br />

                    <div ide="fourth">
                        <Image fluid src="/images/Carousel/Printers.jpg" />
                    </div>
                    <br />

                    <div id="fifth">
                        <Image fluid src="/images/Carousel/Software-category.jpg" />
                    </div>
                    <br />

                    <div id="sixth">
                        <Image fluid src="/images/Carousel/Camera.jpg" />
                    </div>
                    <br />

                </Col>
                <Col md={8}>
                    <Row>
                        <Col md={8}>
                            <ListGroup variant="flush">
                                <ListGroup.Item><h1>Product name</h1> </ListGroup.Item>
                                <ListGroup.Item><Rating readonly size={20} initialValue={4} /> (1)</ListGroup.Item>
                                <ListGroup.Item>Price <span className='fw-bold'>$345</span></ListGroup.Item>
                                <ListGroup.Item> </ListGroup.Item>

                            </ListGroup>
                        </Col>
                        <Col md={4}> <ListGroup>
                            <ListGroup.Item>Status: in stock</ListGroup.Item>
                            <ListGroup.Item>Price: <span className='fw-bold'>$345</span></ListGroup.Item>
                            <ListGroup.Item>
                                Quantity:
                                <Form.Select size="lg" aria-label="Default select example">
                                    <option>1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="3">4</option>
                                </Form.Select>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button variant="danger">Add to cart</Button>
                            </ListGroup.Item>

                        </ListGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mt-5'>
                            <h5>REVIEWS</h5>
                            <ListGroup variant="flush">
                                {Array.from({ length: 10 }).map((item, idx) => (
                                    <ListGroup.Item key={idx}>Azzamm <br />
                                        <Rating readonly size={20}
                                            initialValue={4} />
                                        <br />
                                        20-10-2001 <br />
                                        Today, most of these reviews exist online but may also appear in print media. Consumers read product reviews to help them make important purchasing decisions .
                                    </ListGroup.Item>
                                ))}



                            </ListGroup>
                        </Col>
                    </Row>
                    <hr />
                    send review form
                    <Alert variant="danger">Login first to write a review</Alert>
                    <Form>
                        <Form.Group className="mb-3"
                            controlId='exampleForm.ControlInput1'>
                            
                            <Form.Label>Write a review</Form.Label>
                            <Form.Control as="textarea" row={3} />

                        </Form.Group>
                        <Form.Select aria-label='Default select example'>
                            <option>Your rating</option>
                            <option value="5">5 (very good)</option>
                            <option value="4">4 (good)</option>
                            <option value="3">3 (average)</option>
                            <option value="2">2 (bad)</option>
                            <option value="1">1 (awful)</option>
                        </Form.Select>
                        <Button variant="primary">Submit </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default ProductDetailsPage;







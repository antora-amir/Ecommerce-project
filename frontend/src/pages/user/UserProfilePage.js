import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap"
import { useState } from "react";

const UserProfilePage = () => {
    const [validated, setValidated] = useState(false);

    const onChange = () => {
        const password = document.querySelector("input[name=password]")
        const confirm = document.querySelector("input[name=confirmpassword]")
        if (confirm.value === password.value) {
            confirm.setCustomValidity("")
        }
        else {
            confirm.setCustomValidity("passwords do not match")
        }
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Container>
            <Row className="mt-5 justify-content-md-center">
                <Col md={6}>
                    <h1>User Profile</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="validationCustom01">
                            <Form.Label>Enter your name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                defaultValue="Antora"
                                name="name"

                            />
                            <Form.Control.Feedback type="invalid">Please enter a name</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label>Your last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                defaultValue="Amir"
                                name="lastName"
                            />
                            <Form.Control.Feedback type="invalid">Please enter your last name</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address </Form.Label>
                            <Form.Control
                                disabled
                                value="antora20@gmail.com if you want to change email,remove account and create new one with new email address"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your phone number"
                                defaultValue=""
                            />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your street name and house number"
                                defaultValue=""
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCountry">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your country"
                                defaultValue=""
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicZip">
                            <Form.Label> Zip Code</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your Zip code"
                                defaultValue=""
                            />
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your city"
                                defaultValue=""
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicState">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your State"
                                defaultValue=""
                            />
                        </Form.Group>





                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password </Form.Label>
                            <Form.Control
                                name="Password"
                                required
                                type="Password"
                                placeholder=" Enter Password"
                                minLength={6}
                                onChange={onChange}
                            />
                            <Form.Control.Feedback type="invalid">Please enter a valid Password</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
                            <Form.Label> Repeat  Password </Form.Label>
                            <Form.Control
                                name=" confirmPassword"
                                required
                                type="Password"
                                placeholder=" Repeat Password"
                                minLength={6}
                                onChange={onChange}
                            />
                            <Form.Control.Feedback type="invalid">Both passwords should match</Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit">

                            update</Button>
                        <Alert show={true} variant="danger">
                            User with that email already exixts!
                        </Alert>
                        <Alert show={true} variant="info">
                            User updated
                        </Alert>
                    </Form>
                </Col>

            </Row>
        </Container>
    )
}
export default UserProfilePage;
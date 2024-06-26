import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap"
import { useState } from "react";
import { Link } from "react-router-dom"
import { Spinner } from "react-bootstrap";

const LoginPage = () => {
    const [validated, setValidated] = useState(false);

    const onChange = () => {
        const password = document.querySelector("input[name=password]")
        const confirm = document.querySelector("input[name=confirmpassword]")
    if(confirm.value === password.value){
    confirm.setCustomValidity("")
    }
    else{
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
                    <h1>Login</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                       

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address </Form.Label>
                            <Form.Control
                                name="email"
                                required
                                type="email"
                                placeholder=" Enter email"
                            />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password </Form.Label>
                            <Form.Control
                                name="Password"
                                required
                                type="Password"
                                placeholder=" Enter Password"
                                
                            />
                            <Form.Control.Feedback type="invalid">Please enter a valid Password</Form.Control.Feedback>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        
                            <Form.Check
                                name="DonotLogout"
                                
                                type="Checkbox"
                                label="Do not Logout"
                                
                                
                            />
                            <Form.Control.Feedback type="invalid">Please enter a valid Password</Form.Control.Feedback>
                        </Form.Group>

                        <Row className="pb-2">
                            <Col>
                                Don't you have an account?
                                <Link to={"/register"}> Register </Link>
                            </Col>
                        </Row>

                        <Button variant="primary" type="submit">
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                         Login
                            </Button>
                        <Alert show={true} variant="danger">
                            Wrong credentials
                        </Alert>
                      
                    </Form>
                </Col>

            </Row>
        </Container>
    )
}
export default LoginPage;
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";


const AdminEditUserPage = () => {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    }
    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md={1}>
                    <Link to="/admin/products" className="btn btn-info my-3">Go Back </Link>
                </Col>
                <Col md={6}>
                    <h1> Edit User</h1>
                    <Form noValidate Validated={validated} noSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control name="first name" required type="text" defaultValue="Antora" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicLastName" >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control name="last name" required type="text" rows={3} defaultValue="Amir" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" required type="email" defaultValue="antora20@gmail.com" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check name="isAdmin" type="checkbox" label="Is admin" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Create
                        </Button>
                    </Form>
                </Col>

            </Row >
        </Container >
    )
}
export default AdminEditUserPage;
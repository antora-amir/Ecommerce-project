import { Row, Col, Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent"
const AdminProductsPage = () => {
    return (
        <Row className="m-5">
            <Col md={2}>
                <AdminLinksComponent />

            </Col>

            <Col md={10}>
                <h1>Product List{" "}
                    <LinkContainer to="/admincreateproductspage">
                        <Button variant="primary" size="lg">
                            create new
                        </Button>
                    </LinkContainer>
                </h1>

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[{ name: "Redmi", price: "$300", category: "Phone" }, { name: "Asus", price: "$521", category: "Laptops" }, { name: "GTA 10", price: "$514", category: "Games" },].map((item, idx) => (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <td>
                                    <LinkContainer to="/admin/edit-product">
                                        <Button className="btn-sm">
                                            <i className="bi bi-pencil-square"></i>
                                        </Button>
                                    </LinkContainer>
                                    {" / "}
                                    <Button variant="danger" className="btn-sm">
                                        <i className="bi bi-x-circle-fill"></i>
                                    </Button>

                                </td>
                                <td>PayPal</td>
                                <td>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>

    )
}
export default AdminProductsPage;
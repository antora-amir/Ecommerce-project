import { Row, Col, Table,Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminLinksComponent from "../../components/admin/AdminLinksComponent";
const deleteHandler = () => {
    if(window.confirm("Are you sure?")) alert("User deleted!");
}
const AdminUserPage = () => {
    return (
        <Row className="m-5">
            <Col md={2}>
                <AdminLinksComponent />

            </Col>

            <Col md={10}>
                <h1>user list</h1>

                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th>Is admin</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {["bi bi-check2-circle", "bi bi-x-circle-fill"].map((item, idx) => (
                            <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td>Azman</td>
                                <td>Begum</td>
                                <td>email@email.com</td>
                                <td>
                                    <i className={item}></i>
                                </td>
                                <td>
                                    <LinkContainer to="/adminedituserpage">
                                        <Button className="btn-sm">
                                            <i className="bi bi-pencil-square"></i>
                                        </Button>
                                    </LinkContainer>
                                    {" / "}
                                    <Button variant="danger" className="btn-sm" onClick={deleteHandler}>
                                        <i class="bi bi-x-circle-fill"></i>

                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>

    )
}
export default AdminUserPage;
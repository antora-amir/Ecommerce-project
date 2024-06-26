import { Row, Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom"
const UserOrderPage = () => {
    return (
        <Row className="m-5">
            <Col md={12}>
                <h1>My orders</h1>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User</th>
                            <th>Date</th>
                            <th>Total</th>
                            <th>Delivered</th>
                            <th>Order details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {["bi bi-check2-circle", "bi bi-x-circle-fill"].map((item, idx) => (
                            <tr key={idx}>
                                <td>{idx +1}</td>
                                <td>Azman</td>
                                <td>2022-09-12</td>
                                <td>$124</td>
                                <td>
                                    <i className={item}></i>
                                    


                                </td>
                                <td>
                                    <Link to="/userorderdetails">go to order</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>

    )
}
export default UserOrderPage;
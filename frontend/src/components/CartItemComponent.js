
import { ListGroupItem, Row, Col, Image, Form,Button } from "react-bootstrap";

const CartItemComponent = () => {
    return (
        <>
            <ListGroupItem>
                <Row>
                    <Col md={2}>
                        <Image crossOrigin="anonymous" fluid src="/images/Carousel/Monitors.jpg" />
                    </Col>
                    <Col md={2}>
                        logotech series <br />
                        Gaming mouse
                    </Col>
                    <Col md={2}>
<b>$89</b>
                    </Col>
                    <Col md={3}>
<Form.Select>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
</Form.Select>
                    </Col>
                    <Col md={3}>
                        <Button type="button" variant="secondary" onClick={() => 
                        window.confirm("Are yor sure?")}>
                            <i className="bi bi-trash"></i>
                        </Button>

                    </Col>
                </Row>
            </ListGroupItem>
            <br />
        </>
    )
}
export default CartItemComponent;
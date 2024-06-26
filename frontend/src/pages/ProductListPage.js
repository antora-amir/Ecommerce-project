import { Row, Col, ListGroup, Container, Button} from "react-bootstrap";

import PriceFilterComponent from "../components/filterQueryResultOptions/PriceFilterComponent";
import SortOptionsComponent from "../components/user/SortOptionsComponent";
import RatingFilterComponent from "../components/RatingFilterComponent";
import ProductForListComponent from "../components/user/ProductForListComponent";
import PaginationComponent from "../components/user/PaginationComponent";
import CategoryFilterComponent from "../components/filterQueryResultOptions/CategoryFilterComponent";
import AttributesFilterComponent from "../components/filterQueryResultOptions/AttributesFilterComponent";

const ProductListPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="mb-3 mt-3"><SortOptionsComponent /> </ListGroup.Item>
                        <ListGroup.Item> FILTER:<br/><PriceFilterComponent /></ListGroup.Item>
                        <ListGroup.Item><RatingFilterComponent /></ListGroup.Item>
                        <ListGroup.Item><CategoryFilterComponent /></ListGroup.Item>
                        <ListGroup.Item><AttributesFilterComponent /></ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant="primary">Filter</Button>
                            <Button variant="danger">Reset filters</Button>
                        </ListGroup.Item>
                    </ListGroup>


                </Col>
                <Col md={9}>
                    {Array.from({length:5}).map((_,idx)=>(
                        <ProductForListComponent key={idx}
                        images={["Tablets","Monitors","Games","Printers","Software-category","Camera","Books"]}
                        idx={idx}
                        />
                    ))}
                    
                    <PaginationComponent />

                </Col>
            </Row>
        </Container>
    )

}

export default ProductListPage;
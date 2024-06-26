import {Card, Button,Row,Col} from "react-bootstrap";
import{Rating} from "react-simple-star-rating"; 
import { LinkContainer } from "react-router-bootstrap";


const ProductForListComponent= ({images,idx}) => {
    return (
<Card style={{ marginTop: "30px",marginTop:"50px" }}>

  <Row>
    <Col lg={5}>
    <Card.Img 
    crossOrigin="anonymous"
    variant="top" src={"/images/" +
  images[idx] + "-category.png"} />
    {/* <Card.Img variant="top" src={"/images/Tablets-category.png"} /> */}
    </Col>
    <Col lg={7}>
    <Card.Body>
        <Card.Title>Product Name Redmi phone</Card.Title>
        <Card.Text>
         Product Description 
        </Card.Text>
        <Card.Text>
          <Rating readonly size={20}
          initialValue={5}
          />
        </Card.Text>
        <Card.Text className="h4">
          $123{" "}
          <LinkContainer to="/product-details">
        
        <Button variant="danger">See product</Button>
        </LinkContainer>
        </Card.Text>
      </Card.Body>
    </Col>
  </Row>
      
      
    </Card> 
    )
}
export default ProductForListComponent;
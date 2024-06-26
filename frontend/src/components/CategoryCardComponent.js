import { Card, Button, } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const CategoryCardComponent = ({ category, idx }) => {
  const images = [
    "/images/Carousel/Tablets.jpg",
    "/images/Carousel/Monitors.jpg",
    "/images/Carousel/Games.jpg",
    "/images/Carousel/Printers.jpg",
    "/images/Carousel/Software-category.jpg",
    "/images/Carousel/Camera.jpg",
    "/images/Carousel/Books.jpeg",
    "/images/Carousel/Video.jpg",



  ]
  return (
    <Card>
      <Card.Img
        crossOrigin="anonymous"
        variant="top"
        src={images[{idx}]}
      />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <LinkContainer to="/product-list">
          <Button variant="primary">Go to the Category</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;
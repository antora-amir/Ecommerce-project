import { Carousel } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
const ProductCarouselComponent = () => {
  const cursorP = {
    cursor:"pointer"
  }
  return (

    <Carousel>
      <Carousel.Item>
        <img
          crossOrigin="anonymous"
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
          src="/images/Carousel/u.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Bestseller in scenery Category</h3>

          </LinkContainer>

          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        crossOrigin="anonymous"
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}

          src="/images/Carousel/a.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Bestseller in Birds Category</h3>

          </LinkContainer>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        crossOrigin="anonymous"
          className="d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}

          src="/images/Carousel/book.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <LinkContainer style={cursorP} to="/product-details">
            <h3>Bestseller in Books Category</h3>

          </LinkContainer>


          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProductCarouselComponent; 
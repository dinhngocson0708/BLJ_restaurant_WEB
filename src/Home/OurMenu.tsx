import { useState } from "react";
import { Col, Row, Button, Carousel, CarouselItem } from "react-bootstrap";
import "./OurMenu.css";

const OurMenu = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="ourmenu" style={{ backgroundColor: "#F8F8FF" }}>
      <Row className="row-ourmenu">
        <Col md={5} className="infor1">
          <div className="p-4">
          Our Menu
          <Col className="infor2">
            Find your favorite food! We are very pleased to welcome you as guests in our restaurant.
          </Col>
          <Button variant="outline-danger" href="/ourmenu">See more</Button>
          </div>
         
        </Col>
        <Col className="p-0">
          <Carousel>
            <CarouselItem>
              <div
                className={`carousel-item-container ${hovered ? "hover" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg" alt="image" className="carousel-item-image" />
                <div className="carousel-item-info">
                  <h3>Deep Dish Pizza</h3>
                  <p>A delicious deep-dish pizza with a thick crust and savory toppings.</p>
                  <p>Price : 10$</p>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div
                className={`carousel-item-container ${hovered ? "hover" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src="https://www.tasteatlas.com/images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg" alt="image"className="carousel-item-image" />
                <div className="carousel-item-info">
                  <h3>Authentic Sushi</h3>
                  <p>Enjoy fresh and authentic sushi with a variety of flavors and textures.</p>
                  <p>Price : 10$</p>
                </div>
              </div>
            </CarouselItem>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default OurMenu;

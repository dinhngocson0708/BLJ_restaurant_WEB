import React, { useState } from "react";
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
      <Row style={{ marginLeft: "150px",  }}>
        <Col md={5} style={{ fontSize: "50px", fontWeight: "700" }}>
          Our Menu
          <Col style={{ fontSize: "22px", fontWeight: "100" }}>
            Find your favorite food! We are very pleased to welcome you as guests in our restaurant.
          </Col>
          <Button variant="outline-danger" style={{ width: '40%' }}>See more</Button>
        </Col>
        <Col>
          <Carousel>
            <CarouselItem>
              <div
                className={`carousel-item-container ${hovered ? "hover" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg" alt="" className="carousel-item-image" />
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
                <img src="https://www.tasteatlas.com/images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg" alt="" className="carousel-item-image" />
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

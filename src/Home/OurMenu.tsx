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
  const isMediumScreen = window.matchMedia("(min-width: 46.25em) and (max-width: 63.9375em)").matches;
  return (
    <div className="ourmenu" style={{ backgroundColor: "#F8F8FF",fontFamily:'Poppins, sans-serif' }}>
      <Row className="row-ourmenu">
        <Col md={isMediumScreen ? 12 : 5}>
          <h3 className="infor1">Our Menu</h3>
          <br />
          <Col>
            <h6 className="infor2">Find your favorite food! We are very pleased to <br /> welcome you as guests in our restaurant.</h6>
          </Col> <br /><br />
          <Button style={{width:'30%'}} className="btn" variant="outline-danger" href="/ourmenu">See more</Button>
        </Col>
        <Col>
          <Carousel>
            <CarouselItem>
              <div
                className={`carousel-item-container ${hovered ? "hover" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaSRnYalS8xJskrn2UcxS-MDvsqUtWOJtIhg&usqp=CAU" alt="image" className="carousel-item-image" />
                <div className="carousel-item-info">
                  <h3>Deep Dish Pizza</h3>
                  <hr></hr>
                  <p>A delicious deep-dish pizza with a thick crust and savory toppings.</p>
                  <b>10$</b>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div
                className={`carousel-item-container ${hovered ? "hover" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src="https://www.tasteatlas.com/images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg" alt="image" className="carousel-item-image" />
                <div className="carousel-item-info">
                  <h3>Authentic Sushi</h3>
                  <hr></hr>
                  <p>Enjoy fresh and authentic sushi with a variety of flavors and textures.</p>
                  <b>10$</b>
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

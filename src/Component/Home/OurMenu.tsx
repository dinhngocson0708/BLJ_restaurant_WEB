import { Col, Row, Button, Carousel, CarouselItem } from "react-bootstrap";

const OurMenu = () => {
  return (
    <div className="ourmenu" style={{ backgroundColor: "#F8F8FF" }}>
      <Row style={{ marginLeft: "150px", padding: "50px" }}>
        <Col md={5} style={{ fontSize: "50px", fontWeight: "700" }}>
          Our Menu
          <Col style={{ fontSize: "22px", fontWeight: "100" }}>
            Find your favorite food! We are very pleased to welcome you as guests in our restaurant.
          </Col>
          <Button variant="outline-danger" style={{width:'40%'}}>See more</Button>
        </Col>,
        <Col>
          <Carousel>
            <CarouselItem>
              <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg" alt="" style={{ objectFit: "cover", width: "100%", height: "300px" }} />
            </CarouselItem>
            <CarouselItem>
              <img src="https://www.tasteatlas.com/images/toplistarticles/08c818739e4b48ce96d319c16f4cc0ca.jpg" alt="" style={{ objectFit: "cover", width: "100%", height: "300px" }} />
            </CarouselItem>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default OurMenu;

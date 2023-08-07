import { useState } from "react";
import { Col, Row, Carousel, CarouselItem } from "react-bootstrap";
import "./OurMenu.css";
import { PrismicImage, PrismicRichText, useAllPrismicDocumentsByType } from "@prismicio/react";

const OurMenu = () => {
  const [food] = useAllPrismicDocumentsByType('our_menu');
  const [inforRes] = useAllPrismicDocumentsByType('restaurantinfo')
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const isMediumScreen = window.matchMedia("(min-width: 46.25em) and (max-width: 63.9375em)").matches;
  return (
    <div className="ourmenu" style={{ backgroundColor: "#F8F8FF", fontFamily: 'Poppins, sans-serif' }}>
      <Row className="row-ourmenu">
        <Col md={isMediumScreen ? 12 : 5}>
          <h3 className="infor1">Our Menu</h3>
          <br />
          <Col>
            {inforRes?.map(function (el) {
              return <h6 className="infor2"><PrismicRichText field={el.data.ourmenudescription} /></h6>
            })
            }
          </Col> <br /><br />
          <a href="/ourmenu" style={{ textDecoration: "none" }}>
            <button className="glow-on-hover" type="button" style={{ outline: '1px solid #E33539' }}><span style={{ color: '#ff656a' }}>See more</span></button>
          </a>
        </Col>
        <Col>
          <Carousel>
            {food?.map((el, index) => {
              if (el.data.bestseller === true) {
                return (
                  <CarouselItem key={index}>
                    <div
                      className={`carousel-item-container ${hovered ? "hover" : ""}`}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <PrismicImage className="carousel-item-image" field={el.data.image}/>
                      <div className="carousel-item-info">
                        <h3><PrismicRichText field={el.data.name} /></h3>
                        <hr></hr>
                        <p><PrismicRichText field={el.data.desc} /></p><br />
                         <p>$ <PrismicRichText field={el.data.price}/></p> 
                      </div>
                    </div>
                  </CarouselItem>
                );
              }
              return null;
            })}
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default OurMenu;

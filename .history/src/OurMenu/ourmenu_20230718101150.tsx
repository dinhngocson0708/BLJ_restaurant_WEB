import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "./data";
import Layout from "../Layout";
import "./ourmenu.css";
import { Link } from "react-router-dom";
const Ourmenu = () => {
  interface MenuItem {
    id: number;
    img: string;
    title: string;
    desc: string;
    price: number;
  }
  const riceData = data.filter((item) => item.category === "Cơm");
  const chickenData = data.filter((item) => item.category === "Gà");
  const familyData = data.filter((item) => item.category === "family");
  const waterData = data.filter((item) => item.category === "nước");
  return (
    <div>
      <Layout>
        <img
          src="https://get.ringameal.com/App_Themes/Template04/img/bgHeaderPage.jpg"
          width="100%"
        />
        <Container>
          <Row>
            <h4 className="category-name">CHICKEN</h4>
            {chickenData.map((item: MenuItem) => (
              <Col md={4} key={item.id}>
                <Card style={{ width: "18rem" }}>
                  <div className="bg-image hover-zoom">
                  </div>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>Price: $ {item.price.toFixed(2)}</Card.Text>
                    <Link className="btn btn-danger" to={`/detail/${item.id}`}>
                      VIEW DETAIL
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            <h4 className="category-name">RICE PLATE</h4>
            {riceData.map((item: MenuItem) => (
              <Col md={4} key={item.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>Price: $ {item.price.toFixed(2)}</Card.Text>
                    <Link className="btn btn-danger" to={`/detail/${item.id}`}>
                      VIEW DETAIL
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            <h4 className="category-name">FAMILY MEALS</h4>
            {familyData.map((item: MenuItem) => (
              <Col md={4} key={item.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>Price: $ {item.price.toFixed(2)}</Card.Text>
                    <Link className="btn btn-danger" to={`/detail/${item.id}`}>
                      VIEW DETAIL
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            <h4 className="category-name">Beverage</h4>
            {waterData.map((item: MenuItem) => (
              <Col md={4} key={item.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>Price: $ {item.price.toFixed(2)}</Card.Text>
                    <Link className="btn btn-danger" to={`/detail/${item.id}`}>
                      VIEW DETAIL
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default Ourmenu;

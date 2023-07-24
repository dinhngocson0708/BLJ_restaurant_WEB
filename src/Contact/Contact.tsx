import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../Layout";
import "./Contact.css";

const Contact = () => {
  const handlePhoneLinkClick = () => {
    window.location.href = "tel:(+84) 912076194";
  };

  return (
    <div className="Contact_us">
      <Layout>
        <img
          className="imag_contact"
          src={process.env.PUBLIC_URL + "img/bgHeaderPage.jpg"}
          alt="aboutus"
        />
        <h1 className="title_contactUs">Contact Us</h1>
        <Container>
          <Row className="Contact">
            <Col md={8}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15338.752703326672!2d108.2259013!3d16.02973995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1689153938418!5m2!1svi!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
            <Col md={4}>
              <p className="title_contact">
                Thanks for your interest. Please contact us with the information below.
              </p>
              <h3>Rolls Vietnamese Grill</h3>
              <p>
                <i className="fa fa-fax"></i>{" "}
                <a
                  href="tel:(+84) 912076194"
                  className="phone-link"
                  onClick={handlePhoneLinkClick}
                >
                  (703) 910-3888
                </a>
              </p>
              <p className="address">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg> Shops at Fairfax, 10780 Fairfax Blvd, Fairfax, VA 22030, USA
            </p>
            </Col>
          </Row>
        </Container>
        <br />
      </Layout>
    </div>
  );
};

export default Contact;

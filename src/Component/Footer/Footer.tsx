import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    const menuItems = ['Gallery', 'Home', 'Our Menu', 'Privacy Notice', 'Refund Policy', 'Contact'];
    const openingItems = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];
    const timeopening = ['9:00 AM - 5:00 PM', '9:00 AM - 5:00 PM', '9:00 AM - 5:00 PM', '9:00 AM - 5:00 PM', '9:00 AM - 5:00 PM', '9:00 AM - 5:00 PM', 'Closed'];
    const handlePhoneLinkClick = () => {
        window.location.href = 'tel:(703) 910-3888';
    };
    return (
        <div className='footer'>
            <Container >
                <Row>
                    <Col xs={12} md={3}>
                        <Image className='image' src="https://res.ringameal.com/Uploads/1070/1437269a-8601-4e86-b82c-998f2d398085.jpg" thumbnail />
                    </Col>
                    <Col xs={12} md={2}>
                        <h4>Menu</h4>
                        {menuItems.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </Col>
                    <Col xs={12} md={4}>
                        <h4>Opening Hours</h4>
                        <Row className='openinghour'>
                            <Col>
                                {openingItems.map((item) => (
                                    <p>{item}</p>
                                ))}
                            </Col>
                            <Col>
                                {timeopening.map((item) => (
                                    <p>{item}</p>
                                ))}
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={3} className='getintouch'>
                        <h4>Get In Touch</h4>
                        <p>
                            <i className="fa fa-fax"></i> <a href='tel:(703) 910-3888' className="phone" onClick={handlePhoneLinkClick}>(703) 910-3888</a>
                        </p>
                        <p className="addres">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg> Shops at Fairfax, 10780 Fairfax Blvd, Fairfax, VA 22030, USA
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
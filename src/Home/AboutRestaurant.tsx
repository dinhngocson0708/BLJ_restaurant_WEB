import { Row, Col } from 'react-bootstrap';
import './AboutRestaurant.css';

const AboutRestaurant = () => {
    return (
        <Row className='About'>
            <Col md={6}>
                <img className="nameimage" src="https://res.ringameal.com/Uploads/1070/ed3fdcc7-9a40-45c6-bf27-912838683456.jpg" alt=""/>
            </Col>
            <Col md={6} className='about'>
                About Us
                <Col className='aboutus'>
                    Rolls Vietnamese Grill offers traditional Vietnamese street food using the best ingredients, fresh greens and grilled beef, pork, chicken, shrimp and salmon wrap in thin rice paper. A truly healthy and delicious choice. <br /><br /><br />We are located inside 99 Ranch Market.
                </Col>
            </Col>
        </Row>
    )
}

export default AboutRestaurant;

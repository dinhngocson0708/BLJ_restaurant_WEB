import { Row, Col } from 'react-bootstrap';

const AboutRestaurant = () => {
    return (
        <Row>
            <Col md={6}>
                <img className="nameimage" src="https://res.ringameal.com/Uploads/1070/ed3fdcc7-9a40-45c6-bf27-912838683456.jpg" alt="" style={{width: '100%', marginTop: '50px',height:'500px',borderTopRightRadius:'50px',borderBottomLeftRadius:'50px'}} />
            </Col>
            <Col md={6} className='about' style={{ marginTop: '50px', fontSize: '35px',fontWeight: '700'}}>
                About Us
                <Col className='aboutus' style={{fontWeight:'100',fontSize:'19px'}}>
                    Rolls Vietnamese Grill offers traditional Vietnamese street food using the best ingredients, fresh greens and grilled beef, pork, chicken, shrimp and salmon wrap in thin rice paper. A truly healthy and delicious choice. <br /><br /><br />We are located inside 99 Ranch Market.
                </Col>
            </Col>

        </Row>
    )
}

export default AboutRestaurant;

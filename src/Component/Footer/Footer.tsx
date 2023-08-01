import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { PrismicImage, PrismicText, useAllPrismicDocumentsByType } from '@prismicio/react';

const Footer = () => {
    const [getinfo] = useAllPrismicDocumentsByType('restaurantinfo')
    console.log('helo------------------------>',getinfo)
    const [getmenu] = useAllPrismicDocumentsByType('menu')
    getmenu?.sort((a, b) => a.data.shortorder - b.data.shortorder)
    const openingItems = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];
    const timeopening = ['9:00 - 5:00 ', '9:00  - 5:00 ', '9:00  - 5:00 ', '9:00 - 5:00 ', '9:00 - 5:00 ', '9:00 - 5:00 ', 'Closed'];

    return (
        <>
            <div className='footer'>
                <Container >
                    <Row>
                        {getinfo?.map(function (el) {
                            return (
                                <Col xs={12} md={3} className='pb-3'>
                                    <PrismicImage field={el.data.restaurantlogo} className='thumbnail' />
                                </Col>
                            );
                        })}
                        <Col xs={12} md={2}>
                            <h4>Menu</h4>
                            {getmenu?.map(function (el) {
                                 const linkUrl = el.data.link;
                                return <Link to={linkUrl[0].text} className='menufooter'><p><PrismicText field={el.data.menuname} /></p></Link>
                            })}
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
                                    {getinfo?.map((item) => (
                                    <p><PrismicText field={item.data.body.text} /></p>
                                    ))}
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={3} className='getintouch'>
                            <h4>Get In Touch</h4>
                            {getinfo?.map(function (el) {
                                return (
                                    <>
                                        <p>
                                            <i className="fa fa-fax"></i> <PrismicText field={el.data.phone_number} />
                                        </p>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                            </svg> <PrismicText field={el.data.address} />
                                        </p>
                                    </>
                                );
                            })}
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ backgroundColor: '#002E5B', color: 'white', textAlign: 'center', padding: '20px' }}>Provided by ringameal.com</div>
        </>
    );
};

export default Footer;
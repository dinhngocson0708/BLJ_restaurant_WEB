import { Row, Col } from 'react-bootstrap';
import './AboutRestaurant.css';
import { PrismicRichText, useAllPrismicDocumentsByType,PrismicImage} from '@prismicio/react';

const AboutRestaurant = () => {
  const isMediumScreen = window.matchMedia("(min-width: 46.25em) and (max-width: 63.9375em)").matches;
  const [aboutrestaurant] = useAllPrismicDocumentsByType('restaurantinfo');
  // console.log('aaaaa', aboutrestaurant);

  return (
    <>
      {aboutrestaurant &&
        aboutrestaurant.map(function (el) {
          return (
            <Row className='About'>
              <Col md={6}>
                    <PrismicImage className='nameimage' field={el.data.restaurantcover} />
              </Col>
              <Col md={isMediumScreen ? 12 : 6}>
                <span className='about' style={{ marginTop: '250px', marginLeft: '10px', fontSize: '40px' }}>
                  <PrismicRichText field={el.data.title} />
                </span>
                <br />
                <Col>
                  <span className='aboutus' style={{ marginTop: '30px', fontSize: '20px', fontWeight: '100' }}>
                    <PrismicRichText field={el.data.description} />
                  </span>
                </Col>
              </Col>
            </Row>
          );
        })
      }
    </>
  )
}

export default AboutRestaurant;

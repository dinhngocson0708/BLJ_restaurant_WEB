import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../Layout';
import './ourmenu.css';
import { Link } from 'react-router-dom';
import { PrismicRichText, useAllPrismicDocumentsByType } from '@prismicio/react';
const Ourmenu = () => {
  interface Category {
    type: string;
    text: string;
  }

  const [documents] = useAllPrismicDocumentsByType('our_menu');
  // Filter menu items by category
  const chickenData = documents?.filter((item) =>
    item.data.category.some((category: Category) => category.text === 'chicken')
   
  ); 
  
  const riceplate=documents?.filter((item)=>
  item.data.category.some((category:Category)=>category.text === 'rice plate')
  )
  const family=documents?.filter((item)=>
  item.data.category.some((category:Category)=>category.text === 'family')
  )

  const water=documents?.filter((item)=>
  item.data.category.some((category:Category)=>category.text === 'beverage')
  )

  return (
    <div>
      <Layout>
        <h1 className='ourmenu__'>Our Menu</h1>
        <img src='https://get.ringameal.com/App_Themes/Template04/img/bgHeaderPage.jpg' width='100%' />
        <Container>
          <Row>
            <h4 className='category-name'>CHICKEN</h4>
            {chickenData?.map((item) => (
              <Col md={4} key={item.id}>
                <Card className='thumbnail' style={{ width: '24rem' }}>
                  <Link to={`/detail/${item.id}`}>
                    <Card.Img variant='top' src={item.data.image.url} className='image_detail' />
                  </Link>
                  <Card.Body>
                    <Card.Title className='name'  style={{ fontSize: '24px' }}>
                      <PrismicRichText field={item.data.name}  />
                    </Card.Title>
                    <Card.Text className='price'> Price: $ <PrismicRichText field={item.data.price} /></Card.Text>
                    <Link className='btn btn-danger' to={`/detail/${item.id}`}>
                      VIEW DETAIL
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            <h4 className='category-name'>RICE PLATE</h4>
            {riceplate?.map((item) => (
              <Col md={4} key={item.id}>
                <Card className='thumbnail' style={{ width: '24rem' }}>
                  <Link to={`/detail/${item.id}`}>
                    <Card.Img variant='top' src={item.data.image.url} />
                  </Link>
                  <Card.Body>
                    <Card.Title className='name'  style={{ fontSize: '24px' }}>
                      <PrismicRichText field={item.data.name}  />
                    </Card.Title>
                    <Card.Text className='price'> Price: $ <PrismicRichText field={item.data.price} /></Card.Text>
                    <Link className='btn btn-danger' to={`/detail/${item.id}`}>
                      VIEW DETAIL
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            <h4 className='category-name'>FAMILY MEALS</h4>
            {family?.map((item) => (
              <Col md={4} key={item.id}>
                <Card className='thumbnail' style={{ width: '24rem' }}>
                  <Link to={`/detail/${item.id}`}>
                    <Card.Img variant='top' src={item.data.image.url} />
                  </Link>
                  <Card.Body>
                    <Card.Title className='name'  style={{ fontSize: '24px' }}>
                      <PrismicRichText field={item.data.name}  />
                    </Card.Title>
                    <Card.Text className='price'> Price: $ <PrismicRichText field={item.data.price} /></Card.Text>
                    <Link className='btn btn-danger' to={`/detail/${item.id}`}>
                      VIEW DETAIL
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
             <h4 className='category-name'>BEVERAGE</h4>
            {water?.map((item) => (
              <Col md={4} key={item.id}>
                <Card className='thumbnail' style={{ width: '24rem' }}>
                  <Link to={`/detail/${item.id}`}>
                    <Card.Img variant='top' src={item.data.image.url} />
                  </Link>
                  <Card.Body>
                    <Card.Title className='name'  style={{ fontSize: '24px' }}>
                      <PrismicRichText field={item.data.name}  />
                    </Card.Title>
                    <Card.Text className='price'> Price: $ <PrismicRichText field={item.data.price} /></Card.Text>
                    <Link className='btn btn-danger' to={`/detail/${item.id}`}>
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

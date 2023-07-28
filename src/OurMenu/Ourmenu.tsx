import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../Layout';
import './ourmenu.css';
import { Link } from 'react-router-dom';
import { PrismicRichText, useAllPrismicDocumentsByType } from '@prismicio/react';
import { text } from 'stream/consumers';
const Ourmenu = () => {
  interface Category {
    type: string;
    text: string;
  }

  const [documents] = useAllPrismicDocumentsByType('our_menu');

  const category: Category[] = [];

  documents?.map((item) => {
    category.push(item.data.category[0].text);
  });
  function unique(documents: any) {
    var newArr = []
    for (var i = 0; i < documents.length; i++) {
      if (newArr.indexOf(documents[i]) === -1) {
        newArr.push(documents[i])
      }
    }
    return newArr
  }
  console.log(unique(category))

  const unicategory = unique(category)
  const food: any[] = []
  for (let i = 0; i < unicategory.length; i++) {
    const Data = documents?.filter((item) =>
      item.data.category.some((category: Category) => category.text === unicategory[i])

    );

    food.push(Data);
  }


  return (
    <div>
      <Layout>
        <h1 className='ourmenu__'>Our Menu</h1>
        <img src='https://get.ringameal.com/App_Themes/Template04/img/bgHeaderPage.jpg' width='100%' />
        <Container>
          <Row>
            {unicategory?.map((category, index) => (
              <Row key={index}>
                <h4 className='category-name'>{category}</h4>
                {console.log("index", food[index])}
                {food[index]?.map((item: any) => (
                  <Col md={4} key={item.id}>
                    <Card className="thumbnail" style={{ width: "26rem" }}>
                      <Link to={`/detail/${item.id}`}>
                        <Card.Img variant="top" src={item.data.image.url} />
                      </Link>
                      <Card.Body>
                        <Card.Title
                          className="name"
                          style={{ fontSize: "24px" }}
                        >
                          <PrismicRichText field={item.data.name} />
                        </Card.Title>
                        <Card.Text className="price">
                          Price: $ <PrismicRichText field={item.data.price} />
                        </Card.Text>
                        <Link
                          className="btn btn-danger"
                          to={`/detail/${item.id}`}
                        >
                          VIEW DETAIL
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}

              </Row>
            ))}

          </Row>

        </Container>
          <br></br>
      </Layout>
    </div>
  );
};

export default Ourmenu;

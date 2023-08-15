import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../Layout';
import './ourmenu.css';
import { Link } from 'react-router-dom';
import { PrismicRichText, useAllPrismicDocumentsByType, usePrismicDocumentByUID } from '@prismicio/react';
import { PrismicImage } from '@prismicio/react'
const Ourmenu = () => {
  interface Category {
    type: string;
    text: string;
  }

  const [category,setCategory]=useState([]);
  const [food,setFood]=React.useState<any[]>([]);
  const [documents] = useAllPrismicDocumentsByType('our_menu');
  const [banerimg] = usePrismicDocumentByUID('menu', 'contact');
  useEffect(()=>{
    if(documents && documents.length>0){
      const categorys: Category[] = [];

      documents?.map((item) => {
        categorys.push(item.data.category[0].text); 
      });
      
      const unicate:any= unique(categorys);
  
      setCategory(unicate);
   
      const foods:any= [];
      for (let i = 0; i < unicate.length; i++) {
        const Data = documents?.filter((item) =>
          item.data.category.some((category: Category) => category.text === unicate[i])
          
        );
        foods.push(Data)
       
      }
      setFood(foods)
    
    }
    function unique(documents: any) {
      var newArr = []
      for (var i = 0; i < documents.length; i++) {
        if (newArr.indexOf(documents[i]) === -1) {
          newArr.push(documents[i])
  
        }
      }
      return newArr
    }
  },[documents])
 
 
  

 
  return (
    <div>
      <Layout>
        <h1 className='ourmenu__'>Our Menu</h1>
        <div><PrismicImage field={banerimg?.data.menucover} width='100%'  /></div>
        <Container>
          <Row>
            {category.map((category, index) => (
              <Row key={index} >
                <h4 className='category-name'>{category}</h4>
                
                {food[index]?.map((item: any) => (
                  <Col md={4} key={item.id}>
                    <Card className="thumbnail"  style={{ width: "26rem" }}>
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
                          to={`/detail/${item.id}/${Math.random()}`}
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

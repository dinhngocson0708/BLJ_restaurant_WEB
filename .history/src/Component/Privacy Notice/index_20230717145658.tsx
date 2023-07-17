// PrivacyNotice.tsx
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './privacy.css'
import Layout from '../../Layout';

const PrivacyNotice: React.FC = () => {
  return (
    <Layout>
        
            <img className='img' src="https://get.ringameal.com/App_Themes/Template04/img/bgHeaderPage.jpg" alt="" />
        
        <Container className="text-right">
    <Row>
      <Col sm={6} className="text-right">
        
         <div className="image-caption">Privacy Notice</div>
      </Col>
      
        <h2 className='text1'>Privacy Notice</h2>
        <div className='border'></div>
        <h3>Privacy Policy</h3>
        <div className='content'></div>
        
    
    </Row>
  </Container>
  </Layout>
    
  );
};

export default PrivacyNotice;

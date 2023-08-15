import React from "react";
import './privacy.css';
import { Container, Row, Col } from "react-bootstrap";
import { PrismicRichText, useAllPrismicDocumentsByType, usePrismicDocumentByUID } from '@prismicio/react';
import { PrismicImage } from '@prismicio/react' // Thêm import PrismicImage để sử dụng hình ảnh
import Layout from "../Layout";

const PrivacyNotice: React.FC = () => {
  const [documents] = useAllPrismicDocumentsByType('privacy');
  const [bannerImg] = usePrismicDocumentByUID('menu', 'privacy'); // Đổi tên biến thành bannerImg thay vì banerimg

  return (
    <Layout>
      <div className="image">
        {documents && documents.length > 0 && bannerImg ? (
          documents.map(function (el) {
            return (
              <PrismicImage
                key={el.id}
                field={bannerImg.data.menucover} 
              />
            );
          })
        ) : (
          <p>No data found.</p>
        )}
      </div>
      <div className="image-caption">Privacy Notice</div>
      <Container className="text-right">
        <Row>
          <Col sm={6} className="text-right">
            
          </Col>
        </Row>
        <h2 className="text1">Privacy Notice</h2>
        <div className="content">
          {documents && documents.length > 0 ? (
            documents.map(function (el) {
              return <PrismicRichText field={el.data.privactycontent} key={el.id} />;
            })
          ) : (
            <p>No data found.</p>
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default PrivacyNotice;

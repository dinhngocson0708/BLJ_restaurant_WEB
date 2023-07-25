import { Carousel } from 'react-bootstrap';
import './SliderImage.css';
import { PrismicImage, useAllPrismicDocumentsByType } from '@prismicio/react';

const SliderImage = () => {
  const [slider] = useAllPrismicDocumentsByType('slider_image');

  return (
    <Carousel>
      {slider?.map(function (el) {
        return (
          <Carousel.Item key={el.id}> {/*Thêm key cho mỗi Carousel.Item*/}
            <PrismicImage className='imageslider'field={el.data.imagecover_homepage} /> 
            <Carousel.Caption>
              <p className='title1'>WELCOME TO</p>
              <h1 className='title2'>ROLLS VIETNAMESE GRILL</h1>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default SliderImage;

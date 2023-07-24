import { Carousel } from 'react-bootstrap';
import './SliderImage.css';

const SliderImage = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="imageslider"
                    src="https://res.ringameal.com/Uploads/1070/26922b48-c304-4611-a1b2-0970a1d14a3c.jpg"
                    alt="image"
                   
                />
                <Carousel.Caption>
                    <p className='title1'>WELCOME TO</p>
                    <h1 className='title2'>ROLLS VIETNAMESE GRILL</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="imageslider"
                    src="https://res.ringameal.com/Uploads/1070/26922b48-c304-4611-a1b2-0970a1d14a3c.jpg"
                    alt="image"
                  
                />
                <Carousel.Caption>
                    <p className='title1'>WELCOME TO</p>
                    <h1 className='title2'>ROLLS VIETNAMESE GRILL</h1>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}

export default SliderImage;
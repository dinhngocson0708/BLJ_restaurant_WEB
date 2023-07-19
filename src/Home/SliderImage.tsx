import { Carousel } from 'react-bootstrap';
import './SliderImage.css';
const SliderImage = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block img-fluid"
                    src="https://res.ringameal.com/Uploads/1070/26922b48-c304-4611-a1b2-0970a1d14a3c.jpg"
                    alt="image"
                    style={{ objectFit: 'cover',height:'650px'}}
                />
                <Carousel.Caption>
                    <p style={{ marginRight: '950px', color: '#ff656a' }}>WELCOME TO</p>
                    <h1 style={{ fontWeight: 'bold', marginRight: '950px' }}>ROLLS VIETNAMESE GRILL</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block img-fluid"
                    src="https://res.ringameal.com/Uploads/1070/26922b48-c304-4611-a1b2-0970a1d14a3c.jpg"
                    alt="image"
                    style={{ objectFit: 'cover',height:'650px'}}
                />
                <Carousel.Caption>
                    <p style={{marginRight: '950px', color: '#ff656a' }}>WELCOME TO</p>
                    <h1 style={{ fontWeight: 'bold', marginRight: '950px' }}>ROLLS VIETNAMESE GRILL</h1>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}

export default SliderImage;
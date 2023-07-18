import { Carousel } from 'react-bootstrap';

const SliderImage = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.ringameal.com/Uploads/1070/26922b48-c304-4611-a1b2-0970a1d14a3c.jpg"
                    style={{ objectFit: 'cover', height: '700px' }}
                />
                <Carousel.Caption>
                    <p style={{ fontSize: '20px', marginRight: '900px', color: '#ff656a' }}>WELCOME TO</p>
                    <h1 style={{ fontWeight: 'bold', fontSize: '90px', marginRight: '800px' }}>ROLLS VIETNAMESE GRILL</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.ringameal.com/Uploads/1070/26922b48-c304-4611-a1b2-0970a1d14a3c.jpg"
                    style={{ objectFit: 'cover', height: '700px' }}
                />
                <Carousel.Caption>
                    <p style={{ fontSize: '20px', marginRight: '900px', color: '#ff656a' }}>WELCOME TO</p>
                    <h1 style={{ fontWeight: 'bold', fontSize: '90px', marginRight: '800px' }}>ROLLS VIETNAMESE GRILL</h1>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}

export default SliderImage;
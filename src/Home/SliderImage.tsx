import { Carousel } from 'react-bootstrap';

const SliderImage = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://res.ringameal.com/Uploads/1070/26922b48-c304-4611-a1b2-0970a1d14a3c.jpg"
                    alt="First slide" style={{ objectFit: 'cover', height: '550px' }}
                />
                <Carousel.Caption>
                    <p style={{fontSize:'40px',marginRight:'400px',color:'#ff656a'}}>WELCOME TO</p>
                    <h1>ROLLS VIETNAMESE GRILL</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://media-cdn.tripadvisor.com/media/photo-s/0f/fa/57/cf/country-girl-family-restaurant.jpg"
                    alt="Second slide" style={{ objectFit: 'cover', height: '550px' }}
                />
                <Carousel.Caption>
                    <p style={{fontSize:'40px',marginRight:'400px',color:'#ff656a'}}>WELCOME TO</p>
                    <h1>ROLLS VIETNAMESE GRILL</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default SliderImage;
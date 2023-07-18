import Layout from "../Layout";
import SliderImage from "./SliderImage";
import AboutRestaurant from "./AboutRestaurant";
import { Container } from 'react-bootstrap'

const Home = () => {
    return (
        <Layout>
            <SliderImage />
            <Container>
                <AboutRestaurant />
            </Container>
            <br />
            <br />
            <OurMenu />
        </Layout>

    )
}

export default Home;
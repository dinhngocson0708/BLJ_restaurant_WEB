import Layout from "../Layout";
import SliderImage from "./SliderImage";
import AboutRestaurant from "./AboutRestaurant";
import { Container } from 'react-bootstrap'
import OurMenu from "./OurMenu";

const Home = () => {
    return (
        <Layout>
            <SliderImage />
            <Container>
                <AboutRestaurant />
            </Container>
            <br />
            <br />
            <Container fli></Container>
            <OurMenu />
            
        </Layout>

    )
}

export default Home;
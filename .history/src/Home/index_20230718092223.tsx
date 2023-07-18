import Layout from "../../Layout";
import AboutRestaurant from "./AboutRestaurant";
import { Container } from 'react-bootstrap'
import OurMenu from "./OurMenu";

const Home = () => {
    return (
        <Layout>
            
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
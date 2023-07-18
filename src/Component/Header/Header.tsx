import './Header.css'
import { Nav, Navbar, Container , NavDropdown, Button} from 'react-bootstrap';

const HeaderMenu = () => {
    return (
        <Navbar expand="lg" className="bg-body-restaurant">
            <Container>
                <Navbar.Brand href="#home"><img src="https://res.ringameal.com/Uploads/1070/ed3fdcc7-9a40-45c6-bf27-912838683456.jpg" alt="" style={{objectFit:'cover',width:'100px',height:'70px'}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto w-100 justify-content-between">
                        <Nav.Link href="/home">HOME</Nav.Link>
                        <Nav.Link href="/menu">OUR MENU</Nav.Link>
                        <NavDropdown
                            id="nav-dropdown-light-example"
                            title="MENU"
                            menuVariant="light"
                        >
                            <NavDropdown.Item href="/home">Home</NavDropdown.Item>
                            <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> dùng để chia những menu con*/}
                            <NavDropdown.Item href="/privacy">
                                Privacy Notice
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/privacy">PRIVACY NOTICE</Nav.Link>
                        <Nav.Link href="/contact">CONTACT</Nav.Link>
                        <Button className='btn btn-danger'>ORDER ONLINE</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default HeaderMenu;
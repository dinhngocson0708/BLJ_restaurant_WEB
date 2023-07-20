import './Header.css'
import { Nav, Navbar, Container, NavDropdown, Button } from 'react-bootstrap';
import MediaQuery, { useMediaQuery } from 'react-responsive';
const HeaderMenu = () => {
    return (
        <>
            <MediaQuery maxWidth={768}>
                {(matches) => (
                    matches ? null : (
                        <div style={{ backgroundColor: '#002d5b', color: 'white', display: 'flex', padding: '11px' }}>
                            <p style={{ color: 'white', margin: '0 0px', fontSize: '15px' }}><i className="fas fa-map-marker-alt" style={{ marginLeft: '100px', marginRight: '10px' }}></i>
                                Shops at Fairfax, 10780 Fairfax Blvd, Fairfax, VA 22030, USA</p>
                            <p style={{ color: 'white', margin: '0 50px' }}>
                                <i className="fa fa-fax" style={{ marginRight: '5px' }}></i>
                                <a href='tel:(703) 910-3888' className="phone" style={{ color: 'white', fontSize: '15px' }}>Tel: (703) 910-3888</a>
                            </p>
                        </div>
                    )
                )
                }
            </MediaQuery>
            <Navbar expand="lg" className="bg-body-restaurant">
                <Container>
                    <Navbar.Brand href="#home"><img src="https://res.ringameal.com/Uploads/1070/ed3fdcc7-9a40-45c6-bf27-912838683456.jpg" alt="" style={{ objectFit: 'cover', width: '100%', height: '70px' }} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto w-100 justify-content-between">
                            <Nav.Link href="/home">HOME</Nav.Link>
                            <Nav.Link href="/ourmenu">OUR MENU</Nav.Link>
                            <NavDropdown
                                id="nav-dropdown-light-example"
                                title="MENU"
                                menuVariant="light"
                            >
                                <NavDropdown.Item href="/home">Home</NavDropdown.Item>
                                <NavDropdown.Item href="/ourmenu">Our Menu</NavDropdown.Item>
                                <NavDropdown.Item href="/privacy">
                                    Privacy Notice
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                                {/* <NavDropdown.Divider /> dùng để chia những menu con*/}
                            </NavDropdown>
                            <Nav.Link href="/privacy">PRIVACY NOTICE</Nav.Link>
                            <Nav.Link href="/contact">CONTACT</Nav.Link>
                            <Button className='btn btn-danger'>ORDER ONLINE</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default HeaderMenu;
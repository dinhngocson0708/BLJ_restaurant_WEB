import './Header.css';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { PrismicRichText, useAllPrismicDocumentsByType } from '@prismicio/react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

const HeaderMenu = () => {
  const [headerMenuDocuments] = useAllPrismicDocumentsByType('menu');
  console.log('=====>0',headerMenuDocuments);

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
        )}
      </MediaQuery>
      <Navbar expand="lg" className="bg-body-restaurant">
        <Container>
          <Navbar.Brand href="#home"><img src="https://res.ringameal.com/Uploads/1070/ed3fdcc7-9a40-45c6-bf27-912838683456.jpg" alt="" style={{ objectFit: 'cover', width: '100%', height: '70px' }} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 justify-content-between">
              {headerMenuDocuments && headerMenuDocuments.length > 0 ? (
                headerMenuDocuments.map(function (el) {
                  const linkUrl = el.data.link;
                  console.log('link ',linkUrl);
                  return (
                    <Nav.Item key={el.id}>
                      <Link to={linkUrl[0].text} style={{textDecoration:'none'}}>
                        <PrismicRichText field={el.data.menuname} />
                      </Link>
                    </Nav.Item>
                  );
                })
              ) : null}
              <Button className='btn btn-danger'>ORDER ONLINE</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderMenu;
import './Header.css';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { PrismicImage, PrismicRichText, useAllPrismicDocumentsByType } from '@prismicio/react';
import MediaQuery from 'react-responsive';

const HeaderMenu = () => {
  const [headerMenuDocuments] = useAllPrismicDocumentsByType('menu');
  headerMenuDocuments?.sort((a, b) => a.data.shortorder - b.data.shortorder);
  const [getLogo] = useAllPrismicDocumentsByType('restaurantinfo');

  return (
    <>
      <MediaQuery maxWidth={768}>
        {(matches) => (
          matches ? null : (
            <div style={{ backgroundColor: '#002d5b', color: 'white', display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-map-marker-alt" style={{ marginLeft: '110px', marginRight: '10px' }}></i>
              <span className='address' style={{ marginTop: '15px' }}>
                {getLogo?.map(function (el) {
                  return <PrismicRichText field={el.data.address} />
                })}
              </span>
              <i className="fa fa-fax" style={{ marginLeft: '50px', marginRight: '10px', alignItems: 'center' }}></i>
              <span className='phone' style={{ marginTop: '15px' }}>
                {getLogo?.map(function (el) {
                  return <PrismicRichText field={el.data.phone_number} />
                })}
              </span>
            </div>
          )
        )}
      </MediaQuery>
      <Navbar expand="lg" className="bg-body-restaurant">
        <Container>
          <Navbar.Brand href="/home">
            {getLogo?.map(function (el) {
              return <PrismicImage field={el.data.restaurantlogo} style={{ objectFit: 'cover', width: '100%', height: '70px' }} />
            })
            }
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100 justify-content-between">
              {headerMenuDocuments && headerMenuDocuments.length > 0 ? (
                headerMenuDocuments.map(function (el) {
                  const linkUrl = el.data.link;
                  console.log('link ', linkUrl);
                  return (
                    <Nav.Item key={el.id} className='hd' style={{ fontSize: '15px', marginTop: '10px' }}>
                      <Nav.Link href={linkUrl[0].text} style={{ textDecoration: 'none' }}>
                        <PrismicRichText field={el.data.menuname} />
                      </Nav.Link>
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
import './Header.css';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { PrismicImage, PrismicRichText, useAllPrismicDocumentsByType } from '@prismicio/react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
// import {useState, useEffect} from 'react'

// interface MenuObj{
//   MenuName: string,
//   MenuHref: string,
//   SortOrder: number
// }

const HeaderMenu = () => {
  // const [topMenu, setTopMenu] = useState<MenuObj[]>([]);
  const [headerMenuDocuments] = useAllPrismicDocumentsByType('menu');
  headerMenuDocuments?.sort((a, b) => a.data.shortorder - b.data.shortorder);

  // {
  //   orderings: {
  //     field: 'document.data.shortorder',
  //     direction: 'asc',
  //   },
    
  // });
  
  const [getLogo] = useAllPrismicDocumentsByType('restaurantinfo');

  
  // useEffect(() => {
  //   if(headerMenuDocuments && headerMenuDocuments.length > 0){
  //     let _webMenu: MenuObj[] = [];
  //     for(let i:number = 0; i < headerMenuDocuments.length; i++){
  //       let menuItem: MenuObj = {
  //         MenuName: headerMenuDocuments[i].data.menuname[0].text,
  //         MenuHref: headerMenuDocuments[i].data.link[0].text,
  //         SortOrder: headerMenuDocuments[i].data.shortorder,
  //       }
  //       _webMenu.push(menuItem);
  //     }
  //     _webMenu.sort((a, b) => (a.SortOrder > b.SortOrder) ? 1 : -1);
  //     setTopMenu([..._webMenu]);
  //   }
  // },[headerMenuDocuments?.length])

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
          <Navbar.Brand href="#home">
            {getLogo?.map(function(el){
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
              {/* {topMenu?.map(function(el){
                return (
                  <Nav.Item key={el.MenuHref}>
                    <Link to={el.MenuHref} style={{textDecoration:'none'}}>
                      {el.MenuName}
                    </Link>
                  </Nav.Item>
                );
              })} */}
              <Button className='btn btn-danger'>ORDER ONLINE</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderMenu;
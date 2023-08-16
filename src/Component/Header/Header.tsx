import { useEffect } from "react";
import './Header.css';
import { Nav, Navbar, Container, Dropdown } from 'react-bootstrap';
import { PrismicImage, PrismicRichText, useAllPrismicDocumentsByType } from '@prismicio/react';
import MediaQuery from 'react-responsive';
import {MDBIcon} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useState } from 'react';

const HeaderMenu = () => {
  const navigate = useNavigate();
  const [headerMenuDocuments] = useAllPrismicDocumentsByType('menu');
  headerMenuDocuments?.sort((a, b) => a.data.shortorder - b.data.shortorder);
  const [getLogo] = useAllPrismicDocumentsByType('restaurantinfo');
  const {items} = useSelector((state:any) => state.shopingCarRedux);
  const cartDataJSON = localStorage.getItem('cart');
  var cartItems ;
  if (cartDataJSON) {
       cartItems = JSON.parse(cartDataJSON);
  };

  const itemnew:any=[];
    items?.map((data:any)=>{
            
        if(data.userName===JSON.stringify(localStorage.getItem('loggedInUsername'))){
            console.log("data",data)
           itemnew.push(data)
        }else{
            console.log("quang")
        }
    })
  const  navigateCart=()=>{
    if(localStorage.getItem('loggedInUsername')){
        navigate('/cart')
    }else{
      alert("Giỏ hàng đang trống.Vui lòng add to cart")
      navigate('/')
    }
  }
  const dispatch = useDispatch();
 
  const loggedInUsername = localStorage.getItem('loggedInUsername');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    if (loggedInUsername) {
      setLogin(true);
    }
  }, []);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const handleLogoutClick = () => {
    const confirmed = window.confirm('Bạn có chắc chắn muốn đăng xuất?');
    if (confirmed) {
      localStorage.removeItem('loggedInUsername');
      toast.success('Đã đăng xuất thành công', {
        autoClose: 2000, // Tự đóng sau 2 giây
      });
      window.location.reload(); // Tải lại trang
    }
  };

  return (
    <>
      <MediaQuery maxWidth={768}>
        {(matches) => (
          matches ? null : (
            <div style={{ backgroundColor: '#002E5B', color: 'white', display: 'flex', alignItems: 'center' }}>
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
              return <PrismicImage field={el.data.restaurantlogo} style={{ objectFit: 'cover', width: '100%', height: '60px' }} />
            })}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
          <Navbar.Collapse id="basic-navbar-nav">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#002E5B', fontWeight: '600' }}>
              <Nav className="me-auto justify-content-between" style={{ width: '800px', height: '60px' }}>
                {headerMenuDocuments && headerMenuDocuments.length > 0 ? (
                  headerMenuDocuments.map(function (el) {
                    const linkUrl = el.data.link;
                    console.log('link ', linkUrl);
                    return (
                      <Nav.Item key={el.id} className='hd' style={{ fontSize: '15px', marginTop: '10px' }}>
                        <Nav.Link href={linkUrl[0].text}>
                          <PrismicRichText field={el.data.menuname} />
                        </Nav.Link>
                      </Nav.Item>
                    );
                  })
                ) : null}
              </Nav>
            </div>
            {loggedInUsername ? (
              <>
                <Dropdown style={{ marginLeft: '80px' }}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <p className='person1'>
                      <i className="fas fa-user" />
                      <span className='user'>{loggedInUsername}</span>
                    </p>
                  </Dropdown.Toggle>
                  <Dropdown.Menu className='menudrop'>
                    <Dropdown.Item href="/profile">My profile<i className="fa-solid fa-user" style={{marginLeft:'60px',marginTop:'8px'}}></i></Dropdown.Item>
                    <Dropdown.Item href="#/action-3">My order<i className="fa-brands fa-first-order" style={{marginLeft:'67px',marginTop:'8px'}}></i></Dropdown.Item>
                    <Dropdown.Item href="/cart">Cart <i className="fas fa-shopping-cart" style={{marginLeft:'95px',marginTop:'8px'}}></i>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogoutClick}>Logout
                      <i className="fa fa-sign-out" aria-hidden="true" style={{ marginLeft: '80px', marginTop: '8px' }}></i></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <p className='person'>
                <i className="fas fa-user" />
                <a href="/login" className='login'>Đăng nhập</a> | <a href="/signup" className='signup'>Đăng ký</a>
              </p>
            )}
             <p className="iconson" >
                <b  className="quantity" onClick={navigateCart}><MDBIcon fas icon="shopping-cart" size="lg"  >{itemnew ? itemnew.length :0}</MDBIcon></b>  

              </p>
            
          </Navbar.Collapse>
          <MediaQuery minWidth={769}>
            {(matches) => (
              matches ? null : (
                <div className={`${isMenuOpen ? 'openMenu' : 'closeMenu'}`}>
                  {headerMenuDocuments && headerMenuDocuments.length > 0 ? (
                    headerMenuDocuments.map(function (el) {
                      const linkUrl = el.data.link;
                      console.log('link ', linkUrl);
                      return (
                        <Nav.Item key={el.id} className='hd' style={{ fontSize: '15px', marginTop: '10px' }}>
                          <Nav.Link href={linkUrl[0].text}>
                            <PrismicRichText field={el.data.menuname} />
                          </Nav.Link>
                        </Nav.Item>
                      );
                    })
                  ) : null}
                  {login ? (
                      <Dropdown style={{padding:'10px'}}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <p className='person1'>
                            <i className="fas fa-user" />
                            <span className='user'>{loggedInUsername}</span>
                          </p>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='menudrop'>
                          <Dropdown.Item href="#/action-2">My profile<i className="fa-solid fa-user" style={{ marginLeft: '60px', marginTop: '8px' }}></i></Dropdown.Item>
                          <Dropdown.Item href="#/action-3">My order<i className="fa-brands fa-first-order" style={{ marginLeft: '67px', marginTop: '8px' }}></i></Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Cart <i className="fas fa-shopping-cart" style={{ marginLeft: '95px', marginTop: '8px' }}></i>
                          </Dropdown.Item>
                          <Dropdown.Item onClick={handleLogoutClick}>Logout
                            <i className="fa fa-sign-out" aria-hidden="true" style={{ marginLeft: '80px', marginTop: '8px' }}></i></Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                  ) : (
                    <div>
                      <p className='person' style={{ width: '100%' }}>
                        <i className="fas fa-user" style={{ marginLeft: '-50px' }} />
                        <a href="/login" className='login'>Đăng nhập</a> | <a href="/signup" className='signup'>Đăng ký</a>
                      </p>
                    </div>
                  )}
                </div>
              )
            )}
          </MediaQuery>
        </Container>
      </Navbar >
    </>
  );
};

export default HeaderMenu;
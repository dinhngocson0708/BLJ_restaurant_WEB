import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faBookOpenReader, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faBell as farBell } from "@fortawesome/free-regular-svg-icons";
import { faBitcoin as fabBitcoin } from "@fortawesome/free-brands-svg-icons";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import "./MyProfile.css";

const UpdateProfile = () => {
    const isLoggedIn = true;
    if (isLoggedIn) {
        return (
            <div className='body'>
                <Container>
                    <div className="Home_page"><a href="#">Home page |</a></div>
                    <div className="Account"><a href="account">Account</a></div>
                    <Row className='row_account mt-4'>
                        <Col >
                            <img className="avatar" src="https://www.w3schools.com/w3css/img_avatar3.png" alt="User profile picture" />

                            <h6 className='Name_text'>Nguyen Van A</h6>
                            <button className="btn-gradient-2"><a href="/update_profile">Update Profile</a></button>
                            <div className='icon'><br />
                                <div className='icon-row'>
                                    <span className='My_Account'> <FontAwesomeIcon icon={faCircleUser} /> <a href="/profile">My Profile</a></span>
                                    <br />
                                </div>
                                <div className='icon-row'>
                                    <span className='Notification'> <FontAwesomeIcon icon={farBell} /> Notification</span>
                                    <br />
                                </div>
                                <div className='icon-row'>
                                    <span className='My_Purchase'> <FontAwesomeIcon icon={faBookOpenReader} /> My Purchase</span>
                                    <br />
                                </div>
                                <div className='icon-row'>
                                    <span className='My_Vouchers'> <FontAwesomeIcon icon={faCreditCard} /> My Vouchers</span>
                                    <br />
                                </div>
                                <div className='icon-row'>
                                    <span className='My_Coins'> <FontAwesomeIcon icon={fabBitcoin} /> My Coins</span>
                                    <br />
                                </div>

                            </div>

                        </Col>
                        
                        <Col className="col_myprofile ">
                            <div className='profile-container'>
                            <h5 className='text_myprofile'>My Profile</h5><br />
                            <FloatingLabel controlId="floatingInput"label="User name"className="mb-3"><Form.Control type="name" placeholder="User Name" /></FloatingLabel>
                            <FloatingLabel controlId="floatingInput"label="Email address"className="mb-3"><Form.Control type="email" placeholder="name@example.com" /></FloatingLabel>
                            <FloatingLabel controlId="floatingInput"label="Phone numebr"className="mb-3"><Form.Control type="phone" placeholder="Phone Number" /></FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Address" className='mb-3'><Form.Control type="address" placeholder="Address" /></FloatingLabel> 
                            <Form.Select aria-label="Default select example" className='opiton'>
                            <option>Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Other</option>
                            </Form.Select>
                            <div className='image-form-container'>
                            <img className="avatars" src="https://www.w3schools.com/w3css/img_avatar3.png" alt="User profile picture" style={{left:"500px"}} />
                            <button className="select_image">Select Image</button>
                            <button className="save">Save</button>
                            </div>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>

                
            </div>
        );
    } else {
        return null;
    }
}

export default UpdateProfile;

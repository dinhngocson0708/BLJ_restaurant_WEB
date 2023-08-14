import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faBookOpenReader, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faBell as farBell } from "@fortawesome/free-regular-svg-icons";
import { faBitcoin as fabBitcoin } from "@fortawesome/free-brands-svg-icons";
import "./Account.css";

const Account = () => {
    const isLoggedIn = true;
    if (isLoggedIn) {
        return (
            <div className='body'>
                <Container>
                    <div className="Home_page"><a href="account">Home page |</a></div>
                    <div className="Account"><a href="#">Account</a></div>
                    <Row className='row_account mt-4'>
                        <Col >
                            <img className="avatar" src="https://www.w3schools.com/w3css/img_avatar3.png" alt="User profile picture" />
                            <h6 className='text'>Nguyen Van A</h6>
                            <button className="btn-gradient">
                                <a href="/update_profile">Update Profile</a>
                            </button>
                            <div className='icon'>
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
                    </Row>
                </Container>
            </div>
        );
    } else {
        return null;
    }
}

export default Account;

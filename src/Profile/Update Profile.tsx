import React, { useState, useEffect } from 'react';
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

interface User {
    username: string;
    email: string;
    // Add other properties if needed
  }
  
  const UpdateProfile = () => {
    const loggedInUsername = localStorage.getItem('loggedInUsername');
    const storedUsers = localStorage.getItem('users');
    
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
  
    useEffect(() => {
      if (loggedInUsername === null || storedUsers === null) {
        // Handle the case where user is not logged in or user data is not found
        console.log('User not logged in or data not found.');
        return;
      }
  
      const users: User[] = JSON.parse(storedUsers);
  
      const userData = users.find(user => user.username === loggedInUsername);
  
      if (!userData) {
        // Handle the case where user data is not found
        console.log('User data not found.');
        return;
      }
  
      setUserName(userData.username);
      setEmail(userData.email);
  
      console.log('Fetched user data:', userData);
    }, [loggedInUsername, storedUsers]);
  
    const handleSave = () => {
      const updatedUser: User = {
        username: userName,
        email,
        // Add other properties if needed
      };
      const users: User[] = JSON.parse(storedUsers!);
  
      // Find the index of the user in the array
      const userIndex = users.findIndex(user => user.username === loggedInUsername);
  
      if (userIndex !== -1) {
        // Update the user's data
        users[userIndex] = updatedUser;
  
        // Update the local storage
        localStorage.setItem('users', JSON.stringify(users));
  
        console.log('User data updated:', updatedUser);
      } else {
        console.log('User data not found.');
      }
    };

  return (
    <div className='body'>
    <Container>
        <div className="Home_page"><a href="/home">Home page |</a></div>
        <div className="Account"><a href="account">Account</a></div>
        <Row className='row_account mt-4'>
          <Col>
            <img className="avatar" src="https://www.w3schools.com/w3css/img_avatar3.png" alt="User profile picture" />
            <h6 className='Name_text'>{userName}</h6>
            <button className="btn-gradient-2">
              <a href="/update_profile">Update Profile</a>
            </button> 

            <div className='icon'> <br />
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

          <Col className="col_myprofile">
            <div className='profile-container'>
              <h5 className='text_myprofile'>My Profile</h5><br />
              <FloatingLabel controlId="floatingInput" label="User name" className="mb-3">
                <Form.Control type="text" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="Phone number" className="mb-3">
          <Form.Control type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Address" className='mb-3'>
          <Form.Control type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </FloatingLabel>
        <Form.Select aria-label="Default select example" className='opiton' value={gender} onChange={(e) => setGender(e.target.value)}>
          <option>Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Form.Select>
        <div className='image-form-container'>
          <img className="avatars" src="https://www.w3schools.com/w3css/img_avatar3.png" alt="User profile picture" style={{ left: "500px" }} />
          <button className="select_image">Select Image</button>
        </div>

              </div>
            
          </Col>
        </Row>
      </Container>
      <button className="save" onClick={handleSave}>Save</button>
    </div>
  );
}

export default UpdateProfile;

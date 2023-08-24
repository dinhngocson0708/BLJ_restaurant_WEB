import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faBookOpenReader, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faBell as farBell } from "@fortawesome/free-regular-svg-icons";
import { faBitcoin as fabBitcoin } from "@fortawesome/free-brands-svg-icons";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useDropzone, Accept } from 'react-dropzone';
import Form from 'react-bootstrap/Form';
import "./MyProfile.css";

interface User {
  username: string;
  email: string;
  phonenumber: string;
  address: string;
  gender: string;
  avatar: string;
}

const UpdateProfile = () => {
  const loggedInUsername = localStorage.getItem('loggedInUsername');
  const storedUsers = localStorage.getItem('users');

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [avatar, setAvatar] = useState('');
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'image/*' as unknown as Accept,
    maxFiles: 1,
    onDrop: (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setSelectedFile(file);
        setAvatar(URL.createObjectURL(file));
      }
    }
  });

  let update;
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
    setPhoneNumber(userData.phonenumber);
    setAddress(userData.address);
    setGender(userData.gender);
    setAvatar(userData.avatar);
    

    console.log('Fetched user data:', userData);
  }, [loggedInUsername, storedUsers]);

  const handleSave = () => {
    if (storedUsers === null || loggedInUsername === null) {
      console.log('User not logged in or data not found.');
      return;
    }

    const users: User[] = JSON.parse(storedUsers);

    const userIndex = users.findIndex((user) => user.username === loggedInUsername);

    if (userIndex !== -1) {
      users[userIndex].username = userName;
      users[userIndex].email = email;
      users[userIndex].phonenumber = phoneNumber;
      users[userIndex].address = address;
      users[userIndex].gender = gender;

      if (selectedFile) {
        const reader = new FileReader();
      
        reader.onload = (event) => {
          const base64String = event.target?.result;
      
          if (typeof base64String === 'string') {
            setAvatar(base64String);
            users[userIndex].avatar = base64String;
      
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('loggedInUsername', userName);
            console.log('User data updated:', users[userIndex]);
          } else {
            console.log('Invalid base64String:', base64String);
          }
        };
      
        reader.readAsDataURL(selectedFile);
      } else {
        users[userIndex].avatar = avatar;
      }

      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('loggedInUsername', userName);
      console.log('User data updated:', users[userIndex]);
    } else {
      console.log('User data not found.');
    }
  };



  return (
    
    <div className='body'>
      
      <Container>
        <div className="Home_page"><a href="/home" style={{ color:'black' }} >Home page |</a></div> 
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
              <FloatingLabel controlId="floatingInput" label="User name" className="mb-3" >
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
              <div className='image-container' onDragOver={(e) => e.preventDefault()}>
                {selectedFile ? (
                  <img className="avatars" src={avatar} alt="User profile picture" style={{ left: "500px" }} />
                ) : (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} /> <br />
                    <p>Drag and drop your image here, or click to select files</p>
                  </div>
                )}
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

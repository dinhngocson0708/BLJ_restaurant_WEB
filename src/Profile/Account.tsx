import { Link } from 'react-router-dom';


// Define the user interface
interface User {
  username: string;
  email: string;
  phonenumber: string;
  address: string;
  gender: string;
  avatar: string;

  // Add other properties if needed
}

const Profile = () => {
  const loggedInUsername = localStorage.getItem('loggedInUsername');

  if (loggedInUsername === null) {
    // Handle the case where user is not logged in
    return <div>You are not logged in.</div>;
  }

  const storedUsers = localStorage.getItem('users');
  if (storedUsers === null) {
    // Handle the case where user data is not found
    return <div>User data not found.</div>;
  }

  const users: User[] = JSON.parse(storedUsers); // Parse the users as an array of User type

  const userData = users.find(user => user.username === loggedInUsername);

  if (!userData) {
    // Handle the case where user data is not found
    return <div>User data not found.</div>;
  }

  return (
    <div className='profile'>
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-9">
            <div className="AppForm shadow-lg">
              <div className="row">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <div className="AppFormLeft">
                    <h2>Profile</h2>
                    <p><strong>Username:</strong> {userData.username}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    <p><strong>Phone:</strong> {userData.phonenumber}</p>
                    <p><strong>Addres:</strong> {userData.address}</p>
                    <p><strong> Gender:</strong> {userData.gender}</p>
                    {/* You can display other user information here */}
                    
                    <Link to="/update_profile" className="btn btn-danger btn-block shadow border-0 py-2 text-uppercase">
                     Edit Profile
                   </Link> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

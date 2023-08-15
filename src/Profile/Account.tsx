import React from 'react';


// Define the user interface
interface User {
  username: string;
  email: string;
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
                    <h1>Profile</h1>
                    <p><strong>Username:</strong> {userData.username}</p>
                    <p><strong>Email:</strong> {userData.email}</p>
                    {/* You can display other user information here */}
                    <button
                      className="btn btn-primary btn-block shadow border-0 py-2 text-uppercase"
                      onClick={() => {
                        // Handle edit profile logic
                      }}
                    >
                      Edit Profile
                    </button>
                  </div>
                </div>
                <div className="col-md-6">
                  {/* You can display an image or other content here */}
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
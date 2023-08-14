import React, { useState } from 'react';
import './Signup.css'; 

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleSignup = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Mật khẩu không trùng khớp! Vui lòng nhập lại");
      return;
    }

    const newUser = {
      username: username,
      email: email,
      password: password,
    };

    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));
    alert("Đăng kí tài khoản thành công");
    window.location.href = '/login';

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setTermsAgreed(false);
  };

  return (
    <div className='formsignup'>
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <form className="col-md-9" onSubmit={handleSignup}>
          <div className="AppForm shadow-lg">
          <div className="row">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="AppFormLeft">
                  <h1>Create new account</h1>
                  <div className="form-group position-relative mb-4">
                    <input
                      type="text"
                      className="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none"
                      id="username"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <i className="fa fa-user-o" />
                  </div>
                  <div className="form-group position-relative mb-4">
                    <input
                      type="text"
                      className="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <i className="fa fa-envelope-o" />
                  </div>
                  <div className="form-group position-relative mb-4">
                    <input
                      type="password"
                      className="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <i className="fa fa-key" />
                  </div>
                  <div className="form-group position-relative mb-4">
                    <input
                      type="password"
                      className="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none"
                      id="confirmpass"
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <i className="fa fa-key" />
                  </div>
                  <div className="accept">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={termsAgreed}
                      onChange={() => setTermsAgreed(!termsAgreed)}
                    />
                    <label htmlFor="terms">I agree to the terms of service</label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success btn-block shadow border-0 py-2 text-uppercase"
                  >
                    Create
                  </button>
                  <p className="text-center mt-5">
                    Already Registered?
                    <a href="/login">Login</a>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div>
                  <img
                    src="https://img.freepik.com/premium-wektory/szczesliwy-usmiechniety-wlasciciel-piekarz-kucharz-mezczyzn-postac-otwierajaca-kawiarnie-i-witamy-ilustracje_133260-570.jpg?w=2000"
                    width="500px"
                    alt="Signup Illustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Signup;

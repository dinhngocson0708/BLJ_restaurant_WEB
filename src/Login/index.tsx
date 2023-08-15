import { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!email) {
      alert("Vui lòng nhập email");
      return;
    }

    if (!password) {
      alert("Vui lòng nhập mật khẩu");
      return;
    }
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      const userData = users.find((user: { email: string; }) => user.email === email);

      if (userData && userData.password === password) {
        alert("Đăng nhập thành công");
        localStorage.setItem('loggedInUsername', userData.username);
        window.location.href = "http://localhost:3000/";
      } else {
        if (userData) {
          alert("Sai mật khẩu, vui lòng nhập lại");
        } else {
          alert("Email không tồn tại");
        }
      }
    } else {
      alert("Đăng nhập thất bại, vui lòng thử lại");
    }
};

  return (
    <div className='formlogin'>
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <form className="col-md-9" onSubmit={handleLogin}>
        <div className="AppForm shadow-lg">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="AppFormLeft">
                  <h1>Login</h1>
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
                  <div className="row  mt-4 mb-4">
                    <div className="col-md-6">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 text-right">
                      <a href="#">Forgot Password?</a>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success btn-block shadow border-0 py-2 text-uppercase"
                  >
                    Login
                  </button>
                  <p className="text-center mt-5">
                    Don't have an account?
                    <a href="/signup">Create your account</a>
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src="https://img.freepik.com/free-vector/cafe-terrace-with-welcome-message_23-2147503932.jpg?w=2000"
                  width="500px"
                  alt="Login Illustration"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;


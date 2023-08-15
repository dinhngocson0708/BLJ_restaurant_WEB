const Logout = () => {
    localStorage.removeItem('loggedInUsername');
    alert('Đăng xuất tài khoản thành công');
    window.location.href = 'http://localhost:3000/';
    return null;
}

export default Logout;

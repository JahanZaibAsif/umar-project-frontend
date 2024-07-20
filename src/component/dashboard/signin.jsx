import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/admin_login`, formData);
      console.log('Login successful:', response.data);
      const { token, data } = response.data;
      localStorage.setItem('token', token); // Store token in local storage
      localStorage.setItem('user', JSON.stringify(data)); // Store user data if needed
      Swal.fire({
        icon: 'success',
        title: 'Logged In!',
        text: 'You have successfully logged in!',
      });
      navigate('/dashboard'); // Navigate to the dashboard
    } catch (error) {
      console.error('Error during login:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Invalid email or password. Please try again.',
      });
    }
  };

  return (
    <div className="container-fluid position-relative bg-white d-flex p-0">
      {/* Sign In Start */}
      <div className="container-fluid">
        <div
          className="row h-100 align-items-center justify-content-center"
          style={{ minHeight: '100vh' }}
        >
          <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h3>Sign In</h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button type="submit" className="btn btn-primary py-3 w-100 mb-4">
                  Sign In
                </button>
              </form>
              <p className="text-center mb-0">
                Don't have an Account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Sign In End */}
    </div>
  );
};

export default SignIn;

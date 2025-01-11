import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { apiLogin } from '../services/auth';
import { toast, ToastContainer } from 'react-toastify';
import Illustration from '../assets/images/cup_object.svg';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await apiLogin({ email, password });
      const token = response.data.token;
      localStorage.setItem('token', token);

      toast.success('Login successful!', {
        position: 'top-right',
        autoClose: 5000,
      });

      navigate('/');
    } catch (err) {
      setError('Invalid email or password.');
      toast.error('Login failed. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-cyan-50 flex items-center justify-center">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full gap-1">
          {/* Illustration */}
          <div className="w-full md:w-1/2 p-1 flex items-center justify-center" style={{ padding: '4px' }}>
            <img
              src={Illustration}
              alt="Login Illustration"
              className="max-w-full h-auto"
              style={{ margin: '0' }} // Remove unnecessary margins

            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-center text-cyan-600 mb-4">
              Welcome Back
            </h2>
            <form onSubmit={handleSubmit} className="w-full max-w-sm">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 rounded" />
                  <span className="text-gray-700">Remember Me</span>
                </label>
                <a
                  href="/forgot-password"
                  className="text-cyan-600 font-medium hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              {/* Login Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className={`w-60 bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 text-white py-2 px-4 rounded-full shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-cyan-800 transform hover:scale-105 transition duration-300 ${
                    loading ? 'opacity-50' : ''
                  }`}
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="w-5 h-5 mr-2 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                      Logging In...
                    </div>
                  ) : (
                    'Log In'
                  )}
                </button>
              </div>
            </form>
            {error && <p className="text-red-600 text-center mt-4">{error}</p>}
            <p className="text-gray-600 text-center mt-4">
              Don't have an account?{' '}
              <a
                href="/signup"
                className="text-cyan-600 font-medium hover:underline"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

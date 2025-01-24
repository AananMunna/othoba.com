import  { useState } from 'react';
import Navbar from '../layOut/Navbar';
import Breadcrumb from './BreadCumb';
import Header from '../layOut/Header';
import Footer from '../layOut/Footer';
import { Link } from 'react-router-dom';
import PhonNavbar from '../phonNavbar/PhonNavbar';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      setSuccess(false);
    } else {
      setError('');
      setSuccess(true);
      // Simulate password reset process
      setTimeout(() => {
        alert('A password reset link has been sent to your email.');
        setEmail('');
      }, 1000);
    }
  };

  return (
    <>
    <Header />
    <Navbar />
    <div className=" bg-gray-50 p-4">
          <Breadcrumb />
        </div>
    <div className="py-5 bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Forgot Password?</h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {success && !error && (
          <p className="text-green-600 text-center mb-4">
            We’ve sent you an email with instructions to reset your password.
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Send Reset Link
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Remember your password?{' '}
            <Link to="/SignIn" className="text-indigo-600 hover:text-indigo-800">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
    <Footer />
    <PhonNavbar />
    </>
  );
};

export default ForgotPassword;

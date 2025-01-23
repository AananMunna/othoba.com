import  { useState } from 'react';
import Footer from '../layOut/Footer';
import Header from '../layOut/Header';
import Navbar from '../layOut/Navbar';
import Breadcrumb from './BreadCumb';
import PhonNavbar from '../phonNavbar/PhonNavbar';

const SellOnOthoba = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    category: '',
    email: '',
    phone: '',
    address: '',
    paymentInfo: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    if (
      !formData.businessName ||
      !formData.category ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.paymentInfo
    ) {
      setError('Please fill in all fields.');
      setSuccess(false);
    } else {
      setError('');
      setSuccess(true);
      // Simulate form submission process
      setTimeout(() => {
        alert('You are now a seller on Othoba!');
        setFormData({
          businessName: '',
          category: '',
          email: '',
          phone: '',
          address: '',
          paymentInfo: '',
        });
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
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Sell on Othoba
        </h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        {success && !error && (
          <p className="text-green-600 text-center mb-4">
            Congratulations, you're now a seller!
          </p>
        )}

        <form onSubmit={handleSubmit}>
          {/* Business Name */}
          <div className="mb-4">
            <label htmlFor="businessName" className="block text-gray-700">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your business name"
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home & Living</option>
              <option value="beauty">Beauty</option>
              <option value="books">Books</option>
            </select>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700">
              Business Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your business address"
              rows="3"
            />
          </div>

          {/* Payment Information */}
          <div className="mb-4">
            <label htmlFor="paymentInfo" className="block text-gray-700">
              Payment Information (Bank Details)
            </label>
            <input
              type="text"
              id="paymentInfo"
              name="paymentInfo"
              value={formData.paymentInfo}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your bank details"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Become a Seller
          </button>
        </form>
      </div>
    </div>
    <Footer />
    <PhonNavbar />
    </>
  );
};

export default SellOnOthoba;

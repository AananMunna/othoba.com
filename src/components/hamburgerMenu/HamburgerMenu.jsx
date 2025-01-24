import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('category'); // Tracks the active section

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const switchToCategory = () => {
    setActiveSection('category');
  };

  const switchToMainMenu = () => {
    setActiveSection('mainMenu');
  };

  return (
    <div className=''>
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="text-white mb-2"
      >
        <i className="bi bi-list text-4xl"></i>
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 w-64 bg-gray-900 text-white shadow-lg transform h-full overflow-y-auto hide-scrollbar ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <button
          onClick={toggleMenu}
          className="text-gray-400 text-xl float-right m-4"
        >
          <i className="bi bi-x"></i>
        </button>
        <div className="p-4">
          {/* Section Headers */}
          <div className="flex justify-around mb-4 border-b border-gray-700 pb-2">
            <button
              onClick={switchToCategory}
              className={`font-semibold ${
                activeSection === 'category' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-400'
              } transition duration-200`}
            >
              Categories
            </button>
            <button
              onClick={switchToMainMenu}
              className={`font-semibold ${
                activeSection === 'mainMenu' ? 'text-blue-400 border-b-2 border-blue-400' : 'hover:text-blue-400'
              } transition duration-200`}
            >
              Main Menu
            </button>
          </div>

          {/* Category Section */}
          <div
            className={`transition-opacity duration-300 ${
              activeSection === 'category' ? 'opacity-100 block' : 'opacity-0 hidden'
            }`}
          >
            <ul className="text-sm">
              <li className="mt-2 hover:text-blue-400 flex items-center gap-2">
                <i className="bi bi-basket"></i>
                <Link to="/shop">Food & Grocery</Link>
              </li>
              <li className="mt-2 hover:text-blue-400 flex items-center gap-2">
                <i className="bi bi-person-standing-dress"></i>
                <Link to="/shop">Electronics</Link>
              </li>
              <li className="mt-2 hover:text-blue-400 flex items-center gap-2">
                <i className="bi bi-house"></i>
                <Link to="/shop">Fashion</Link>
              </li>
              <li className="mt-2 hover:text-blue-400 flex items-center gap-2">
                <i className="bi bi-house"></i>
                <Link to="/shop">Home Appliances</Link>
              </li>
              <li className="mt-2 hover:text-blue-400 flex items-center gap-2">
                <i className="bi bi-book"></i>
                <Link to="/shop">Books</Link>
              </li>
            </ul>
          </div>

          {/* Main Menu Section */}
          <div
            className={`transition-opacity duration-300 ${
              activeSection === 'mainMenu' ? 'opacity-100 block' : 'opacity-0 hidden'
            }`}
          >
            <div className="mb-10">
              <h3 className='font-bold mb-4 uppercase'>Company</h3>
              <ul className='text-sm'>
                <li className='mt-3 hover:text-blue-400 flex items-center gap-2'>
                  <i className="bi bi-info-circle"></i>
                  <Link to="/aboutUs">About Us</Link>
                </li>
                <li className='mt-3 hover:text-blue-400 flex items-center gap-2'>
                  <i className="bi bi-briefcase"></i>
                  <Link to="/career">Career</Link>
                </li>
                <li className='mt-3 hover:text-blue-400 flex items-center gap-2'>
                  <i className="bi bi-envelope"></i>
                  <Link to="/contactUs">Contact Us</Link>
                </li>
                <li className='mt-3 hover:text-blue-400 flex items-center gap-2'>
                  <i className="bi bi-shield"></i>
                  <Link to="/CancellationAndReturns">Privacy Policy</Link>
                </li>
                <li className='mt-3 hover:text-blue-400 flex items-center gap-2'>
                  <i className="bi bi-award"></i>
                  <Link to="/OthobaCertificate">Othoba Certified</Link>
                </li>
                <li className='mt-3 hover:text-blue-400 flex items-center gap-2'>
                  <i className="bi bi-file-earmark-text"></i>
                  <Link to="/CancellationAndReturns">Terms & Condition</Link>
                </li>
                <li className='mt-3 hover:text-blue-400 flex items-center gap-2'>
                  <i className="bi bi-truck"></i>
                  <Link to="/NextDayDeliveryTC">Next/Same day delivery TC</Link>
                </li>
              </ul>
            </div>
            <div className="mb-10">
              <h3 className='font-bold mb-4 uppercase'>My Account</h3>
              <ul className='text-sm'>
                <li className='mt-3 hover:text-blue-400 flex items-center gap-2'>
                  <i className="bi bi-box"></i>
                  <Link to="/OrdersPage">Orders</Link>
                </li>
                <li className='mt-3 hover:text-blue-400 flex items-center gap-2'>
                  <i className="bi bi-geo-alt"></i>
                  <Link to="/AddressPage">Addresses</Link>
                </li>
                <li className='mt-3 hover:text-blue-400 flex items-center gap-2'>
                  <i className="bi bi-heart"></i>
                  <Link to="/wishList">My Wishlist</Link>
                </li>
                <li className='mt-3 hover:text-blue-400 flex items-center gap-2'>
                  <i className="bi bi-clock-history"></i>
                  <Link to="/OrderHistory">Order History</Link>
                </li>
                <li className='mt-3 hover:text-blue-400 flex items-center gap-2'>
                  <i className="bi bi-binoculars"></i>
                  <Link to="/TrackMyOrder">Track My Order</Link>
                </li>
              </ul>
            </div>
            <div className="mb-10">
              <h3 className='font-bold mb-4 uppercase'>Customer Service</h3>
              <ul className='text-sm'>
                <li className='mt-3 hover:text-blue-400 flex items-center gap-2'>
                  <i className="bi bi-credit-card"></i>
                  <Link to="/PaymentMethods">Payment Methods</Link>
                </li>
                <li className='mt-3 hover:text-blue-400 flex items-center gap-2'>
                  <i className="bi bi-headset"></i>
                  <Link to="/SupportCenter">Support Center</Link>
                </li>
                <li className='mt-3 hover:text-blue-400 flex items-center gap-2'>
                  <i className="bi bi-cart"></i>
                  <Link to="/HowToShopOnOthoba">How To Shop On Othoba</Link>
                </li>
                <li className='mt-3 hover:text-blue-400 flex items-center gap-2'>
                  <i className="bi bi-star"></i>
                  <Link to="/FeaturedRecommendations">Featured Recommendation</Link>
                </li>
                <li className='mt-3 hover:text-blue-400 flex items-center gap-2'>
                  <i className="bi bi-arrow-repeat"></i>
                  <Link to="/CancellationAndReturns">Cancellation, Return & Refund</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-30"
        ></div>
      )}
    </div>
  );
};

export default HamburgerMenu;

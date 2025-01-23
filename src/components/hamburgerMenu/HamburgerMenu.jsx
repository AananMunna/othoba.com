import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className=" text-white"
      >
        <i className="bi bi-list text-3xl"></i>
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-800 text-xl float-right"
          >
            <i className="bi bi-x"></i>
          </button>
          <h2 className="text-lg font-bold mb-4">Menu</h2>

          {/* Category Section */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Category</h3>
            <ul className="text-sm text-gray-600">
              <li className="mt-2 hover:text-blue-600">
                <Link to="/category/electronics">Electronics</Link>
              </li>
              <li className="mt-2 hover:text-blue-600">
                <Link to="/category/fashion">Fashion</Link>
              </li>
              <li className="mt-2 hover:text-blue-600">
                <Link to="/category/home-appliances">Home Appliances</Link>
              </li>
              <li className="mt-2 hover:text-blue-600">
                <Link to="/category/books">Books</Link>
              </li>
              <li className="mt-2 hover:text-blue-600">
                <Link to="/category/toys">Toys</Link>
              </li>
            </ul>
          </div>

          {/* Main Menu Section */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Main Menu</h3>
            <ul className="text-sm text-gray-600">
              <li className="mt-2 hover:text-blue-600">
                <Link to="/aboutUs">About Us</Link>
              </li>
              <li className="mt-2 hover:text-blue-600">
                <Link to="/career">Career</Link>
              </li>
              <li className="mt-2 hover:text-blue-600">
                <Link to="/contactUs">Contact Us</Link>
              </li>
              <li className="mt-2 hover:text-blue-600">
                <Link to="/CancellationAndReturns">Privacy Policy</Link>
              </li>
              <li className="mt-2 hover:text-blue-600">
                <Link to="/OthobaCertificate">Othoba Certified</Link>
              </li>
              <li className="mt-2 hover:text-blue-600">
                <Link to="/OrdersPage">Orders</Link>
              </li>
              <li className="mt-2 hover:text-blue-600">
                <Link to="/TrackMyOrder">Track My Order</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Overlay (optional, for when menu is open) */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-25 z-30"
        ></div>
      )}
    </div>
  );
};

export default HamburgerMenu;

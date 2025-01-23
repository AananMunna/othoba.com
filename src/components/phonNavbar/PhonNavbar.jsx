import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PhonNavbar = () => {
  const location = useLocation(); // Get the current route

  const getActiveClass = (path) =>
    location.pathname === path ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white' : '';

  return (
    <div className="fixed bottom-0 left-0 right-0 text-center p-2 bg-white flex items-center justify-around text-[#666666] border-t z-50 md:hidden">
      <Link
        to="/AccountPage"
        className={`px-3 py-1 rounded-md ${getActiveClass('/AccountPage')}`}
      >
        <i className="bi bi-house text-2xl"></i>
        <p className="text-xs uppercase">Account</p>
      </Link>
      <Link
        to="/shop"
        className={`px-3 py-1 rounded-md ${getActiveClass('/shop')}`}
      >
        <i className="bi bi-list-task text-2xl"></i>
        <p className="text-xs uppercase">Shop</p>
      </Link>
      <Link
        to="/"
        className={`px-3 py-1 rounded-md ${getActiveClass('/')}`}
      >
        <i className="bi bi-person text-2xl"></i>
        <p className="text-xs uppercase">Home</p>
      </Link>
      <Link
        to="/cart"
        className={`px-3 py-1 rounded-md ${getActiveClass('/cart')}`}
      >
        <i className="bi bi-bag text-2xl"></i>
        <p className="text-xs uppercase">Cart</p>
      </Link>
      <Link
        to="/ProductSearchPage"
        className={`px-3 py-1 rounded-md ${getActiveClass('/ProductSearchPage')}`}
      >
        <i className="bi bi-search text-2xl"></i>
        <p className="text-xs uppercase">Search</p>
      </Link>
    </div>
  );
};

export default PhonNavbar;

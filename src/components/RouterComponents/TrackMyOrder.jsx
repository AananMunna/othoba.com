import React from 'react';
import Footer from '../layOut/Footer';
import PhonNavbar from '../phonNavbar/PhonNavbar';
import Header from '../layOut/Header';
import Navbar from '../layOut/Navbar';
import Breadcrumb from './BreadCumb';

const TrackMyOrder = () => {
  return (
    <>
    <Header />
    <Navbar />
    <div className=" bg-gray-50 p-4">
          <Breadcrumb />
        </div>
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Track My Order</h1>

        <form className="space-y-4">
          <div className="">
            <label htmlFor="orderID" className="block text-sm font-medium text-gray-700">
              Order ID
            </label>
            <input
              type="text"
              id="orderID"
              name="orderID"
              placeholder="Enter your order ID"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
          >
            Track Order
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Status</h2>
          <div className="border rounded-lg p-4">
            <p className="text-gray-600">
              Enter your Order ID and Email Address to view the current status of your order.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <PhonNavbar />
    </>
  );
};

export default TrackMyOrder;

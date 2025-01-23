import React from 'react';
import Footer from '../layOut/Footer';
import PhonNavbar from './../phonNavbar/PhonNavbar';
import Header from '../layOut/Header';
import Navbar from '../layOut/Navbar';
import Breadcrumb from './BreadCumb';

const AddressPage = () => {
  return (
    <>
    <Header />
    <Navbar />
    <div className=" bg-gray-50 p-4">
          <Breadcrumb />
        </div>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Your Addresses</h1>
          <p className="text-gray-600 mt-2">Manage your saved addresses for faster checkout.</p>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">Home Address</h2>
            <p className="text-gray-700 mt-1">123 Main Street, Apartment 4B, Springfield, IL 62704</p>
            <p className="text-gray-700">United States</p>
            <div className="mt-4 flex gap-4">
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">Edit</button>
              <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200">Delete</button>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">Office Address</h2>
            <p className="text-gray-700 mt-1">456 Elm Street, Suite 300, Chicago, IL 60601</p>
            <p className="text-gray-700">United States</p>
            <div className="mt-4 flex gap-4">
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">Edit</button>
              <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200">Delete</button>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">Other Address</h2>
            <p className="text-gray-700 mt-1">789 Maple Drive, Unit 12, Naperville, IL 60540</p>
            <p className="text-gray-700">United States</p>
            <div className="mt-4 flex gap-4">
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">Edit</button>
              <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200">Delete</button>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition duration-200">
              Add New Address
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <PhonNavbar />
    </>
  );
};

export default AddressPage;

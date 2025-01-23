import React, { useState } from 'react';
import Footer from './../layOut/Footer';
import PhonNavbar from '../phonNavbar/PhonNavbar';
import Header from './../layOut/Header';
import Navbar from './../layOut/Navbar';
import Breadcrumb from './BreadCumb';

const AccountPage = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    address: '1234 Elm Street, Springfield, USA',
    orders: [
      { id: 1, date: '2025-01-01', total: 120.5, status: 'Delivered' },
      { id: 2, date: '2025-01-15', total: 75.0, status: 'In Transit' },
      { id: 3, date: '2025-01-20', total: 45.99, status: 'Pending' },
    ],
  });

  const handleUpdateProfile = () => {
    alert('Profile updated successfully!');
  };

  const handleLogout = () => {
    alert('Logged out successfully!');
  };

  return (
    <>
    <Header />
    <Navbar />
    <div className=" bg-gray-50 p-4">
          <Breadcrumb />
        </div>

    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Account</h1>

        <div className="border-b pb-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile Information</h2>
          <p className="text-gray-600">Name: {user.name}</p>
          <p className="text-gray-600">Email: {user.email}</p>
          <p className="text-gray-600">Phone: {user.phone}</p>
          <p className="text-gray-600">Address: {user.address}</p>
          <button
            onClick={handleUpdateProfile}
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Update Profile
          </button>
        </div>

        <div className="border-b pb-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Order History</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="border-b py-2 px-4">Order ID</th>
                  <th className="border-b py-2 px-4">Date</th>
                  <th className="border-b py-2 px-4">Total</th>
                  <th className="border-b py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {user.orders.map((order) => (
                  <tr key={order.id}>
                    <td className="border-b py-2 px-4">#{order.id}</td>
                    <td className="border-b py-2 px-4">{order.date}</td>
                    <td className="border-b py-2 px-4">${order.total.toFixed(2)}</td>
                    <td className="border-b py-2 px-4">{order.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
    
    <Footer />
    <PhonNavbar />
    </>
  );
};

export default AccountPage;

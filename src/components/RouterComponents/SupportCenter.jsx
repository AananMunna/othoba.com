import React from 'react';
import Footer from '../layOut/Footer';
import PhonNavbar from '../phonNavbar/PhonNavbar';
import Header from '../layOut/Header';
import Navbar from '../layOut/Navbar';
import Breadcrumb from './BreadCumb';

const SupportCenter = () => {
  return (
    <>
    <Header />
    <Navbar />
    <div className=" bg-gray-50 p-4">
          <Breadcrumb />
        </div>
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Support Center</h1>
        <p className="text-gray-600 mb-8">
          We're here to help! Browse the topics below to find answers to your questions or get in touch with our support team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Order Issues */}
          <div className="flex flex-col items-center border rounded-lg p-6 hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3850/3850410.png"
              alt="Order Issues"
              className="h-16 mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-700">Order Issues</h2>
            <p className="text-gray-500 text-center mt-2">
              Problems with your order? Track, cancel, or modify it here.
            </p>
          </div>

          {/* Returns & Refunds */}
          <div className="flex flex-col items-center border rounded-lg p-6 hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1570/1570887.png"
              alt="Returns & Refunds"
              className="h-16 mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-700">Returns & Refunds</h2>
            <p className="text-gray-500 text-center mt-2">
              Learn about our return and refund policies.
            </p>
          </div>

          {/* Payment & Billing */}
          <div className="flex flex-col items-center border rounded-lg p-6 hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
              alt="Payment & Billing"
              className="h-16 mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-700">Payment & Billing</h2>
            <p className="text-gray-500 text-center mt-2">
              Manage your payment methods and billing details.
            </p>
          </div>

          {/* Account Management */}
          <div className="flex flex-col items-center border rounded-lg p-6 hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
              alt="Account Management"
              className="h-16 mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-700">Account Management</h2>
            <p className="text-gray-500 text-center mt-2">
              Update your account information and preferences.
            </p>
          </div>

          {/* Technical Support */}
          <div className="flex flex-col items-center border rounded-lg p-6 hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2085/2085579.png"
              alt="Technical Support"
              className="h-16 mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-700">Technical Support</h2>
            <p className="text-gray-500 text-center mt-2">
              Facing technical issues? Get assistance here.
            </p>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center border rounded-lg p-6 hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
              alt="Contact Us"
              className="h-16 mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-700">Contact Us</h2>
            <p className="text-gray-500 text-center mt-2">
              Need further help? Reach out to our customer support team.
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

export default SupportCenter;

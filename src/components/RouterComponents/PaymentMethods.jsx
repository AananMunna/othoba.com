import React from 'react';
import Footer from '../layOut/Footer';
import PhonNavbar from '../phonNavbar/PhonNavbar';
import Header from '../layOut/Header';
import Navbar from '../layOut/Navbar';
import Breadcrumb from './BreadCumb';

const PaymentMethods = () => {
  return (
    <>
    <Header />
    <Navbar />
    <div className=" bg-gray-50 p-4">
          <Breadcrumb />
        </div>
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Payment Methods</h1>
        <p className="text-gray-600 mb-8">
          Choose from a variety of secure and convenient payment methods to complete your purchase.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* bKash */}
          <div className="flex flex-col items-center border rounded-lg p-4 hover:shadow-lg transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/BKash_Logo.svg/1200px-BKash_Logo.svg.png"
              alt="bKash"
              className="h-16 mb-3"
            />
            <h2 className="text-lg font-semibold text-gray-700">bKash</h2>
          </div>

          {/* Visa */}
          <div className="flex flex-col items-center border rounded-lg p-4 hover:shadow-lg transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="h-16 mb-3"
            />
            <h2 className="text-lg font-semibold text-gray-700">Visa</h2>
          </div>

          {/* UPay */}
          <div className="flex flex-col items-center border rounded-lg p-4 hover:shadow-lg transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Upay_Logo.png"
              alt="Upay"
              className="h-16 mb-3"
            />
            <h2 className="text-lg font-semibold text-gray-700">Upay</h2>
          </div>

          {/* Nagad */}
          <div className="flex flex-col items-center border rounded-lg p-4 hover:shadow-lg transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Nagad_logo.svg/2560px-Nagad_logo.svg.png"
              alt="Nagad"
              className="h-16 mb-3"
            />
            <h2 className="text-lg font-semibold text-gray-700">Nagad</h2>
          </div>

          {/* MasterCard */}
          <div className="flex flex-col items-center border rounded-lg p-4 hover:shadow-lg transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              alt="MasterCard"
              className="h-16 mb-3"
            />
            <h2 className="text-lg font-semibold text-gray-700">MasterCard</h2>
          </div>

          {/* American Express */}
          <div className="flex flex-col items-center border rounded-lg p-4 hover:shadow-lg transition">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/American_Express_logo_%282018%29.svg/2560px-American_Express_logo_%282018%29.svg.png"
              alt="American Express"
              className="h-16 mb-3"
            />
            <h2 className="text-lg font-semibold text-gray-700">American Express</h2>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <PhonNavbar />
    </>
  );
};

export default PaymentMethods;

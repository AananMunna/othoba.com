import React from 'react';
import Footer from '../layOut/Footer';
import PhonNavbar from '../phonNavbar/PhonNavbar';
import Header from '../layOut/Header';
import Navbar from '../layOut/Navbar';
import Breadcrumb from './BreadCumb';

const OthobaCertificate = () => {
  return (
    <>
    <Header />
    <Navbar />
    <div className=" bg-gray-50 p-4">
          <Breadcrumb />
        </div>
    <div className="min-h-screen bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">Othoba Certificate</h1>
          <p className="text-gray-600">Certified for Excellence in Quality and Service</p>
        </div>
        <div className="border-t-2 border-gray-300 py-6 px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-700">Certificate of Appreciation</h2>
          <p className="text-lg text-gray-500 mt-4">This is to certify that</p>
          <h3 className="text-2xl font-bold text-gray-900 mt-2">[Recipient's Name]</h3>
          <p className="text-gray-500 mt-2">
            has demonstrated outstanding performance and unwavering commitment in their contributions
            to the Othoba platform. Their exceptional efforts have greatly enhanced customer satisfaction
            and upheld our core values of quality and excellence.
          </p>
          <p className="text-gray-600 mt-4 italic">Issued on: [Date]</p>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="text-left">
            <h4 className="font-semibold text-gray-800">Authorized Signature</h4>
            <p className="text-gray-600">__________________________</p>
            <p className="text-gray-500">[Signature Name]</p>
          </div>
          <div className="text-right">
            <h4 className="font-semibold text-gray-800">Seal</h4>
            <div className="w-20 h-20 border border-gray-400 rounded-full mx-auto"></div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Print Certificate
          </button>
        </div>
      </div>
    </div>
    <Footer />
    <PhonNavbar />
    </>
  );
};

export default OthobaCertificate;

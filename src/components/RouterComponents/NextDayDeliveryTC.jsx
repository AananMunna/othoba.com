import React from 'react';
import Footer from '../layOut/Footer';
import PhonNavbar from '../phonNavbar/PhonNavbar';
import Header from '../layOut/Header';
import Navbar from '../layOut/Navbar';
import Breadcrumb from './BreadCumb';
import { Link } from 'react-router-dom';

const NextDayDeliveryTC = () => {
  return (
    <>
    <Header />
    <Navbar />
    <div className=" bg-gray-50 p-4">
          <Breadcrumb />
        </div>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Next/Same Day Delivery Terms & Conditions</h1>
          <p className="text-gray-600 mt-2">
            Please read the terms and conditions carefully before opting for Next/Same Day Delivery services.
          </p>
        </div>

        <div className="text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">Eligibility</h2>
            <p>
              Next/Same Day Delivery is available for select products and locations. Availability is determined
              during the checkout process based on your delivery address and the product's eligibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">Order Cutoff Time</h2>
            <p>
              Orders must be placed before the cutoff time, typically 2:00 PM local time, to qualify for Next/Same Day Delivery.
              Orders placed after the cutoff time will be processed for delivery on the next eligible business day.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">Delivery Fees</h2>
            <p>
              A nominal fee may apply for Next/Same Day Delivery services. The fee will be clearly displayed during the checkout process.
              Free delivery promotions may not apply to expedited services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">Delivery Commitment</h2>
            <p>
              While we strive to meet the delivery timeline, delays may occur due to unforeseen circumstances such as weather,
              traffic, or logistical issues. In such cases, we will notify you as soon as possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">Refund Policy</h2>
            <p>
              If we fail to deliver your order on the promised date, you may be eligible for a refund of the delivery fee.
              Please contact our customer support for assistance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">Customer Responsibility</h2>
            <p>
              Ensure that someone is available at the delivery address to receive the package. If delivery fails due to
              unavailability, redelivery charges may apply.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            <p>
              For further questions or concerns, please contact our customer support team at
              <a href="mailto:support@example.com" className="text-blue-500 hover:underline"> support@example.com</a> or call us at
              <a href="tel:+1234567890" className="text-blue-500 hover:underline"> +1 (234) 567-890</a>.
            </p>
          </section>
        </div>

        <div className="text-center mt-10">
            <Link  to='/shop'>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
            Go Back to Shopping
          </button>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    <PhonNavbar />
    </>
  );
};

export default NextDayDeliveryTC;

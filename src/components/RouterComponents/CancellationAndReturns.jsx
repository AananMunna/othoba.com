import React from "react";
import Footer from "../layOut/Footer";
import PhonNavbar from "../phonNavbar/PhonNavbar";
import Header from "../layOut/Header";
import Navbar from "../layOut/Navbar";
import Breadcrumb from "./BreadCumb";

const CancellationAndReturns = () => {
  return (
    <>
    <Header />
    <Navbar />
    <div className=" bg-gray-50 p-4">
          <Breadcrumb />
        </div>
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Cancellation & Returns, Privacy Policy, EMI Policy, Customer Support
        </h1>

        {/* Introduction */}
        <p className="text-lg text-gray-600 mb-6 text-center">
          We understand that sometimes a product may not meet your expectations. 
          Our hassle-free cancellation and return policy ensures you can shop with confidence.
        </p>

        {/* Section: When to Request a Return */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            When Can You Request a Return?
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>The product is damaged or defective upon delivery.</li>
            <li>The product you received does not match the description.</li>
            <li>You received the wrong product.</li>
            <li>The product is missing accessories or parts.</li>
          </ul>
        </div>

        {/* Section: Cancellation Policy */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Cancellation Policy
          </h2>
          <p className="text-gray-600">
            Orders can be canceled anytime before they are shipped. 
            To cancel an order:
          </p>
          <ol className="list-decimal list-inside text-gray-600 mt-2 space-y-2">
            <li>Log in to your account.</li>
            <li>Go to the "My Orders" section.</li>
            <li>Select the order you want to cancel and click "Cancel Order".</li>
          </ol>
          <p className="text-gray-600 mt-4">
            Once an order is shipped, cancellations are not allowed. However, 
            you can initiate a return after the product is delivered.
          </p>
        </div>

        {/* Section: How to Return a Product */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How to Return a Product
          </h2>
          <p className="text-gray-600">
            To return a product, follow these steps:
          </p>
          <ol className="list-decimal list-inside text-gray-600 mt-2 space-y-2">
            <li>Log in to your account.</li>
            <li>Navigate to the "My Orders" section.</li>
            <li>Choose the product you want to return and click "Return".</li>
            <li>Select the reason for the return and upload any supporting images if applicable.</li>
            <li>Pack the product securely and await pickup or drop it off at the nearest return center.</li>
          </ol>
        </div>

        {/* Section: Refund Process */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Refund Process
          </h2>
          <p className="text-gray-600">
            Refunds are processed after the returned product passes quality inspection. 
            Refund timelines:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Refund to original payment method: 7-10 business days.</li>
            <li>Refund as store credit: Within 3 business days.</li>
          </ul>
        </div>

        {/* Section: Need Help? */}
        <div className="bg-indigo-100 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-indigo-800 mb-4">
            Need Help?
          </h2>
          <p className="text-gray-600">
            If you have any questions about our cancellation and return policies, feel free to contact us:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
            <li>Email: <a href="mailto:support@company.com" className="text-indigo-600 underline">support@company.com</a></li>
            <li>Phone: <a href="tel:+123456789" className="text-indigo-600 underline">+123 456 789</a></li>
            <li>Live Chat: Available on our website 24/7.</li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
    <PhonNavbar />
    </>
  );
};

export default CancellationAndReturns;

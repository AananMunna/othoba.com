import React from 'react';
import Footer from '../layOut/Footer';
import PhonNavbar from '../phonNavbar/PhonNavbar';
import Header from '../layOut/Header';
import Navbar from '../layOut/Navbar';
import Breadcrumb from './BreadCumb';
import { Link } from 'react-router-dom';

const HowToShopOnOthoba = () => {
  return (
    
    <>
    <Header />
    <Navbar />
    <div className=" bg-gray-50 p-4">
          <Breadcrumb />
        </div>
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">How to Shop on Othoba</h1>
        <p className="text-gray-600 mb-8">
          Follow this comprehensive guide to easily shop on Othoba and enjoy a seamless shopping experience.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 1: Create an Account</h2>
            <p className="text-gray-600">
              Visit the <Link to="/register" className="text-blue-600 hover:underline">Registration Page</Link> and fill in the required details, including your name, email address, and password. Once completed, click "Sign Up" to create your account.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 2: Browse Products</h2>
            <p className="text-gray-600">
              Use the search bar at the top of the homepage or navigate through categories to find the products you need. You can also filter products by price, brand, and ratings for a more refined search.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 3: Add to Cart</h2>
            <p className="text-gray-600">
              Once you find a product you like, click on it to view more details. Select the desired quantity and click "Add to Cart" to save it for later purchase.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 4: Review Your Cart</h2>
            <p className="text-gray-600">
              Click on the cart icon at the top of the page to view all the items you have added. Make sure to check the quantities and total price before proceeding.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 5: Proceed to Checkout</h2>
            <p className="text-gray-600">
              When you are ready to purchase, click the "Checkout" button in your cart. You will be prompted to log in if you haven’t already.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 6: Enter Shipping Details</h2>
            <p className="text-gray-600">
              Provide your shipping address and contact information. Ensure all details are accurate to avoid any delays in delivery.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 7: Choose a Payment Method</h2>
            <p className="text-gray-600">
              Select your preferred payment method, such as bKash, Visa, Mastercard, or cash on delivery. Follow the prompts to complete your payment securely.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 8: Confirm Your Order</h2>
            <p className="text-gray-600">
              Review all the details, including the items, shipping address, and payment method. Once satisfied, click "Confirm Order."
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Step 9: Track Your Order</h2>
            <p className="text-gray-600">
              After placing your order, you can track its status through the <Link to="/trackMyOrder" className="text-blue-600 hover:underline">Track My Order</Link> page. Simply enter your order ID to view updates.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Need Help?</h2>
          <p className="text-gray-600">
            If you have any questions or need assistance, visit our <Link to="/supportCenter" className="text-blue-600 hover:underline">Support Center</Link> or contact us directly.
          </p>
        </div>
      </div>
    </div>
    
    <Footer />
    <PhonNavbar />
    </>
  );
};

export default HowToShopOnOthoba;

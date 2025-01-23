import React from "react";
import Header from './../layOut/Header';
import Navbar from './../layOut/Navbar';
import Breadcrumb from "./BreadCumb";
import Footer from "../layOut/Footer";
import PhonNavbar from "../phonNavbar/PhonNavbar";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
    <Header />
    <Navbar />
    <div className=" bg-gray-50 p-4">
          <Breadcrumb />
        </div>
    <div className="about-us container mx-auto px-4 py-10">
      {/* Header Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">
          Welcome to [Your eCommerce Name], your one-stop destination for all your shopping needs. 
          We’re passionate about providing the best products and exceptional service to our customers.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-10">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At [Your eCommerce Name], our mission is to simplify your shopping experience 
            by bringing quality, value, and variety under one virtual roof. 
            We believe in empowering our customers by providing a seamless, secure, 
            and enjoyable online shopping journey.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center border p-6 rounded-lg shadow-lg">
            <i className="bi bi-basket2-fill text-blue-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Wide Product Range</h3>
            <p className="text-gray-600">
              Discover a vast array of products across multiple categories, from fashion to electronics.
            </p>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center text-center border p-6 rounded-lg shadow-lg">
            <i className="bi bi-truck text-green-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Enjoy quick and reliable shipping, ensuring your orders reach your doorstep on time.
            </p>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center text-center border p-6 rounded-lg shadow-lg">
            <i className="bi bi-shield-check text-yellow-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Shopping</h3>
            <p className="text-gray-600">
              Shop with confidence knowing that your personal data and transactions are protected.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="mb-10">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Founded in [Year], [Your eCommerce Name] started with a vision to make online shopping 
            accessible and convenient for everyone. Over the years, we have grown to become a trusted name 
            in the industry, known for our commitment to quality and customer satisfaction. 
            Every product in our store has been handpicked to meet the diverse needs of our customers.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Us Today</h2>
        <p className="text-gray-600 text-lg mb-6">
          Experience the joy of hassle-free shopping and become a part of our growing community.
        </p>
        <Link
          to="/shop"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Start Shopping
        </Link>
      </section>
    </div>
    <Footer />
    <PhonNavbar />
    </>
  );
};

export default AboutUs;

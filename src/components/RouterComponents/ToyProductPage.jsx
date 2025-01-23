import React, { useState } from 'react';
import Footer from '../layOut/Footer';
import Header from '../layOut/Header';
import Navbar from '../layOut/Navbar';
import Breadcrumb from './BreadCumb';
import PhonNavbar from '../phonNavbar/PhonNavbar';
import { Link } from 'react-router-dom';

const ToyProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  // Sample products data (10 toys)
  const toys = [
    { id: 1, name: 'Toy Car', price: 29.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Action Figure', price: 19.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Doll', price: 24.99, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Building Blocks', price: 39.99, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Toy Train', price: 49.99, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Plush Bear', price: 14.99, image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Puzzles', price: 12.99, image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Toy Helicopter', price: 34.99, image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'RC Car', price: 59.99, image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Toy Robot', price: 69.99, image: 'https://via.placeholder.com/150' },
  ];

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
    <Header />
    <Navbar />
    <div className=" bg-gray-50 p-4">
          <Breadcrumb />
        </div>
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Toy Collection</h1>

        {/* Toy Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {toys.map((toy) => (
            <div key={toy.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={toy.image} alt={toy.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{toy.name}</h3>
                <p className="text-gray-600 text-lg mb-4">${toy.price.toFixed(2)}</p>
                <Link to='/cart'>
                <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
                  Add to Cart
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Toy Details Section */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Selected Toy: {toys[0].name}</h2>

          {/* Toy Image */}
          <div className="flex justify-center mb-6">
            <img src={toys[0].image} alt={toys[0].name} className="w-64 h-64 object-cover rounded-lg shadow-lg" />
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <button
              onClick={handleDecrease}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
            >
              -
            </button>
            <span className="text-xl font-semibold">{quantity}</span>
            <button
              onClick={handleIncrease}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <Link to="/cart">
          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 mt-6 transition duration-200">
            Add to Cart
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

export default ToyProductPage;

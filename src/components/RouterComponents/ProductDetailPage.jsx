import React, { useState } from 'react';
import Header from '../layOut/Header';
import Navbar from '../layOut/Navbar';
import Breadcrumb from './BreadCumb';
import Footer from '../layOut/Footer';
import PhonNavbar from '../phonNavbar/PhonNavbar';

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);

  // Sample product data
  const product = {
    id: 1,
    name: 'RFL Kitchen Sink',
    price: 299.99,
    description: 'A high-quality kitchen sink made from durable materials.',
    image: 'https://via.placeholder.com/500',
    specifications: [
      { label: 'Material', value: 'Stainless Steel' },
      { label: 'Dimensions', value: '22" x 18" x 8"' },
      { label: 'Weight', value: '12kg' },
      { label: 'Color', value: 'Silver' },
    ],
  };

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
        {/* Product Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">{product.name}</h1>

        {/* Product Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Product Image */}
          <div className="flex justify-center">
            <img src={product.image} alt={product.name} className="w-full max-w-md object-cover rounded-lg shadow-lg" />
          </div>

          {/* Right Side - Product Information */}
          <div>
            <p className="text-xl font-semibold text-gray-800 mb-4">${product.price.toFixed(2)}</p>

            {/* Description */}
            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Specifications */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Specifications:</h3>
              <ul className="list-disc pl-6">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="text-gray-600">{spec.label}: {spec.value}</li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4 mb-6">
              <button
                onClick={handleDecrease}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
              >
                -
              </button>
              <span className="text-lg font-semibold">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 mt-6 transition duration-200">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Shipping & Returns Section */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Shipping & Returns</h3>
          <p className="text-gray-600">
            Free standard shipping on all orders. Easy returns within 30 days. No questions asked.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    <PhonNavbar />
    </>
  );
};

export default ProductDetailPage;

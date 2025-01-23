import React from 'react';
import Footer from '../layOut/Footer';
import PhonNavbar from '../phonNavbar/PhonNavbar';
import Header from '../layOut/Header';
import Navbar from '../layOut/Navbar';
import Breadcrumb from './BreadCumb';

const ShoppingPage = () => {
  return (
    <>
    <Header />
    <Navbar />
    <div className=" bg-gray-50 p-4">
          <Breadcrumb />
        </div>
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen font-sans">
      {/* Header */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Categories Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-700">Electronics</h3>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-700">Fashion</h3>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-700">Home & Kitchen</h3>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-700">Toys & Games</h3>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((product) => (
              <div
                key={product}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src="https://via.placeholder.com/150"
                  alt="Product"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">Product Name</h3>
                  <p className="text-gray-600 mt-2">$99.99</p>
                  <button className="bg-blue-600 text-white mt-4 py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors w-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Best Sellers */}
        <section>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Best Sellers</h2>
          <div className="flex gap-6 overflow-x-scroll scrollbar-hide">
            {[1, 2, 3, 4, 5].map((product) => (
              <div
                key={product}
                className="min-w-[200px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src="https://via.placeholder.com/150"
                  alt="Product"
                  className="w-full h-36 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">Best Seller</h3>
                  <p className="text-gray-600 mt-2">$49.99</p>
                  <button className="bg-blue-600 text-white mt-4 py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors w-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 ShopEase. All rights reserved.</p>
        </div>
      </footer>
    </div>
    <Footer />
    <PhonNavbar />
    </>
  );
};

export default ShoppingPage;

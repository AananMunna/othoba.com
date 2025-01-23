import  { useState } from 'react';
import Header from '../layOut/Header';
import Navbar from '../layOut/Navbar';
import Breadcrumb from './BreadCumb';
import Footer from '../layOut/Footer';
import PhonNavbar from '../phonNavbar/PhonNavbar';

const ProductListingPage = () => {
  const [selectedBrand, setSelectedBrand] = useState('Daily Ritual');
  const [selectedCategory, setSelectedCategory] = useState('Women\'s Clothing');
  const [products] = useState([
    { id: 1, name: 'Daily Ritual Women\'s Top', brand: 'Daily Ritual', category: 'Women\'s Clothing', price: 29.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Daily Ritual Women\'s Dress', brand: 'Daily Ritual', category: 'Women\'s Clothing', price: 39.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Daily Ritual Women\'s T-Shirt', brand: 'Daily Ritual', category: 'Women\'s Clothing', price: 19.99, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Daily Ritual Women\'s Jeans', brand: 'Daily Ritual', category: 'Women\'s Clothing', price: 49.99, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Daily Ritual Women\'s Sweater', brand: 'Daily Ritual', category: 'Women\'s Clothing', price: 59.99, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Other Brand Women\'s Skirt', brand: 'Other Brand', category: 'Women\'s Clothing', price: 25.99, image: 'https://via.placeholder.com/150' },
  ]);

  const filteredProducts = products.filter(product => 
    product.brand === selectedBrand && product.category === selectedCategory
  );

  return (
    <>
    <Header />
    <Navbar />
    <div className=" bg-gray-50 p-4">
          <Breadcrumb />
        </div>
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Page Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Shop by Brand: {selectedBrand}</h2>
        
        {/* Filters */}
        <div className="flex justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Filter by Category:</h3>
            <select
              className="p-3 mt-2 border border-gray-300 rounded-md"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="Women\'s Clothing">Women\'s Clothing</option>
              <option value="Men\'s Clothing">Men\'s Clothing</option>
              <option value="Electronics">Electronics</option>
            </select>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700">Filter by Brand:</h3>
            <select
              className="p-3 mt-2 border border-gray-300 rounded-md"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="Daily Ritual">Daily Ritual</option>
              <option value="Other Brand">Other Brand</option>
            </select>
          </div>
        </div>

        {/* Product Listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  <button className="mt-4 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">No products found for this filter.</p>
          )}
        </div>
      </div>
    </div>
    <Footer />
    <PhonNavbar />
    </>
  );
};

export default ProductListingPage;

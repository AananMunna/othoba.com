import React, { useState } from "react";
import Footer from "../layOut/Footer";
import PhonNavbar from "../phonNavbar/PhonNavbar";
import Header from "../layOut/Header";
import Navbar from "../layOut/Navbar";
import Breadcrumb from "./BreadCumb";

const ProductSearchPage = () => {
  const allProducts = [
    { id: 1, name: "Apple iPhone 14", category: "Smartphones" },
    { id: 2, name: "Apple MacBook Pro", category: "Laptops" },
    { id: 3, name: "Samsung Galaxy S23", category: "Smartphones" },
    { id: 4, name: "Sony Headphones", category: "Accessories" },
    { id: 5, name: "Dell XPS 15", category: "Laptops" },
    { id: 6, name: "Nike Running Shoes", category: "Footwear" },
    { id: 7, name: "Apple Watch Series 8", category: "Wearables" },
    { id: 8, name: "Sony PlayStation 5", category: "Gaming" },
    { id: 9, name: "Samsung Smart TV", category: "Electronics" },
    { id: 10, name: "Adidas Sports Shoes", category: "Footwear" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // Handle search query changes
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter products for live suggestions
    if (query.length > 0) {
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // Execute search
  const executeSearch = () => {
    const results = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(results);
    setSuggestions([]); // Clear suggestions after search
  };

  return (
    
    <>
    <Header />
    <Navbar />
    <div className=" bg-gray-50 p-4">
          <Breadcrumb />
        </div>
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Search Products</h1>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for products..."
            className="w-full border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={executeSearch}
            className="absolute right-2 top-1 bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Search
          </button>
          {suggestions.length > 0 && (
            <ul className="absolute bg-white border border-gray-300 rounded-lg w-full mt-2 z-10">
              {suggestions.map((product) => (
                <li
                  key={product.id}
                  onClick={() => {
                    setSearchQuery(product.name);
                    setSuggestions([]);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {product.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg p-4 hover:shadow-md transition"
                >
                  <h2 className="text-lg font-semibold text-gray-700">
                    {product.name}
                  </h2>
                  <p className="text-gray-500">{product.category}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center">
              {searchQuery ? "No products found." : "Start searching for products."}
            </p>
          )}
        </div>
      </div>
    </div>
    <Footer />
    <PhonNavbar />
    </>
  );
};

export default ProductSearchPage;

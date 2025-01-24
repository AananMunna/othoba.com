import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileSearchBar = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      console.log(`Searching for "${query}" in category "${selectedCategory}"`);
      // Replace with your search logic
      // Example: Redirect to search results page
      // window.location.href = `/search?query=${query}&category=${selectedCategory}`;
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSearchSubmit} className="flex items-center bg-white rounded-lg">
        {/* Category Dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 bg-gray-200 text-black rounded-l-md focus:outline-none"
        >
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
          <option value="books">Books</option>
          <option value="toys">Toys</option>
          <option value="grocery">Grocery</option>
        </select>

        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search for products..."
          className="p-2 w-60 bg-gray-200 text-black focus:outline-none"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="p-2 bg-yellow-400 text-white rounded-r-md hover:bg-yellow-500"
        >
          <i className="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
};

export default MobileSearchBar;

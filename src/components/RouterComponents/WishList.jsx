import  { useState } from 'react';
import Footer from '../layOut/Footer';
import Header from './../layOut/Header';
import Navbar from '../layOut/Navbar';
import { Link } from 'react-router-dom';
import Breadcrumb from './BreadCumb';
import PhonNavbar from '../phonNavbar/PhonNavbar';

const WishList = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: 1, name: 'Wireless Headphones', price: '$99.99', image: 'https://www.startech.com.bd/image/cache/catalog/headphone/razer/barracuda-x/barracuda-x-white-01-228x228.webp' },
    { id: 2, name: 'Smart Watch', price: '$199.99', image: 'https://www.startech.com.bd/image/cache/catalog/smart-watch/colmi/p71/p71-04-228x228.webp' },
    { id: 3, name: 'Gaming Laptop', price: '$1,299.99', image: 'https://www.startech.com.bd/image/cache/catalog/laptop/hp-laptop/15-fb1051ax/victus-gaming-15-fb1051ax-01-228x228.webp' },
    { id: 4, name: 'Portable Speaker', price: '$49.99', image: 'https://www.startech.com.bd/image/cache/catalog/speaker/havit/sk838bt/sk838bt-01-228x228.jpg' },
  ]);

  // Function to remove an item from the wishlist
  const handleRemove = (id) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
    <Header />
    <Navbar />
    
    <div className=" bg-gray-50 p-4">
    <Breadcrumb />
    </div>
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Wish List</h1>

        {wishlistItems.length === 0 ? (
          <p className="text-center text-gray-600">Your wish list is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                  <p className="text-gray-600 mb-4">{item.price}</p>
                  <Link to="/cart">
                  <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200">
                    Move to Cart
                  </button>
                    </Link>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="w-full mt-2 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    <Footer />
    <PhonNavbar />
    </>
  );
};

export default WishList;

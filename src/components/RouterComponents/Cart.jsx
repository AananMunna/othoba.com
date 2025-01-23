import { useState } from 'react';
import 'react'
import Header from '../layOut/Header'
import Navbar from '../layOut/Navbar'
import Footer from '../layOut/Footer'
import Breadcrumb from './BreadCumb';
import PhonNavbar from '../phonNavbar/PhonNavbar';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Wireless Headphones', price: 99.99, quantity: 1, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Smart Watch', price: 199.99, quantity: 1, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Gaming Laptop', price: 1299.99, quantity: 1, image: 'https://via.placeholder.com/150' },
      ]);
    
      // Function to increase quantity
      const increaseQuantity = (id) => {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      };
    
      // Function to decrease quantity
      const decreaseQuantity = (id) => {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      };
    
      // Function to remove an item
      const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
      };
    
      // Calculate total price
      const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
  return (
    <div>
        <Header />
        <Navbar />
        <div className=" bg-gray-50 p-4">
          <Breadcrumb />
        </div>
        <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center border-b border-gray-200 py-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div className="flex-1 ml-4">
                      <h2 className="text-lg font-bold text-gray-800">
                        {item.name}
                      </h2>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="bg-gray-200 text-gray-800 px-3 py-1 rounded-l-lg hover:bg-gray-300 transition duration-200"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 border-t border-b border-gray-200">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="bg-gray-200 text-gray-800 px-3 py-1 rounded-r-lg hover:bg-gray-300 transition duration-200"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Order Summary
                </h2>
                <div className="flex justify-between text-gray-600 mb-2">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 mb-4">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <hr className="mb-4" />
                <div className="flex justify-between text-xl font-bold text-gray-800">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 mt-6 transition duration-200">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
        <Footer />
        <PhonNavbar />
    </div>
  )
}

export default Cart
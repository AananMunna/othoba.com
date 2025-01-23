import React from 'react';
import Footer from '../layOut/Footer';
import PhonNavbar from '../phonNavbar/PhonNavbar';
import Header from '../layOut/Header';
import Navbar from '../layOut/Navbar';
import Breadcrumb from './BreadCumb';

const OrderHistory = () => {
  const orders = [
    {
      id: '123456',
      date: 'Jan 10, 2025',
      total: '$149.99',
      items: 3,
      status: 'Delivered',
      details: [
        {
          name: 'Wireless Headphones',
          image: 'https://via.placeholder.com/100',
          price: '$49.99',
          quantity: 1,
        },
        {
          name: 'Smart Watch',
          image: 'https://via.placeholder.com/100',
          price: '$99.99',
          quantity: 1,
        },
      ],
    },
    {
      id: '654321',
      date: 'Jan 5, 2025',
      total: '$29.99',
      items: 1,
      status: 'In Transit',
      details: [
        {
          name: 'Portable Charger',
          image: 'https://via.placeholder.com/100',
          price: '$29.99',
          quantity: 1,
        },
      ],
    },
  ];

  return (
    <>
    <Header />
    <Navbar />
    <div className=" bg-gray-50 p-4">
          <Breadcrumb />
        </div>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Order History</h1>

        {orders.map((order) => (
          <div
            key={order.id}
            className="border-b border-gray-300 pb-4 mb-6 last:border-b-0"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">
                  Order ID: {order.id}
                </h2>
                <p className="text-sm text-gray-500">Order Date: {order.date}</p>
                <p className="text-sm text-gray-500">Status: {order.status}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-800 font-bold">Total: {order.total}</p>
                <p className="text-gray-600 text-sm">Items: {order.items}</p>
              </div>
            </div>

            {order.details.map((item, index) => (
              <div
                key={index}
                className="flex items-center border border-gray-200 rounded-lg p-4 mb-4 last:mb-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-gray-800 font-medium">{item.name}</h3>
                  <p className="text-gray-600 text-sm">Price: {item.price}</p>
                  <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}

            <div className="text-center mt-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                View Order Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    <PhonNavbar />
    </>
  );
};

export default OrderHistory;

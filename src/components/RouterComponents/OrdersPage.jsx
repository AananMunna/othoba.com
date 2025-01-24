import React, { useState } from 'react';
import Footer from '../layOut/Footer';
import PhonNavbar from '../phonNavbar/PhonNavbar';
import Header from '../layOut/Header';
import Navbar from '../layOut/Navbar';
import Breadcrumb from './BreadCumb';

const OrdersPage = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      productName: 'Wireless Headphones',
      orderDate: '2025-01-15',
      deliveryDate: '2025-01-18',
      status: 'Delivered',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      productName: 'Smart Watch',
      orderDate: '2025-01-10',
      deliveryDate: '2025-01-14',
      status: 'Cancelled',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      productName: 'Gaming Laptop',
      orderDate: '2025-01-05',
      deliveryDate: '2025-01-09',
      status: 'In Transit',
      image: 'https://via.placeholder.com/150',
    },
  ]);

  return (
    <>
    <Header />
    <Navbar />
    <div className=" bg-gray-50 p-4">
          <Breadcrumb />
        </div>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">My Orders</h1>
          <p className="text-gray-600 mt-2">
            View your order history and track the status of your purchases.
          </p>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex flex-col items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-200"
            >
              <img
                src={order.image}
                alt={order.productName}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1">
                <h2 className="text-lg font-bold text-gray-800">{order.productName}</h2>
                <p className="text-gray-600">Order Date: {order.orderDate}</p>
                <p className="text-gray-600">Delivery Date: {order.deliveryDate}</p>
                <p className={`font-semibold ${order.status === 'Delivered' ? 'text-green-600' : order.status === 'Cancelled' ? 'text-red-600' : 'text-yellow-600'}`}>
                  Status: {order.status}
                </p>
              </div>
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    <PhonNavbar />
    </>
  );
};

export default OrdersPage;

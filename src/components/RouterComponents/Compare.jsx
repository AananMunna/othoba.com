import 'react'
import Header from '../layOut/Header'
import Navbar from '../layOut/Navbar'
import Footer from '../layOut/Footer'

const Compare = () => {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      features: ['Bluetooth 5.0', '20 Hours Battery', 'Noise Cancelling'],
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      features: ['Heart Rate Monitor', 'GPS', 'Water Resistant'],
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Gaming Laptop',
      price: 1299.99,
      features: ['16GB RAM', '512GB SSD', 'RTX 3060 GPU'],
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div>
        <Header />
        <Navbar />
        <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Compare Products</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 text-lg mb-4">${product.price.toFixed(2)}</p>
              <ul className="text-gray-700 mb-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-200">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
        <Footer />
    </div>
  )
}

export default Compare
import React from 'react';
import Footer from '../layOut/Footer';
import PhonNavbar from '../phonNavbar/PhonNavbar';
import Header from '../layOut/Header';
import Navbar from '../layOut/Navbar';
import Breadcrumb from './BreadCumb';

const FeaturedRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      title: 'Smartphone Bundle',
      description: 'Get the latest smartphone with amazing accessories.',
      image: 'https://via.placeholder.com/150',
      link: '/product/smartphone-bundle'
    },
    {
      id: 2,
      title: 'Home Essentials',
      description: 'Upgrade your home with these top-rated essentials.',
      image: 'https://via.placeholder.com/150',
      link: '/product/home-essentials'
    },
    {
      id: 3,
      title: 'Fitness Gear',
      description: 'Everything you need to stay fit and healthy.',
      image: 'https://via.placeholder.com/150',
      link: '/product/fitness-gear'
    },
    {
      id: 4,
      title: 'Gaming Setup',
      description: 'Enhance your gaming experience with our latest collection.',
      image: 'https://via.placeholder.com/150',
      link: '/product/gaming-setup'
    },
    {
      id: 5,
      title: 'Office Supplies',
      description: 'Keep your office running smoothly with these essentials.',
      image: 'https://via.placeholder.com/150',
      link: '/product/office-supplies'
    }
  ];

  return (
    
    <>
    <Header />
    <Navbar />
    <div className=" bg-gray-50 p-4">
          <Breadcrumb />
        </div>
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Featured Recommendations</h1>
        <p className="text-gray-600 mb-8">
          Explore our specially curated recommendations to find the best products tailored to your needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recommendations.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a
                href={item.link}
                className="text-blue-600 hover:underline"
              >
                View Details
              </a>
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

export default FeaturedRecommendations;

import React, { useState } from 'react';
import Footer from '../layOut/Footer';
import PhonNavbar from '../phonNavbar/PhonNavbar';
import Header from '../layOut/Header';
import Navbar from '../layOut/Navbar';
import Breadcrumb from './BreadCumb';

const CareerPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const jobListings = [
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'Remote',
      type: 'Full-time',
      description: 'We are looking for a skilled React developer to join our team.',
    },
    {
      id: 2,
      title: 'Marketing Specialist',
      location: 'New York, NY',
      type: 'Part-time',
      description: 'Help us grow our online presence and manage marketing campaigns.',
    },
    {
      id: 3,
      title: 'Customer Support Representative',
      location: 'Remote',
      type: 'Full-time',
      description: 'Provide exceptional support to our customers through chat and email.',
    },
  ];

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully!');
    setShowForm(false);
    setSelectedJob(null);
  };

  return (
    <>
    <Header />
    <Navbar />
    <div className=" bg-gray-50 p-4">
          <Breadcrumb />
        </div>
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Join Our Team</h1>
        <p className="text-lg text-gray-600">Discover exciting career opportunities at our e-commerce company.</p>
      </header>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {jobListings.map((job) => (
          <div
            key={job.id}
            className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition-all">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">{job.title}</h2>
            <p className="text-gray-500 text-sm mb-4">{job.type} | {job.location}</p>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => handleApply(job)}>
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {showForm && selectedJob && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              onClick={() => setShowForm(false)}>
              &#x2715;
            </button>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Apply for {selectedJob.title}</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Resume</label>
                <input
                  type="file"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
    <Footer />
    <PhonNavbar />
    </>
  );
};

export default CareerPage;

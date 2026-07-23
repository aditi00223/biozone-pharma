import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const categories = [
    'Antibiotics',
    'Painkillers',
    'Cardiac Care',
    'Diabetes Care',
    'Vitamins & Supplements',
    'Respiratory Care'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Biozone Pharma
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Trusted wholesale pharmaceutical distributor supplying quality medicines to doctors, clinics, and retail pharmacies.
          </p>
          <Link
            to="/products"
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100"
          >
            Browse Products
          </Link>
        </div>
      </section>

      {/* Company Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Biozone Pharma?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          With years of experience in pharmaceutical distribution, we ensure reliable supply,
          competitive pricing, and complete product transparency — including salt composition,
          usage, and dosage details for every medicine.
        </p>
      </section>

      {/* Product Categories */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Product Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white shadow-sm rounded-lg p-6 text-center hover:shadow-md transition"
              >
                <p className="font-medium text-gray-700">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white text-center py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Looking for bulk medicine supply?</h2>
        <Link
          to="/contact"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default Home;
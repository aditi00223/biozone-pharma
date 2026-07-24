import React from 'react';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Biozone Pharma</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          Biozone Pharma is a wholesale pharmaceutical distribution business dedicated to supplying
          quality medicines to doctors, clinics, and retail pharmacies. We aim to be a name that
          healthcare providers can depend on for timely and transparent medicine supply.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          To make quality pharmaceutical products easily accessible to healthcare providers through
          a transparent, efficient, and technology-driven distribution network.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Registration Details</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>GST Registration Number: [YOUR_GST_NUMBER_HERE]</li>
          <li>Drug License Number: [YOUR_LICENSE_NUMBER_HERE]</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Get in Touch</h2>
        <p className="text-gray-600 leading-relaxed">
          For business inquiries, bulk orders, or to learn more about our operations, please
          visit our Contact page — we'd be happy to assist you.
        </p>
      </section>
    </div>
  );
};

export default About;
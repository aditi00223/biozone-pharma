import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Biozone Pharma</h3>
          <p className="text-sm">
            Wholesale pharmaceutical distribution — supplying medicines to doctors, clinics, and retail pharmacies.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/products" className="hover:text-white">Products</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
          <p className="text-sm">Email: contact@biozonepharma.com</p>
          <p className="text-sm">Phone: +91-XXXXXXXXXX</p>
        </div>
      </div>

      <div className="text-center text-sm py-4 border-t border-gray-700">
        © {new Date().getFullYear()} Biozone Pharma. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            Biozone Pharma
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-accent">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-accent">Products</Link>
            <Link to="/about" className="text-gray-700 hover:text-accent">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-accent">Contact</Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <FaBars size={22} />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 pb-4">
            <Link to="/" className="text-gray-700 hover:text-accent">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-accent">Products</Link>
            <Link to="/about" className="text-gray-700 hover:text-accent">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-accent">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
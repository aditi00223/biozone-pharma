import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/products/${product._id}`}
      className="block bg-white shadow-sm rounded-lg p-5 hover:shadow-md transition"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
      <p className="text-sm text-blue-700 font-medium mb-2">{product.salt}</p>

      {product.usage && (
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Usage:</span> {product.usage}
        </p>
      )}

      {product.duration && (
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Duration:</span> {product.duration}
        </p>
      )}

      {product.dosage && (
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Dosage:</span> {product.dosage}
        </p>
      )}

      {product.price && (
        <p className="text-sm text-gray-800 font-semibold mt-3">₹{product.price}</p>
      )}
    </Link>
  );
};

export default ProductCard;
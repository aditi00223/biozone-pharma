import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProduct } from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProduct(id);
        setProduct(response.data);
      } catch (err) {
        setError('Product not found.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center py-12 text-gray-500">Loading...</p>;
  if (error) return <p className="text-center py-12 text-red-500">{error}</p>;
  if (!product) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/products" className="text-blue-700 hover:underline text-sm mb-6 inline-block">
        ← Back to Products
      </Link>

      <div className="bg-white shadow-sm rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
        <p className="text-blue-700 font-medium mb-6">{product.salt}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          {product.category && (
            <div>
              <p className="font-medium text-gray-700">Category</p>
              <p className="text-gray-600">{product.category}</p>
            </div>
          )}
          {product.usage && (
            <div>
              <p className="font-medium text-gray-700">Usage</p>
              <p className="text-gray-600">{product.usage}</p>
            </div>
          )}
          {product.duration && (
            <div>
              <p className="font-medium text-gray-700">Duration</p>
              <p className="text-gray-600">{product.duration}</p>
            </div>
          )}
          {product.dosage && (
            <div>
              <p className="font-medium text-gray-700">Dosage</p>
              <p className="text-gray-600">{product.dosage}</p>
            </div>
          )}
          {product.manufacturer && (
            <div>
              <p className="font-medium text-gray-700">Manufacturer</p>
              <p className="text-gray-600">{product.manufacturer}</p>
            </div>
          )}
          {product.price && (
            <div>
              <p className="font-medium text-gray-700">Price</p>
              <p className="text-gray-600">₹{product.price}</p>
            </div>
          )}
        </div>

        {product.sideEffects && (
          <div className="mt-6">
            <p className="font-medium text-gray-700 mb-1">Side Effects</p>
            <p className="text-gray-600 text-sm">{product.sideEffects}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
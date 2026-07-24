import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts, addProduct, updateProductById, deleteProductById } from '../services/api';

const emptyForm = {
  name: '', salt: '', category: '', usage: '', duration: '',
  dosage: '', sideEffects: '', manufacturer: '', price: '', inStock: true
};

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (err) {
      setMessage('Failed to load products.');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      if (editingId) {
        await updateProductById(editingId, formData, token);
        setMessage('Product updated successfully.');
      } else {
        await addProduct(formData, token);
        setMessage('Product added successfully.');
      }
      setFormData(emptyForm);
      setEditingId(null);
      fetchProducts();
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong.');
    }
  };

  const handleEdit = (product) => {
    setFormData({ ...product });
    setEditingId(product._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    try {
      await deleteProductById(id, token);
      fetchProducts();
    } catch (err) {
      setMessage('Failed to delete product.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    navigate('/admin/login');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <button onClick={handleLogout} className="text-sm text-red-600 hover:underline">
          Logout
        </button>
      </div>

      {message && <p className="text-center text-blue-700 mb-4">{message}</p>}

      {/* Product Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg p-6 mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="border border-gray-300 rounded-lg px-3 py-2" />
        <input name="salt" value={formData.salt} onChange={handleChange} placeholder="Salt Composition" required className="border border-gray-300 rounded-lg px-3 py-2" />
        <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="border border-gray-300 rounded-lg px-3 py-2" />
        <input name="usage" value={formData.usage} onChange={handleChange} placeholder="Usage" className="border border-gray-300 rounded-lg px-3 py-2" />
        <input name="duration" value={formData.duration} onChange={handleChange} placeholder="Duration" className="border border-gray-300 rounded-lg px-3 py-2" />
        <input name="dosage" value={formData.dosage} onChange={handleChange} placeholder="Dosage" className="border border-gray-300 rounded-lg px-3 py-2" />
        <input name="manufacturer" value={formData.manufacturer} onChange={handleChange} placeholder="Manufacturer" className="border border-gray-300 rounded-lg px-3 py-2" />
        <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" type="number" className="border border-gray-300 rounded-lg px-3 py-2" />
        <textarea name="sideEffects" value={formData.sideEffects} onChange={handleChange} placeholder="Side Effects" className="border border-gray-300 rounded-lg px-3 py-2 md:col-span-2" rows="3"></textarea>

        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" name="inStock" checked={formData.inStock} onChange={handleChange} />
          In Stock
        </label>

        <div className="md:col-span-2 flex gap-3">
          <button type="submit" className="bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-800">
            {editingId ? 'Update Product' : 'Add Product'}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => { setFormData(emptyForm); setEditingId(null); }}
              className="bg-gray-200 text-gray-700 font-semibold px-5 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Product List Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-sm rounded-lg text-sm">
          <thead>
            <tr className="text-left border-b border-gray-200">
              <th className="p-3">Name</th>
              <th className="p-3">Salt</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-b border-gray-100">
                <td className="p-3">{product.name}</td>
                <td className="p-3">{product.salt}</td>
                <td className="p-3">{product.category}</td>
                <td className="p-3">₹{product.price}</td>
                <td className="p-3 flex gap-3">
                  <button onClick={() => handleEdit(product)} className="text-blue-700 hover:underline">Edit</button>
                  <button onClick={() => handleDelete(product._id)} className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
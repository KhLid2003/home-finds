import React, { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { products } from '../data/products';
import { useNavigate } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(products);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults(products);
    }
  }, [searchTerm]);

  const handleProductClick = (category: string) => {
    onClose();
    navigate(`/shop/${category.toLowerCase().replace(' ', '-')}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative min-h-screen flex items-start justify-center p-4">
        <div className="relative bg-white w-full max-w-2xl rounded-lg shadow-xl mt-16">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
              </div>
              <button
                onClick={onClose}
                className="ml-4 p-2 text-gray-400 hover:text-gray-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-4 max-h-96 overflow-y-auto">
              {searchResults.length === 0 ? (
                <p className="text-center text-gray-500 py-4">No products found</p>
              ) : (
                <div className="space-y-4">
                  {searchResults.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                      onClick={() => handleProductClick(product.category)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500">{product.category}</p>
                        <p className="text-sm font-medium text-indigo-600">
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
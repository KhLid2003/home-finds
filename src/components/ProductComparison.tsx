import React, { useState } from 'react';
import { Check, Heart, ArrowRight } from 'lucide-react';

const allProducts = [
  {
    id: 1,
    category: 'Living Room Chairs',
    name: 'Modern Accent Chair',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c',
    features: [
      'Ergonomic Design',
      'Premium Upholstery',
      'Easy Assembly',
      'Sturdy Construction',
      'Memory Foam Cushioning',
      '5-Year Warranty'
    ],
    rating: 4.5,
    bestFor: 'Modern Homes',
    affiliateLink: '#',
    specs: {
      material: 'Premium Fabric',
      weight: '35 lbs',
      dimensions: '28"W x 30"D x 32"H',
      color: 'Multiple Options'
    }
  },
  {
    id: 2,
    category: 'Living Room Chairs',
    name: 'Classic Armchair',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91',
    features: [
      'Traditional Design',
      'Genuine Leather',
      'Professional Assembly',
      'Lifetime Warranty',
      'High-Density Foam',
      'Solid Wood Frame'
    ],
    rating: 4.7,
    bestFor: 'Traditional Spaces',
    affiliateLink: '#',
    specs: {
      material: 'Genuine Leather',
      weight: '45 lbs',
      dimensions: '30"W x 32"D x 34"H',
      color: 'Brown, Black'
    }
  },
  {
    id: 3,
    category: 'Lighting',
    name: 'Smart LED Floor Lamp',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c',
    features: [
      'Voice Control',
      'Adjustable Brightness',
      'Color Temperature',
      'Smart Home Compatible',
      'Energy Efficient',
      'Timer Function'
    ],
    rating: 4.8,
    bestFor: 'Modern Living',
    affiliateLink: '#',
    specs: {
      wattage: '20W',
      lumens: '2000lm',
      height: '65 inches',
      connectivity: 'WiFi, Bluetooth'
    }
  },
  {
    id: 4,
    category: 'Lighting',
    name: 'Designer Table Lamp',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15',
    features: [
      'Artistic Design',
      'Dimmable',
      'Touch Control',
      'USB Port',
      'Premium Finish',
      'Ambient Lighting'
    ],
    rating: 4.6,
    bestFor: 'Bedside, Office',
    affiliateLink: '#',
    specs: {
      wattage: '12W',
      lumens: '800lm',
      height: '18 inches',
      material: 'Metal, Glass'
    }
  }
];

export default function ProductComparison() {
  const [selectedCategory, setSelectedCategory] = useState('Living Room Chairs');
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const categories = [...new Set(allProducts.map(p => p.category))];
  const categoryProducts = allProducts.filter(p => p.category === selectedCategory);

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleProductSelection = (productId: number) => {
    setSelectedProducts(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      }
      if (prev.length >= 2) {
        return [prev[1], productId];
      }
      return [...prev, productId];
    });
  };

  const getComparisonProducts = () => {
    return allProducts.filter(p => selectedProducts.includes(p.id));
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Product Comparisons
        </h2>
        
        {/* Category Selection */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categoryProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                selectedProducts.includes(product.id) ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      wishlist.includes(product.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-1 text-xl font-bold text-indigo-600">${product.price}</p>
                <button
                  onClick={() => toggleProductSelection(product.id)}
                  className={`mt-4 w-full px-4 py-2 rounded-md ${
                    selectedProducts.includes(product.id)
                      ? 'bg-indigo-600 text-white'
                      : 'border border-indigo-600 text-indigo-600'
                  }`}
                >
                  {selectedProducts.includes(product.id) ? 'Selected' : 'Compare'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        {selectedProducts.length === 2 && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Comparison</h3>
            <div className="grid grid-cols-2 gap-8">
              {getComparisonProducts().map((product) => (
                <div key={product.id} className="space-y-6">
                  <div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">{product.name}</h4>
                    <p className="mt-2 text-2xl font-bold text-indigo-600">${product.price}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Features</h5>
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Specifications</h5>
                    <dl className="space-y-1">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className="flex text-sm">
                          <dt className="w-24 font-medium text-gray-500">{key}:</dt>
                          <dd className="text-gray-900">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <a
                    href={product.affiliateLink}
                    className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    View on Amazon
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
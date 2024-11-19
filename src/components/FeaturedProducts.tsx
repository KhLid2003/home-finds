import React from 'react';
import { Heart, Star } from 'lucide-react';
import { useWishlistStore } from '../store/wishlistStore';
import { products } from '../data/products';

export default function FeaturedProducts() {
  const { addItem, removeItem, isInWishlist } = useWishlistStore();

  const toggleWishlist = (productId: number) => {
    if (isInWishlist(productId)) {
      removeItem(productId);
    } else {
      addItem(productId);
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist(product.id);
                  }}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50"
                >
                  <Heart
                    className={`h-5 w-5 ${
                      isInWishlist(product.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-400'
                    }`}
                  />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                <div className="mt-2 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400'
                          : 'text-gray-200'
                      } fill-current`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-500">
                    ({product.reviews})
                  </span>
                </div>
                <div className="mt-2 flex items-center">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                </div>
                <a
                  href={product.affiliateLink}
                  className="mt-4 block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  View on Amazon
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
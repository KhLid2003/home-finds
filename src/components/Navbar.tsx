import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, Heart, Menu, X, Search } from 'lucide-react';
import { useWishlistStore } from '../store/wishlistStore';
import SearchModal from './SearchModal';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { items } = useWishlistStore();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Home className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-semibold">HomeHaven</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/shop"
                className={`${
                  isActive('/shop')
                    ? 'text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                Shop
              </Link>
              <Link
                to="/deals"
                className={`${
                  isActive('/deals')
                    ? 'text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                Deals
              </Link>
              <Link
                to="/about"
                className={`${
                  isActive('/about')
                    ? 'text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                About
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button
                className="p-2 text-gray-700 hover:text-indigo-600"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-6 w-6" />
              </button>
              <Link
                to="/wishlist"
                className="p-2 text-gray-700 hover:text-indigo-600 relative"
              >
                <Heart className="h-6 w-6" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </Link>
              <button className="p-2 text-gray-700 hover:text-indigo-600">
                <ShoppingBag className="h-6 w-6" />
              </button>
              <button
                className="md:hidden p-2 text-gray-700 hover:text-indigo-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/shop"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/deals"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Deals
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
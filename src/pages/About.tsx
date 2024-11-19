import React from 'react';

export default function About() {
  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">About HomeHaven</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            Welcome to HomeHaven, your trusted destination for discovering premium home products that transform living spaces into sanctuaries of comfort and style.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            We're dedicated to helping you create the perfect home environment by curating the finest selection of furniture, decor, and home essentials from Amazon's vast marketplace.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Us</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
            <li>Carefully curated selection of premium products</li>
            <li>Detailed product reviews and comparisons</li>
            <li>Expert recommendations for every room</li>
            <li>Best price guarantees through Amazon</li>
            <li>Regular deals and exclusive discounts</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Affiliate Disclosure</h2>
          <p className="text-lg text-gray-700 mb-6">
            As an Amazon Associate, we earn from qualifying purchases. This helps us maintain our website and continue providing you with the best product recommendations at no additional cost to you.
          </p>
        </div>
      </div>
    </main>
  );
}
import React from 'react';
import BestSellers from '../components/BestSellers';

export default function Deals() {
  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Today's Best Deals</h1>
        <BestSellers />
      </div>
    </main>
  );
}
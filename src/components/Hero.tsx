import React from 'react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-60"
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
          alt="Modern living room"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Transform Your Home
        </h1>
        <p className="mt-6 text-xl text-gray-100 max-w-3xl">
          Discover curated collections of premium home products that blend style, comfort, and functionality. 
          Make every corner of your home a testament to modern living.
        </p>
        <div className="mt-10">
          <a
            href="#featured"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
}
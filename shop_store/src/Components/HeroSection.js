import React, { useState } from 'react';
import "../index.css";
import banner from '../Assets/images/banner.jpg';
import "../Assets/Hero.css"


const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="relative h-96 flex items-center justify-center mt-22">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 h-auto img-hero md:w-screen"
        style={{backgroundImage: `url(${banner})`}}
      >
      </div>
      <div className="absolute inset-0 opacity-50 z-10 " />

      <div className="relative z-20 text-white px-4 sm:px-6 lg:px-8 max-w-3xl mr-auto ml-0 mt-20 hero">
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-4 md:ml-32">
          Quality Groceries <br/>at Your Fingertips
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-left ml-24 md:text-center">Shop Fresh, Eat Healthy</p>
        

        <form onSubmit={handleSearch} className="search flex lg:w-full ml-80 sm:w-32 sm:ml-6 sm md:w-80 md:ml-40">
          <input
            type="text"
            placeholder="Search groceries"
            className="flex-grow px-4 py-2 rounded-l-full focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded-r-full hover:bg-purple-700 transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
import React from 'react';
import Menu from '../components/Menu';

const MenuPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-black to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Menu</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fresh, delicious, and professionally prepared meals designed to fuel creativity 
            and keep your production running smoothly. All items can be customized to accommodate 
            dietary restrictions and preferences.
          </p>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default MenuPage;

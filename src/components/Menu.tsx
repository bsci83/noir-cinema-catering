import React, { useState } from 'react';
import { Clock, Users, Leaf, Shield, HeartHandshake } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const menuCategories = [
    { id: 'breakfast', name: 'Breakfast', icon: '☀️' },
    { id: 'lunch', name: 'Lunch', icon: '🍽️' },
    { id: 'snacks', name: 'Craft Services', icon: '🥨' },
    { id: 'beverages', name: 'Beverages', icon: '☕' }
  ];

  const menuItems = {
    breakfast: [
      {
        name: "Executive Breakfast Spread",
        image: "/images/breakfast-catering.jpg",
        description: "Premium breakfast buffet featuring fresh pastries, artisanal coffee, seasonal fruit, and made-to-order options.",
        ingredients: "Fresh croissants, Danish pastries, seasonal fruit salad, premium coffee, fresh juices",
        dietary: ["vegetarian", "gluten-free"],
        price: "Starting at $18/person",
        servingTime: "15 minutes setup"
      },
      {
        name: "Hot Breakfast Bar",
        image: "/images/hot-lunch-buffet.jpg",
        description: "Full hot breakfast service with scrambled eggs, bacon, sausage, hash browns, and fresh biscuits.",
        ingredients: "Farm-fresh eggs, applewood bacon, breakfast sausage, crispy hash browns, buttermilk biscuits",
        dietary: ["gluten-free available"],
        price: "Starting at $22/person",
        servingTime: "20 minutes setup"
      }
    ],
    lunch: [
      {
        name: "Gourmet Sandwich Station",
        image: "/images/gourmet-sandwiches.jpg",
        description: "Premium deli featuring artisanal breads, high-quality meats, fresh vegetables, and gourmet condiments.",
        ingredients: "Artisanal breads, premium deli meats, fresh vegetables, specialty cheeses, house-made condiments",
        dietary: ["vegetarian", "vegan", "gluten-free"],
        price: "Starting at $16/person",
        servingTime: "10 minutes setup"
      },
      {
        name: "Hot Lunch Buffet",
        image: "/images/hot-lunch-buffet.jpg",
        description: "Complete hot meal service with multiple entrées, sides, and salad bar options.",
        ingredients: "Rotating daily entrées, seasonal vegetables, rice/pasta options, fresh salad bar",
        dietary: ["vegetarian", "vegan", "gluten-free"],
        price: "Starting at $25/person",
        servingTime: "25 minutes setup"
      },
      {
        name: "Fresh Salad Bar",
        image: "/images/salad-bar-setup.jpg",
        description: "Extensive salad bar with premium greens, fresh toppings, proteins, and house-made dressings.",
        ingredients: "Mixed greens, seasonal vegetables, grilled proteins, nuts, seeds, artisanal dressings",
        dietary: ["vegetarian", "vegan", "gluten-free", "keto"],
        price: "Starting at $14/person", 
        servingTime: "12 minutes setup"
      }
    ],
    snacks: [
      {
        name: "Healthy Snack Station",
        image: "/images/healthy-snacks.jpeg",
        description: "Nutritious options to keep your crew energized including fresh fruit, nuts, and protein bars.",
        ingredients: "Seasonal fresh fruit, mixed nuts, protein bars, yogurt parfaits, vegetable chips",
        dietary: ["vegetarian", "vegan", "gluten-free", "keto"],
        price: "Starting at $8/person",
        servingTime: "5 minutes setup"
      },
      {
        name: "Craft Services Essentials",
        image: "/images/craft-services-table.jpg",
        description: "24/7 snack table with variety of grab-and-go options, candy, chips, and energy drinks.",
        ingredients: "Assorted chips, candy, energy bars, crackers, cookies, mixed snacks",
        dietary: ["some vegetarian options"],
        price: "Starting at $6/person",
        servingTime: "3 minutes setup"
      }
    ],
    beverages: [
      {
        name: "Premium Coffee Station",
        image: "/images/coffee-station.jpg",
        description: "Professional coffee service with premium beans, specialty drinks, and full beverage selection.",
        ingredients: "Premium coffee beans, specialty teas, hot chocolate, fresh juices, sodas, water",
        dietary: ["vegan milk alternatives"],
        price: "Starting at $5/person",
        servingTime: "8 minutes setup"
      }
    ]
  };

  const getDietaryIcon = (dietary: string) => {
    switch (dietary) {
      case 'vegetarian': return <Leaf className="h-4 w-4 text-green-500" />;
      case 'vegan': return <HeartHandshake className="h-4 w-4 text-green-600" />;
      case 'gluten-free': return <Shield className="h-4 w-4 text-blue-500" />;
      case 'keto': return <span className="text-purple-500 text-xs font-bold">KETO</span>;
      default: return null;
    }
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
       {/*} <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Menu
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Carefully crafted menus designed to fuel creativity and keep your production running smoothly. 
            All items can be customized to accommodate dietary restrictions and preferences.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 border-b border-gray-800">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-4 mx-2 mb-4 font-semibold transition-colors duration-200 border-b-2 ${
                activeCategory === category.id
                  ? 'text-red-500 border-red-500'
                  : 'text-gray-400 border-transparent hover:text-white hover:border-gray-600'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                  <span className="text-red-500 font-bold text-lg">{item.price}</span>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Ingredients */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">INGREDIENTS:</h4>
                  <p className="text-gray-500 text-sm">{item.ingredients}</p>
                </div>

                {/* Dietary & Service Info */}
                <div className="flex flex-wrap justify-between items-center">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {item.dietary.map((diet, dietIndex) => (
                      <div key={dietIndex} className="flex items-center space-x-1 bg-gray-800 px-2 py-1 rounded-full">
                        {getDietaryIcon(diet)}
                        <span className="text-xs text-gray-300 capitalize">{diet.replace('-', ' ')}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {item.servingTime}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dietary Legend */}
        <div className="mt-16 bg-gray-900 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-6">Dietary Accommodations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 bg-black/50 rounded-lg p-4">
              <Leaf className="h-5 w-5 text-green-500" />
              <span className="text-white">Vegetarian</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-black/50 rounded-lg p-4">
              <HeartHandshake className="h-5 w-5 text-green-600" />
              <span className="text-white">Vegan</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-black/50 rounded-lg p-4">
              <Shield className="h-5 w-5 text-blue-500" />
              <span className="text-white">Gluten-Free</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-black/50 rounded-lg p-4">
              <span className="text-purple-500 text-sm font-bold">KETO</span>
              <span className="text-white">Keto-Friendly</span>
            </div>
          </div>
          <p className="text-gray-400 text-center mt-6">
            All menus can be customized to accommodate specific dietary needs and allergies. 
            Please inform us of any restrictions when booking.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Customize Your Menu?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Every production is unique. Let us create a custom menu that fits your specific needs, 
            timeline, and budget.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg"
          >
            Request Custom Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;

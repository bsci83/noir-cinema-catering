import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Users, Truck, Coffee, Utensils, ShieldCheck } from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Drop Catering",
      description: "Drop catering available for smaller productions, budget minded productions, and production offices.",
      features: ["Fresh coffee & beverages", "Healthy snack options", "Quick grab-and-go items", "Custom dietary accommodations"]
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Location Catering",
      description: "Full-service mobile kitchen bringing restaurant-quality hot meals directly to your filming location.",
      features: ["Hot breakfast service", "Gourmet lunch options", "Dinner catering", "Multiple dietary options"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Corporate Events", 
      description: "Professional catering for industry events, wrap parties, premieres, and corporate gatherings.",
      features: ["Event planning support", "Elegant presentation", "Professional service staff", "Custom menu creation"]
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Mobile Kitchen",
      description: "State-of-the-art food truck with full commercial kitchen capabilities for any location.",
      features: ["Fully equipped kitchen", "Health department certified", "Remote location capable", "Professional grade equipment"]
    }
  ];

  const specialFeatures = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Availability",
      description: "Film schedules don't follow normal hours - neither do we."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Fully Insured & Licensed",
      description: "Complete liability coverage and health department certification."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Experienced Team",
      description: "Industry veterans who understand film production needs."
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {/*<div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Specialized catering solutions designed specifically for the film industry. 
            From intimate indie productions to major studio films, we deliver exceptional service every time.
          </p>
        </div>*/}

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-black/50 rounded-lg p-8 hover:bg-black/70 transition-colors duration-300 border border-gray-800"
            >
              <div className="flex items-center mb-6">
                <div className="bg-red-600 p-3 rounded-lg mr-4 text-white">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Special Features */}
        <div className="bg-black/30 rounded-lg p-8">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose NOIR Cinema Catering?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Service Areas</h3>
          <div className="flex justify-center gap-4 max-w-4xl mx-auto">
            {['Atlanta Metro', 'State Wide', 'Nation Wide'].map((city) => (
              <div key={city} className="bg-black/50 rounded-lg px-6 py-4 border border-gray-800">
                <span className="text-white font-semibold">{city}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 mt-6">
            Currently Providing service in all of Georgia. Available to travel outside the state of Georgia
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button
            onClick={() => navigate('/contact')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg"
          >
            Get Your Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

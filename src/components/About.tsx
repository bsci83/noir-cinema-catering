import React from 'react';
import { Award, Users, Truck, MapPin, Clock, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "500+", label: "Productions Served", icon: <Star className="h-6 w-6" /> },
    { number: "5+", label: "Years Experience", icon: <Clock className="h-6 w-6" /> },
    { number: "50+", label: "Film Crews Fed Daily", icon: <Users className="h-6 w-6" /> },
    { number: "24/7", label: "Service Availability", icon: <Truck className="h-6 w-6" /> }
  ];

  const teamMembers = [
    {
      name: "Executive Chef Marcus Johnson",
      role: "Head Chef & Owner",
      experience: "15+ years in culinary arts, 8 years in film catering",
      bio: "Marcus brings fine dining expertise to the film industry, having worked in top Atlanta restaurants before specializing in production catering.",
      specialties: ["Menu Development", "Dietary Accommodations", "Large Scale Production"]
    },
    {
      name: "Sarah Martinez",
      role: "Operations Manager",
      experience: "10+ years in film industry logistics",
      bio: "Former assistant director turned catering specialist, Sarah understands the unique timing and logistics challenges of film productions.",
      specialties: ["Production Coordination", "Timeline Management", "Client Relations"]
    },
    {
      name: "David Thompson",
      role: "Mobile Kitchen Specialist",
      experience: "12+ years in mobile food service",
      bio: "David ensures our mobile kitchen operates flawlessly at any location, from remote sets to downtown Atlanta studios.",
      specialties: ["Equipment Management", "Food Safety", "Remote Operations"]
    }
  ];

  const capabilities = [
    {
      title: "State-of-the-Art Mobile Kitchen",
      description: "Our custom-built food truck features a complete commercial kitchen with multiple prep stations, grills, ovens, and refrigeration units.",
      features: ["Commercial-grade equipment", "Multiple cooking stations", "Advanced refrigeration", "Generator-powered capability"]
    },
    {
      title: "Industry Expertise", 
      description: "Deep understanding of film production schedules, union requirements, and the unique challenges of location catering.",
      features: ["Union-compliant service", "Flexible scheduling", "Production-specific timing", "Industry relationships"]
    },
    {
      title: "Quality Assurance",
      description: "Rigorous food safety standards, health department certification, and quality control processes.",
      features: ["HACCP certified", "Liability insurance", "Regular health inspections", "Temperature monitoring"]
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {/*<div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About NOIR Cinema Catering
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Born from a passion for exceptional food and deep respect for the filmmaking process, 
            NOIR Cinema Catering has become Atlanta's premier film industry catering specialist.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-red-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center text-white">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                NOIR Cinema Catering was founded with a simple mission: to provide the film industry 
                with catering services that match the quality and professionalism of the productions we serve.
              </p>
              <p>
                Located in Dallas, GA, we're perfectly positioned to serve the thriving Atlanta film 
                scene. Our team combines culinary excellence with deep industry knowledge, ensuring 
                that every meal supports the creative process rather than disrupting it.
              </p>
              <p>
                From intimate indie films to major studio productions, we've built our reputation 
                on reliability, quality, and understanding the unique demands of film catering.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/images/brand/IMG_E7641.JPG"
              alt="NOIR Food Truck Interior"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-semibold">State-of-the-art mobile kitchen</p>
              <p className="text-sm text-gray-300">Professional-grade equipment for any location</p>
            </div>
          </div>
        </div>

        {/* Capabilities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-black/50 rounded-lg p-6 border border-gray-800">
                <h4 className="text-xl font-bold text-white mb-4">{capability.title}</h4>
                <p className="text-gray-300 mb-6">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-black/50 rounded-lg p-6 border border-gray-800 text-center">
                <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-red-500 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.experience}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="space-y-1">
                  {member.specialties.map((specialty, specialtyIndex) => (
                    <span key={specialtyIndex} className="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded mr-1">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Contact Info */}
        <div className="bg-black/30 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Our Location</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <p className="text-white font-semibold">100 Dallas Industry Boulevard</p>
                    <p className="text-gray-400">Dallas, GA 30132</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-red-500" />
                  <div>
                    <p className="text-white">Licensed & Insured</p>
                    <p className="text-gray-400">Health Department Certified</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Work Together?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how NOIR Cinema Catering can support your next production. 
                We're available 24/7 to accommodate your filming schedule.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

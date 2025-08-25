import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Production Manager",
      company: "Atlanta Film Studios",
      rating: 5,
      text: "NOIR Cinema Catering transformed our production experience. Their understanding of film schedules and ability to deliver quality meals at exactly the right time is unmatched. The crew was always well-fed and happy.",
      project: "Independent Drama Feature",
      highlight: "Perfect timing and exceptional quality"
    },
    {
      name: "Marcus Rodriguez",
      role: "Assistant Director",
      company: "Peach State Productions",
      rating: 5,
      text: "Working 16-hour days, having reliable catering is crucial. NOIR's team anticipated our needs perfectly, had coffee ready at 5 AM, and their craft services table never ran empty. Professional service that understands our industry.",
      project: "Network Television Series",
      highlight: "24/7 reliability and industry expertise"
    },
    {
      name: "Jennifer Chen",
      role: "Location Manager",
      company: "Southern Films LLC",
      rating: 5,
      text: "From remote locations to downtown sets, NOIR's mobile kitchen handled everything flawlessly. Their ability to serve hot, restaurant-quality meals anywhere in the Atlanta area saved our production time and money.",
      project: "Major Studio Feature",
      highlight: "Incredible mobile capabilities"
    },
    {
      name: "David Thompson",
      role: "Executive Producer", 
      company: "Magnolia Pictures",
      rating: 5,
      text: "NOIR catered our wrap party and it was absolutely perfect. The presentation was elegant, the food was exceptional, and their team's professionalism reflected well on our production. Highly recommend for any film industry event.",
      project: "Award-Winning Documentary",
      highlight: "Elegant events and professional service"
    },
    {
      name: "Lisa Rodriguez",
      role: "Unit Production Manager",
      company: "Georgia Film Co.",
      rating: 5,
      text: "Managing dietary restrictions for a 100+ person crew seemed impossible until we found NOIR. They handled everything from vegan options to gluten-free meals without missing a beat. Exceptional accommodation and planning.",
      project: "Major Network Series",
      highlight: "Outstanding dietary accommodation"
    },
    {
      name: "Michael Johnson",
      role: "Director",
      company: "Independent Films Atlanta",
      rating: 5,
      text: "As an indie filmmaker on a tight budget, NOIR worked with us to create a catering solution that fit our needs. Quality never suffered, and their flexibility helped us complete our film on schedule and under budget.",
      project: "Independent Feature Film",
      highlight: "Budget-friendly without compromising quality"
    }
  ];

  const clientLogos = [
    { name: "Atlanta Film Studios", industry: "Major Studio" },
    { name: "Peach State Productions", industry: "Television" },
    { name: "Southern Films LLC", industry: "Feature Films" },
    { name: "Magnolia Pictures", industry: "Independent Cinema" },
    { name: "Georgia Film Co.", industry: "Series Production" },
    { name: "Independent Films Atlanta", industry: "Indie Productions" },
    { name: "Metro Atlanta Studios", industry: "Commercial Production" },
    { name: "Buckhead Productions", industry: "Corporate Events" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what film industry professionals 
            have to say about working with NOIR Cinema Catering.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="relative mb-16">
          <div className="bg-black/50 rounded-lg p-8 lg:p-12 border border-gray-800">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            <div className="text-center">
              {/* Quote Icon */}
              <Quote className="h-12 w-12 text-red-500 mx-auto mb-6" />
              
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl lg:text-2xl text-gray-200 italic mb-8 leading-relaxed max-w-4xl mx-auto">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Highlight */}
              <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
                <p className="text-red-400 font-semibold">
                  "{testimonials[currentTestimonial].highlight}"
                </p>
              </div>

              {/* Client Info */}
              <div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-red-500 font-semibold mb-1">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-gray-400 mb-2">
                  {testimonials[currentTestimonial].company}
                </p>
                <p className="text-gray-500 text-sm italic">
                  Project: {testimonials[currentTestimonial].project}
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? 'bg-red-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-16">
          <div className="bg-black/30 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Overall Client Rating</h3>
            <div className="flex justify-center mb-4">
              {renderStars(5)}
            </div>
            <p className="text-4xl font-bold text-red-500 mb-2">5.0/5</p>
            <p className="text-gray-400">Based on 150+ client reviews</p>
            <p className="text-gray-500 text-sm mt-2">100% would recommend to other productions</p>
          </div>
        </div>

        {/* Client Logos */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Trusted by Industry Leaders
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clientLogos.map((client, index) => (
              <div key={index} className="bg-black/50 rounded-lg p-6 text-center border border-gray-800 hover:border-gray-700 transition-colors duration-200">
                <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-400">
                    {client.name.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">{client.name}</h4>
                <p className="text-gray-400 text-xs">{client.industry}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Satisfied Clients?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the same level of professional service and exceptional food 
            that has made NOIR Cinema Catering the preferred choice for Atlanta's film industry.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

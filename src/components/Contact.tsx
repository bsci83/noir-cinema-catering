import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Users, Calendar, Utensils } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    eventDate: '',
    crewSize: '',
    location: '',
    services: [] as string[],
    dietaryNeeds: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    'Craft Services',
    'Breakfast Catering',
    'Lunch Catering', 
    'Dinner Catering',
    'Coffee Service',
    'Wrap Party Catering',
    'Corporate Events',
    'Custom Menu Planning'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "678-403-8649",
      subtitle: "Available 24/7 for urgent requests"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email", 
      details: "info@noircinema.catering",
      subtitle: "We respond within 2 hours"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "100 Dallas Industry Boulevard, Dallas, GA 30132",
      subtitle: "Serving all of Georgia & beyond"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Availability",
      details: "24/7 Service",
      subtitle: "Film schedules don't wait - neither do we"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section commented out
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your production with exceptional catering? Let's discuss your project 
            and create a custom solution that fits your needs, timeline, and budget.
          </p>
        </div>
        */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Request a Quote</h3>
            
            {submitted && (
              <div className="bg-green-600/20 border border-green-600/30 rounded-lg p-4 mb-6 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3" />
                <p className="text-green-400">Thank you! We'll contact you within 2 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors duration-200"
                    placeholder="Production company"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors duration-200"
                  >
                    <option value="">Select project type</option>
                    <option value="feature-film">Feature Film</option>
                    <option value="tv-series">TV Series</option>
                    <option value="commercial">Commercial</option>
                    <option value="documentary">Documentary</option>
                    <option value="corporate-event">Corporate Event</option>
                    <option value="wrap-party">Wrap Party</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Crew Size *
                  </label>
                  <select
                    name="crewSize"
                    required
                    value={formData.crewSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors duration-200"
                  >
                    <option value="">Select crew size</option>
                    <option value="10-25">10-25 people</option>
                    <option value="25-50">25-50 people</option>
                    <option value="50-100">50-100 people</option>
                    <option value="100+">100+ people</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors duration-200"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000+">$10,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors duration-200"
                  placeholder="Filming location or venue address"
                />
              </div>

              {/* Services Needed */}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">
                  Services Needed *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {serviceOptions.map((service) => (
                    <label key={service} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded border-2 mr-3 transition-colors duration-200 ${
                        formData.services.includes(service)
                          ? 'bg-red-600 border-red-600'
                          : 'border-gray-600'
                      }`}>
                        {formData.services.includes(service) && (
                          <CheckCircle className="h-5 w-5 text-white" />
                        )}
                      </div>
                      <span className="text-gray-300 text-sm">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Dietary Requirements
                </label>
                <input
                  type="text"
                  name="dietaryNeeds"
                  value={formData.dietaryNeeds}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors duration-200"
                  placeholder="Vegetarian, vegan, gluten-free, allergies, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Additional Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors duration-200 resize-none"
                  placeholder="Tell us more about your project, special requirements, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Quote Request
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-red-600 p-3 rounded-lg text-white">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                      <p className="text-red-400 font-medium mb-1">{info.details}</p>
                      <p className="text-gray-400 text-sm">{info.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose NOIR?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-red-500" />
                  <span className="text-gray-300">Response within 2 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-red-500" />
                  <span className="text-gray-300">500+ productions served</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Utensils className="h-6 w-6 text-red-500" />
                  <span className="text-gray-300">Custom menu planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-500" />
                  <span className="text-gray-300">Fully licensed & insured</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Emergency/Last-Minute Requests</h3>
              <p className="text-gray-300 mb-4">
                Need catering ASAP? We understand that film schedules change. 
                Call us directly for urgent requests.
              </p>
              <a 
                href="tel:678-403-8649"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 678-403-8649
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

"use client"
import { Camera, ChevronRight, Users, Video, Zap } from "lucide-react";
import ServiceCard from "./ServiceCard";

// Services Section
const Services = () => {
  const services = [
    {
      title: "Video Production",
      image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?q=80&w=1920&auto=format&fit=crop",
      description: "Cinematic video production for commercials, corporate content, and unforgettable events",
      icon: Video
    },
    {
      title: "Photography",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1920&auto=format&fit=crop",
      description: "Stunning photography that captures the essence of products, events, and portraits",
      icon: Camera
    },
    {
      title: "Motion Graphics",
      image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=1920&auto=format&fit=crop",
      description: "Dynamic motion graphics and animations that bring your digital content to life",
      icon: Zap
    },
    {
      title: "Live Streaming",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1920&auto=format&fit=crop",
      description: "Professional live streaming solutions for events, webinars, and broadcasts",
      icon: Users
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive media solutions tailored to elevate your brand and captivate your audience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 100} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Explore All Services
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services
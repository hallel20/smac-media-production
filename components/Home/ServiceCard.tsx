"use client"
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface IServiceCardProps {
  title: string;
  image: string;
  description: string;
  icon: any;
  delay: number;
}
// Service Card Component
const ServiceCard = ({ title, image, description, icon: Icon, delay }: IServiceCardProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image} 
          alt={title}
          width={300}
          height={300}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Icon */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
          {/* @ts-ignore */}
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {description}
        </p>
        <button 
          onClick={() => window.location.href = '/services'}
          className="inline-flex items-center gap-2 text-purple-600 font-semibold text-sm group-hover:gap-3 transition-all"
        >
          Learn More
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Hover Gradient Border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{ background: 'linear-gradient(45deg, rgba(168, 85, 247, 0.4), rgba(234, 179, 8, 0.4))', padding: '2px' }}>
      </div>
    </div>
  );
};

export default ServiceCard
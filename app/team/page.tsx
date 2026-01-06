"use client"
import React, { useState } from 'react';
import { Users, Award, Target, Sparkles, Camera, Video, Laptop, FileImage } from 'lucide-react';
import Image from 'next/image';

const Team = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Wilfred Oluwakamisi",
      role: "Founder & CEO",
      image: "/team/wilfred.png",
      icon: Award,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Hallel Ojowuro",
      role: "Operations Manager",
      image: "/team/hallel.png",
      icon: Target,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Ayomide Filani",
      role: "Lead Photographer",
      image: "/team/ayoo.png",
      icon: Camera,
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Alfred Oluwatomisin",
      role: "Lead Videographer",
      image: "/team/alfred.png",
      icon: Video,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Ayomide Oye",
      role: "Videographer",
      image: "/team/user.png",
      icon: Video,
      gradient: "from-teal-500 to-blue-500"
    },
    {
      name: "Oluwaseun Christopher",
      role: "Photographer",
      image: "/team/seun.png",
      icon: Camera,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      name: "Omotayo Prosper",
      role: "Photographer",
      image: "/team/user.png",
      icon: FileImage,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      name: "Adeniran Tomiwa",
      role: "ICT",
      image: "/team/user.png",
      icon: Laptop,
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-purple-200 rounded-full text-purple-600 font-semibold text-sm mb-6 shadow-sm">
            <Users className="w-4 h-4" />
            <span>Our Amazing Team</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Meet the Creative
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-transparent bg-clip-text">
              Minds Behind SMAC
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team consists of passionate professionals dedicated to capturing unforgettable moments. 
            With expertise in photography, videography, and creative direction, we bring your vision to life with excellence.
          </p>
        </section>

        {/* Team Grid */}
        <section className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => {
              const Icon = member.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Card */}
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    {/* Image Container with Gradient Overlay */}
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={member.image}
                        width={300}
                        height={300}
                        alt={`${member.name}, ${member.role}`}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                      
                      {/* Icon Badge */}
                      <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Floating Badge on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          <p className="text-sm font-bold text-gray-900">View Profile</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} text-transparent bg-clip-text`}>
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Animated Border on Hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
                       style={{ 
                         background: `linear-gradient(45deg, var(--tw-gradient-stops))`,
                         padding: '2px',
                         filter: 'blur(8px)'
                       }}>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Mission Section */}
        <section className="max-w-5xl mx-auto">
          <div className="bg-white/60 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                We aim to deliver exceptional media coverage that preserves your most cherished memories. 
                Our commitment to quality, creativity, and professionalism ensures that every project is a masterpiece.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-2">
                    100%
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Dedication</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text mb-2">
                    500+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Projects</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text mb-2">
                    10+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Years</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Team;
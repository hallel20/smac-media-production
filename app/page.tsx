import Contact from '@/components/Home/Contact';
import Hero from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import Testimonials from '@/components/Home/Testimonials';
import React from 'react';


// Main Homepage Component
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}
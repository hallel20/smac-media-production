import { Star } from "lucide-react";
import Image from "next/image";

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
      content: "The media team exceeded our expectations in every way. Their creative vision transformed our brand narrative into compelling visual stories.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Marketing Head",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
      content: "Working with this team has been transformative. Their attention to detail and innovative approach helped us stand out in a crowded market.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Production Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop",
      content: "The team's ability to blend creativity with strategic thinking is remarkable. They craft experiences that leave lasting impressions.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4">
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our clients have to say about their experience working with SMAC Media
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ITestimonialCard {
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
  delay: number;
}

// Testimonial Card
const TestimonialCard = ({ name, role, image, content, rating, delay }: ITestimonialCard) => {
  return (
    <div 
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-700 mb-6 leading-relaxed italic">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
        <Image
          src={image} 
          alt={name}
          width={100}
          height={100}
          className="w-14 h-14 rounded-full object-cover ring-4 ring-purple-100"
        />
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials
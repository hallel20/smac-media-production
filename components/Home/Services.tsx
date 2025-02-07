import { ChevronRight } from "lucide-react";
import Link from "next/link";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Video Production",
    image:
      "https://images.unsplash.com/photo-1579165466741-7f35e4755660?q=80&w=1920&auto=format&fit=crop",
    description:
      "Professional video production for commercials, corporate videos, and events",
  },
  {
    title: "Photography",
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1920&auto=format&fit=crop",
    description:
      "High-quality photography services for products, events, and portraits",
  },
  {
    title: "Motion Graphics",
    image:
      "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=1920&auto=format&fit=crop",
    description:
      "Eye-catching motion graphics and animations for digital content",
  },
  {
    title: "Live Streaming",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1920&auto=format&fit=crop",
    description:
      "Professional live streaming services for events and productions",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 rounded mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl">
            Discover our comprehensive range of media production services
            designed to bring your vision to life with creativity and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              image={service.image}
              description={service.description}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 group"
          >
            View All Services
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}

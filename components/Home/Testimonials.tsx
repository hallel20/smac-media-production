import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Creative Director, PixelPerfect Studios",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    content:
      "The media team exceeded our expectations in every way. Their creative vision and technical expertise transformed our brand narrative into compelling visual stories that resonated deeply with our audience.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Head, TechVision Media",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
    content:
      "Working with this team has been transformative for our digital presence. Their attention to detail and innovative approach to content creation has helped us stand out in a crowded market.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Production Manager, StreamlineMedia",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop",
    content:
      "The team's ability to blend creativity with strategic thinking is remarkable. They don't just create content; they craft experiences that leave lasting impressions.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about our media production excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  width={300}
                  height={300}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-700"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Hero from "@/components/Home/Hero";
import Testimonials from "@/components/Home/Testimonials";
import Contact from "@/components/Home/Contact";
import Services from "@/components/Home/Services";

export default function Home() {

  return (
    <div>
      <Hero />
      <Services />
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <Testimonials />
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <Contact />
        </div>
      </section>
    </div>
  );
}

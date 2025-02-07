import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    content: "St. Matthew's Anglican Church, Imeri, Ondo State, Nigeria.",
    href: "https://maps.google.com/?q=St.+Matthew's+Anglican+Church,+Imeri,+Ondo+State,+Nigeria",
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: "+234 805 313 5096",
    href: "tel:+2348053135096",
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "info@smacmedia.com.ng",
    href: "mailto:info@smacmedia.com.ng",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero_bg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have any questions or inquiries? Feel free to reach out, and we&apos;ll
              get back to you as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors duration-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-blue-600 rounded-lg">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-300">{item.content}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

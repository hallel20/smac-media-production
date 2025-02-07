import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "../ContactForm";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">
              Let&apos;s Create Something Amazing Together
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Ready to transform your vision into reality? Our media team is
              here to bring your ideas to life with cutting-edge production and
              creative excellence.
            </p>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-start gap-4 border border-gray-100 dark:border-gray-700">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">
                    Our Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <Link href="https://maps.google.com/?q=St.+Matthew's+Anglican+Church,+Imeri,+Ondo+State,+Nigeria" target="_blank" rel="noopener noreferrer">
                      St. Matthew&apos;s Anglican Church, Imeri, Ondo State, Nigeria.
                    </Link>
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-start gap-4 border border-gray-100 dark:border-gray-700">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">
                    Phone Number
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <Link href="tel:+2348053135096">
                      +234 805 313 5096
                    </Link>
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-start gap-4 border border-gray-100 dark:border-gray-700">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">
                    Email Address
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    <Link href="mailto:info@smacmedia.com.ng">
                      info@smacmedia.com.ng
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

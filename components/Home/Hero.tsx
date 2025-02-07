import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative bg-gray-900 text-white py-32 px-6 md:px-12 lg:px-24 flex flex-col items-center text-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero_bg.jpeg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight animate-fade-in-up">
          Welcome to{" "}
          <span className="text-yellow-400 hover:text-yellow-500 transition duration-300">
            SMAC Media Production
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mt-6 animate-fade-in-up delay-100">
          Capturing your special moments with excellence and creativity.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-200">
          <a
            href="https://facebook.com/people/Smac-Media-Production/100084293581937/?_rdc=1&_rdr#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-500 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              View Our Work
            </button>
          </a>
          <Link href="/contact">
            <button className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-400 hover:text-gray-900 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

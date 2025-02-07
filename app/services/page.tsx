const Events = () => {
  const services = [
    {
      title: "Weddings",
      description:
        "Capture the magic of your special day with our professional wedding photography and videography services.",
    },
    {
      title: "Funerals",
      description:
        "We provide respectful and heartfelt media coverage to honor and remember your loved ones.",
    },
    {
      title: "Birthdays",
      description:
        "Make birthdays unforgettable with high-quality photos and videos that capture every joyful moment.",
    },
    {
      title: "Convocations",
      description:
        "Celebrate academic achievements with stunning images and videos of your graduation ceremony.",
    },
    {
      title: "Retirements",
      description:
        "Cherish the milestones of a successful career with our detailed retirement event coverage.",
    },
    {
      title: "Corporate Events",
      description:
        "From conferences to product launches, we deliver professional media coverage tailored to your needs.",
    },
    {
      title: "Anniversaries",
      description:
        "Relive your cherished moments with high-quality anniversary event photography and videography.",
    },
    {
      title: "Baby Showers",
      description:
        "Celebrate the joy of new beginnings with beautiful memories captured in photos and videos.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/hero_bg.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative max-w-6xl mx-auto text-center py-20 px-5">
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Events We Cover
        </h1>
        <p className="text-lg text-gray-300 mb-12">
          We provide exceptional media coverage for various special occasions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br cursor-grab from-gray-200 to-gray-300 p-6 rounded-2xl shadow-lg text-black transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-800 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;

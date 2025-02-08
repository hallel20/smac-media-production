import Image from "next/image";

const Team = () => {
  const teamMembers = [
    { name: "Wilfred Oluwakamisi", role: "Founder & CEO", image: "/team/wilfred.png" },
    {
      name: "Hallel Ojowuro",
      role: "Operations Manager",
      image: "/team/hallel.png",
    },
    {
      name: "Ayomide Filani",
      role: "Lead Photographer",
      image: "/team/hallel.png",
    },
    {
      name: "Alfred Oluwatomisin",
      role: "Lead Videographer",
      image: "/team/hallel.png",
    },
    {
      name: "Ayomide Oye",
      role: "Videographer",
      image: "/team/hallel.png",
    },
    {
      name: "Oluwaseun Christopher",
      role: "Photographer",
      image: "/team/hallel.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      {/* Meet the Team Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Meet the Team
        </h1>
        <p className="text-lg text-gray-700">
          Our team consists of passionate professionals dedicated to capturing
          unforgettable moments. With expertise in photography, videography, and
          creative direction, we bring your vision to life with excellence.
        </p>
      </section>

      {/* Team Members Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={300}
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </section>

      {/* Our Mission Section */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          We aim to deliver exceptional media coverage that preserves your most
          cherished memories. Our commitment to quality, creativity, and
          professionalism ensures that every project is a masterpiece.
        </p>
      </section>
    </div>
  );
};

export default Team;

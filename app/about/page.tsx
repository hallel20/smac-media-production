import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-20 px-5">
      {/* Introduction Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <div className="relative h-96 w-full rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/about/photography.png"
                alt="Photography"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
              About Us
            </h1>
            <p className="text-lg text-gray-700">
              We are a passionate media team dedicated to capturing and
              preserving life’s most treasured moments. Our expertise in
              photography, videography, and creative storytelling ensures that
              each project we undertake is both visually stunning and
              emotionally powerful.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="flex-1">
            <div className="relative h-96 w-full rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/about/team-creative.png"
                alt="Our Story"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-700">
              Founded with a vision to revolutionize the media industry, our
              journey started with a small team of creatives who shared a common
              love for storytelling. Over the years, we have grown into a
              reputable brand known for delivering high-quality, emotionally
              engaging visual content.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <div className="relative h-96 w-full rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/about/values-integrity.png"
                alt="Our Values"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-700">
              Integrity, creativity, and excellence are the cornerstones of our
              work. We believe in pushing the boundaries of visual storytelling
              while maintaining professionalism and authenticity. Every project
              we take on is executed with passion and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="flex-1">
            <div className="relative h-96 w-full rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/about/experience-client.png"
                alt="Why Choose Us"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-700">
              We go beyond just taking pictures and recording videos—we create
              experiences. Our team works closely with clients to bring their
              vision to life, ensuring a seamless and enjoyable process. With
              our blend of artistic expertise and technical skill, we guarantee
              results that you will cherish forever.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

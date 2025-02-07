import Image from "next/image";

export default function EventCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="text-center bg-white p-6 rounded-lg shadow-md">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="rounded-lg mx-auto"
      />
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
    </div>
  );
}

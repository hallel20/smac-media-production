import { FC } from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  image: string;
  description?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, image, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;

"use client";

import Image from "next/image";

interface DomainCardProps {
  name: string;
  price: string;
  renewPrice?: string;
  offers?: string[];
  description?: string;
}

export default function DomainCard({
  name,
  price,
  renewPrice,
  offers = [],
  description,
}: DomainCardProps) {
  return (
    <div className="flex justify-between items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-all bg-white dark:bg-gray-900 text-black dark:text-white w-full max-w-2xl mx-auto mb-4">
      {/* Left Section */}
      <div className="flex flex-col">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-lg">{name}</span>
          {offers.map((offer, idx) => (
            <span
              key={idx}
              className="bg-yellow-400 text-black text-xs font-medium px-2 py-1 rounded-full"
            >
              {offer}
            </span>
          ))}
        </div>

        {description && (
          <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            {description}
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-end space-y-1">
        <span className="text-xl font-bold flex items-center space-x-1">
          <Image src="/icons/dollar.svg" alt="$" width={16} height={16} />
          <span>{price}</span>
        </span>
        {renewPrice && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            renew ${renewPrice}/yr
          </span>
        )}

        <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
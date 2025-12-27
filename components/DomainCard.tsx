"use client";

import Image from "next/image";

interface DomainCardProps {
  name: string;
  price: string;
  renewPrice?: string;
  offers?: string[];
  dealText?: string;
}

export default function DomainCard({
  name,
  price,
  renewPrice,
  offers = [],
  dealText,
}: DomainCardProps) {
  return (
    <div className="flex justify-between items-center rounded-md p-3 bg-[var(--background)] shadow-sm max-w-full w-full">
      
      {/* LEFT SIDE */}
      <div className="flex-1 pr-3">
        {/* Domain name + badges */}
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold truncate">{name}</span>
          {offers.map((offer, i) => (
            <span
              key={i}
              className="text-[9px] px-1 py-0.5 rounded bg-[var(--main-color-2)] text-black"
            >
              {offer}
            </span>
          ))}
        </div>

        {/* Deal text */}
        {dealText && (
          <div className="text-[10px] mt-1 font-medium opacity-80 truncate">
            {dealText}
          </div>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        
        {/* Price and Renew (no color, no border) */}
        <div className="text-right leading-tight">
          <div className="text-lg font-bold">{price}</div>
          {renewPrice && (
            <div className="text-[9px] opacity-70">
              renew ${renewPrice}/yr
            </div>
          )}
        </div>

        {/* Add to cart icon in separate colored box */}
        <div className="bg-[var(--main-color-1)] p-2 rounded-md flex items-center justify-center">
          <button
            title="Add to cart"
            className="p-2 transition hover:opacity-90"
          >
            <Image
              src="/interface-icons/shopping-cart-add.svg"
              alt="Add to cart"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
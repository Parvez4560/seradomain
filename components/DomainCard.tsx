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
    <div className="flex justify-between items-center border rounded-md p-4 bg-[var(--background)] shadow-sm">
      
      {/* LEFT SIDE */}
      <div>
        {/* Domain name + badges */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">{name}</span>

          {offers.map((offer, i) => (
            <span
              key={i}
              className="text-[11px] px-2 py-0.5 rounded bg-[var(--main-color-2)] text-black"
            >
              {offer}
            </span>
          ))}
        </div>

        {/* Deal text */}
        {dealText && (
          <div className="text-xs mt-1 font-medium opacity-80">
            {dealText}
          </div>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">
        
        {/* Price text (NO dollar icon) */}
        <div className="text-right leading-tight">
          <div className="text-xl font-bold">{price}</div>

          {renewPrice && (
            <div className="text-[11px] opacity-60">
              renew ${renewPrice}/yr
            </div>
          )}
        </div>

        {/* Add to cart icon (bigger) */}
        <button
          title="Add to cart"
          className="p-3 rounded-md border hover:bg-[var(--main-color-2)] transition"
        >
          <Image
            src="/interface-icons/shopping-cart-add.svg"
            alt="Add to cart"
            width={28}
            height={28}
          />
        </button>
      </div>
    </div>
  );
}
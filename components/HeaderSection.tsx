"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HeaderSection() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim() !== "") {
      // সার্চ টেক্সট নিয়ে নতুন পেজে যাওয়া
      router.push(`/search?domain=${encodeURIComponent(query)}`);
    }
  };

  return (
    <header className="relative w-full h-[420px] overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="h-10"></div> {/* উপরের ফাঁকা জায়গা */}

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">
          Buy Your Perfect Domain Name
        </h1>

        <p className="text-base md:text-lg mb-8 max-w-xl text-[var(--foreground)]">
          Find the ideal domain for your business or project in seconds
        </p>

        {/* Search box */}
        <div className="flex w-full max-w-md overflow-hidden rounded-md border border-gray-300 dark:border-gray-600">
          <input
            type="text"
            placeholder="Search for a domain..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 px-4 py-3 bg-[var(--background)] text-[var(--foreground)] focus:outline-none"
          />
          <button
           onClick={handleSearch}
           className="bg-[var(--main-color-2)] px-6 py-3 flex items-center justify-center transition-colors hover:bg-[var(--main-color-1)]"
          >
          <Image
           src="/search.svg"
           alt="Search"
           width={25} // আইকনের সাইজ
           height={25}
           className="filter brightness-0 invert" // আইকনকে ব্লাড/ডার্ক করতে
          />
          </button>
        </div>

        {/* Price strip */}
        <div className="mt-4 flex gap-4 rounded-md bg-[var(--background)] border border-gray-300 dark:border-gray-600 px-5 py-2 text-sm font-semibold text-[var(--foreground)]">
          <span>.COM only $9.18</span>
          <span className="opacity-40">|</span>
          <span className="font-bold">.NET only $12.98</span>
        </div>
      </div>
    </header>
  );
}
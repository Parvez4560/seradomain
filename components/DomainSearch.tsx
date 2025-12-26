"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Props {
  initialQuery?: string;
}

export default function DomainSearch({ initialQuery = "" }: Props) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?domain=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex rounded-md overflow-hidden border border-gray-300 dark:border-gray-600 shadow-md">
        {/* Input field */}
        <input
          type="text"
          placeholder="Search for a domain..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1 px-4 py-3 bg-[var(--background)] text-[var(--foreground)] placeholder-gray-400 focus:outline-none"
        />

        {/* Search button with icon */}
        <button
          onClick={handleSearch}
          className="bg-[var(--main-color-2)] px-5 py-3 flex items-center justify-center transition-colors hover:bg-[var(--main-color-1)]"
        >
          <Image
            src="/search.svg"
            alt="Search"
            width={25} // এখানে আইকন সাইজ
            height={25}
            className="filter brightness-0 invert"
          />
        </button>
      </div>
    </div>
  );
}
// DomainSearch.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  initialQuery?: string;
  updateURL?: boolean;
  onSearch?: (val: string) => void;
}

export default function DomainSearch({ initialQuery = "", updateURL = true, onSearch }: Props) {
  const [query, setQuery] = useState(initialQuery);

  const handleSearch = () => {
    if (!query.trim()) return;
    if (updateURL) {
      console.log("Router push:", query);
    }
    if (onSearch) onSearch(query);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-[var(--background)]">
      <div className="flex rounded-md overflow-hidden border border-gray-300 dark:border-gray-600 shadow-md">
        <input
          type="text"
          placeholder="Search for a domain..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          className="flex-1 px-4 py-3 bg-[var(--background)] text-[var(--foreground)] placeholder-gray-400 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-[var(--main-color-2)] px-5 py-3 flex items-center justify-center transition-colors hover:bg-[var(--main-color-1)]"
        >
          <Image
            src="/interface-icons/search.svg"
            alt="Search"
            width={25}
            height={25}
            className="filter brightness-0 invert"
          />
        </button>
      </div>
    </div>
  );
}
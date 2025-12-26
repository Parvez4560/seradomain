"use client";

import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";
import SearchContent from "../../components/SearchContent";

export default function SearchPage() {
  return (
    <div className="font-sans bg-white dark:bg-black min-h-screen flex flex-col">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <main className="flex-1 p-6 flex flex-col items-center">
        <SearchContent />
      </main>

      <FooterSection />
    </div>
  );
}
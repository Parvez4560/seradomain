"use client";

import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";
import SearchContent from "../../components/SearchContent";
import { Suspense } from "react";

export default function SearchPage() {
  return (
    <div className="font-sans bg-white dark:[color:#101727] min-h-screen flex flex-col">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <main className="flex-1 p-6 flex flex-col items-center">
        <Suspense fallback={null}>
          <SearchContent />
        </Suspense>
      </main>

      <FooterSection />
    </div>
  );
}
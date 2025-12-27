"use client";

import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";
import SearchContent from "../../components/SearchContent";
import { Suspense } from "react";

export default function SearchPage() {
  return (
    <div
      className="font-sans min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
    >
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Main content */}
      <main className="flex-1 p-6 flex flex-col items-center">
        <Suspense fallback={null}>
          <SearchContent />
        </Suspense>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
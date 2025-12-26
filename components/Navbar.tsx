"use client";

import Image from "next/image";
import { useState } from "react";
import SlideMenu from "./SideMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full border-b border-[var(--main-color-2)] bg-[var(--background)] text-[var(--foreground)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Left: Logo + Name */}
          <div className="flex items-center gap-3">
            <Image
              src="/icons/sera-domain.png"
              alt="Sera Domain"
              width={32}
              height={32}
            />
            <span className="text-xl font-semibold text-[var(--foreground)]">
              Sera Domain
            </span>
          </div>

          {/* Right: Menu Icon */}
          <button
            onClick={() => setMenuOpen(true)}
            className="text-2xl font-bold text-[var(--foreground)] hover:text-[var(--main-color-2)]"
            aria-label="Open Menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Slide Menu */}
      <SlideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
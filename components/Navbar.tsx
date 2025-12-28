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

          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center justify-center w-8 h-8 hover:opacity-90"
            aria-label="Open Menu"
          >
            <Image
              src="/interface-icons/menu-burger.svg"
              alt="Menu"
              width={24}
              height={24}
              className=""
            />
          </button>
        </div>
      </nav>

      {/* Slide Menu */}
      <SlideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
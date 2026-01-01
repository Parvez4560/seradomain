"use client";

import Image from "next/image";
import { useState } from "react";
import SlideMenu from "./SideMenu";
import MenuIcon from "./icons/MenuIcon";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full border-b border-[var(--main-color-2)] bg-[var(--background)] text-[var(--foreground)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Left: Logo + Name */}
          <div className="flex items-center gap-3">
            <Image
              src="/seradomain.png"
              alt="SeraDomain"
              width={32}
              height={32}
            />
            <span className="text-xl font-semibold text-[var(--foreground)]">
              SeraDomain
            </span>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center justify-center w-8 h-8 hover:opacity-90"
            aria-label="Open Menu"
          >
            <MenuIcon className="w-6 h-6 text-[var(--foreground)]" />
          </button>
        </div>
      </nav>

      {/* Slide Menu */}
      <SlideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
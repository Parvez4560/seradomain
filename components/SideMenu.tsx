"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import DomainsSubMenu from "./DomainsSubMenu";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SlideMenu({ open, onClose }: Props) {
  const [domainsOpen, setDomainsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleClose = () => {
    setDomainsOpen(false);
    onClose();
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Domains", subMenu: true },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {open && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      <div
        className={`fixed right-0 top-0 z-50 h-full w-72 bg-[var(--background)] text-[var(--foreground)] shadow-lg transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--main-color-2)] px-6 py-4">
          <h3 className="text-lg font-semibold">Menu</h3>
            <button onClick={handleClose} className="p-2">
              <img src="/interface-icons/cross.svg"
                alt="Close"
                className="w-5 h-5" />
            </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col px-6 py-6 text-sm font-medium">
          {menuItems.map((item, index) => (
            <div key={item.name} className="flex flex-col">
              {item.subMenu ? (
                <button
                  onClick={() => setDomainsOpen(true)}
                  className="flex items-center justify-between py-2 hover:text-[var(--main-color-2)] transition-colors"
                >
                  <span>{item.name}</span>
                  <span className="text-lg">›</span>
                </button>
              ) : (
                <Link
                  href={item.href!}
                  onClick={handleClose}
                  className="py-2 hover:text-[var(--main-color-2)] transition-colors"
                >
                  {item.name}
                </Link>
              )}

              {/* Divider line */}
              {index !== menuItems.length - 1 && (
                <span className="block h-px w-full bg-gray-300 dark:bg-gray-600 transition-colors my-1"></span>
              )}
            </div>
          ))}
        </nav>

        {/* Domains SubMenu */}
        <DomainsSubMenu
          open={domainsOpen}
          onBack={() => setDomainsOpen(false)}
          onClose={handleClose}
        />
      </div>
    </>
  );
}
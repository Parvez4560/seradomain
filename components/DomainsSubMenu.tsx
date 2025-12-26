"use client";

import Link from "next/link";

type Props = {
  open: boolean;
  onBack: () => void;
  onClose: () => void;
};

export default function DomainsSubMenu({ open, onBack, onClose }: Props) {
  const menuItems = [
    { name: "Domain Name Search", href: "/domains/search" },
    { name: "Domain Transfer", href: "/domains/transfer" },
    { name: "New TLDs", href: "/domains/new-tlds" },
    { name: "Bulk Domain Search", href: "/domains/bulk-search" },
    { name: "TLD List", href: "/domains/tld-list" },
  ];

  return (
    <div
      className={`absolute top-0 right-0 h-full w-72 bg-[var(--background)] text-[var(--foreground)] shadow-lg transition-transform duration-300
      ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-[var(--main-color-2)] px-6 py-4">
        <button
          onClick={onBack}
          className="text-lg"
          style={{ transform: "rotate(180deg)" }}
        >
          ➔
        </button>
        <h3 className="text-lg font-semibold">Domains</h3>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col px-6 py-6 text-sm font-medium">
        {menuItems.map((item, index) => (
          <div key={item.name} className="flex flex-col">
            <Link
              href={item.href}
              onClick={onClose}
              className="py-2 hover:text-[var(--main-color-2)] transition-colors"
            >
              {item.name}
            </Link>

            {/* Divider line: শেষ আইটেম বাদে */}
            {index !== menuItems.length - 1 && (
              <span className="block h-px w-full bg-gray-300 dark:bg-gray-600 hover:bg-[var(--main-color-2)] transition-colors my-1"></span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
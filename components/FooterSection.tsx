"use client";

export default function FooterSection() {
  return (
    <footer className="py-10 px-6 bg-[#101727] text-white text-center border-t border-[var(--main-color-2)]">
      <p>
        &copy; {new Date().getFullYear()} Sera Domain. All rights reserved.
      </p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="/privacy" className="hover:text-[var(--main-color-2)]">Privacy Policy</a>
        <a href="/terms" className="hover:text-[var(--main-color-2)]">Terms of Service</a>
        <a href="/contact" className="hover:text-[var(--main-color-2)]">Contact</a>
      </div>
    </footer>
  );
}
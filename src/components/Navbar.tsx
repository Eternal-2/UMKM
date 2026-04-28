"use client";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#tentang", label: "Tentang Kami" },
  { href: "#menu", label: "Menu" },
  { href: "#galeri", label: "Galeri" },
  { href: "#ulasan", label: "Ulasan" },
  { href: "#kontak", label: "Kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "glass border-b border-amber-100 shadow-sm py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#beranda" className="flex items-center gap-2 group">
          <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform">
            🍱
          </span>
          <div className="leading-tight">
            <p className="font-display font-bold text-stone-900 text-base leading-none">Bu Sari</p>
            <p className="text-amber-600 text-xs font-medium">Warung Nasi</p>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="px-3 py-2 rounded-lg text-sm font-medium text-stone-700 hover:text-amber-700 hover:bg-amber-50 transition-all">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#pesan" className="hidden md:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md hover:shadow-amber-300 transition-all">
          <ShoppingBag size={15} /> Pesan Sekarang
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-amber-50 transition" aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-amber-100 px-4 pb-4 pt-3 space-y-1">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-xl text-stone-700 hover:text-amber-700 hover:bg-amber-50 font-medium transition">
              {l.label}
            </a>
          ))}
          <a href="#pesan" onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 mt-2 bg-amber-500 text-white font-bold py-3 rounded-xl">
            <ShoppingBag size={15} /> Pesan Sekarang
          </a>
        </div>
      )}
    </nav>
  );
}

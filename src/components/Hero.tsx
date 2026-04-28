"use client";
import { MapPin, Star, Clock, ShoppingBag, ChevronDown } from "lucide-react";
import { profile } from "@/data/data";

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-screen flex flex-col justify-center overflow-x-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Blobs */}
      <div className="absolute top-20 -right-20 w-80 h-80 bg-amber-200/50 blob -z-10" />
      <div className="absolute -bottom-10 -left-20 w-72 h-72 bg-orange-200/40 blob -z-10" style={{animationDelay:"3s"}} />

      {/* Dot grid */}
      <div className="absolute inset-0 -z-10 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #f59e0b 1px, transparent 0)",
        backgroundSize: "36px 36px",
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 w-full grid lg:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div className="space-y-6">
          {/* Open badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 text-green-800 text-sm font-semibold px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Buka Sekarang · Sampai 21.00 WIB
          </div>

          <div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-stone-900 leading-tight">
              Masakan Rumahan
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                Otentik & Lezat
              </span>
              <span className="block text-3xl sm:text-4xl mt-1">Sejak Tahun 1998 🍳</span>
            </h1>
            <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed max-w-lg">
              Warung Nasi Bu Sari menyajikan cita rasa masakan Jawa Tengah yang otentik — dimasak dengan resep turun-temurun, bahan segar setiap hari, dan penuh cinta.
            </p>
          </div>

          {/* Rating row */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className={i < Math.floor(profile.rating) ? "fill-amber-400 text-amber-400" : "text-stone-300"} />
              ))}
              <span className="font-bold text-stone-800 ml-1">{profile.rating}</span>
              <span className="text-stone-500 text-sm">({profile.totalReviews} ulasan)</span>
            </div>
            <div className="flex items-center gap-1 text-stone-600 text-sm">
              <MapPin size={14} className="text-amber-500" /> Banyumanik, Semarang
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a href="#pesan" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-amber-200 transition-all text-sm sm:text-base">
              <ShoppingBag size={18} /> Pesan Sekarang
            </a>
            <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg shadow-green-200 transition-all text-sm sm:text-base">
              💬 WhatsApp
            </a>
            <a href="#menu" className="inline-flex items-center gap-2 bg-white border border-stone-200 hover:border-amber-300 text-stone-800 font-semibold px-6 py-3.5 rounded-2xl shadow-sm transition-all text-sm sm:text-base">
              Lihat Menu
            </a>
          </div>

          {/* Delivery badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {["🛵 GoFood", "🟢 GrabFood", "🟠 ShopeeFood"].map((d) => (
              <span key={d} className="bg-white border border-stone-200 text-stone-600 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Right: menu showcase */}
        <div className="relative hidden lg:block">
          <div className="bg-white rounded-3xl shadow-2xl p-8 ml-6 border border-amber-100">
            <p className="font-display font-bold text-stone-900 text-lg mb-5">🌟 Menu Favorit Hari Ini</p>
            <div className="space-y-4">
              {[
                { emoji: "🍱", name: "Nasi Campur Spesial", price: "Rp 18.000", badge: "Terlaris" },
                { emoji: "🍗", name: "Nasi Ayam Bakar", price: "Rp 22.000", badge: "Favorit" },
                { emoji: "🥘", name: "Nasi Gudeg Komplit", price: "Rp 20.000", badge: "Khas" },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-4 p-3 rounded-xl hover:bg-amber-50 transition group">
                  <span className="text-3xl">{item.emoji}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-stone-900 text-sm">{item.name}</p>
                    <p className="text-amber-600 font-bold text-sm">{item.price}</p>
                  </div>
                  <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded-full">{item.badge}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-stone-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-stone-600">
                <Clock size={14} className="text-amber-500" />
                <span>Buka <strong>06.00 – 21.00</strong> WIB</span>
              </div>
              <span className="text-green-600 font-semibold text-sm">● Buka</span>
            </div>
          </div>
          {/* Float cards */}
          <div className="absolute -top-5 -left-5 bg-white rounded-2xl shadow-xl p-4 animate-float border border-amber-100">
            <p className="text-2xl font-display font-extrabold text-amber-600">{profile.rating}⭐</p>
            <p className="text-xs text-stone-500">{profile.totalReviews}+ ulasan</p>
          </div>
          <div className="absolute -bottom-5 right-2 bg-amber-500 rounded-2xl shadow-xl p-4 text-white animate-float" style={{animationDelay:"2s"}}>
            <p className="text-2xl font-display font-extrabold">25+</p>
            <p className="text-xs opacity-90">Menu Tersedia</p>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#tentang" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-stone-400 hover:text-amber-500 transition">
        <span className="text-xs font-medium">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
}

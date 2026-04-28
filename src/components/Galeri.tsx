"use client";
import { gallery } from "@/data/data";

export default function Galeri() {
  return (
    <section id="galeri" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Galeri</span>
          <h2 className="font-display text-4xl font-extrabold text-stone-900 mt-2">
            Intip <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Kelezatan Kami</span>
          </h2>
          <p className="text-stone-600 mt-3">Foto-foto menu dan suasana Warung Nasi Bu Sari</p>
        </div>

        {/* Grid galeri */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((item, i) => (
            <div key={i}
              className={`bg-gradient-to-br ${item.color} rounded-2xl flex flex-col items-center justify-center gap-3 card-hover cursor-pointer group
                ${i === 0 ? "col-span-2 md:col-span-1 row-span-2" : ""}`}
              style={{ minHeight: i === 0 ? "280px" : "130px" }}>
              <span className={`transition-transform group-hover:scale-110 duration-300 ${i === 0 ? "text-7xl" : "text-5xl"}`}>
                {item.emoji}
              </span>
              <p className={`text-white font-bold drop-shadow ${i === 0 ? "text-base" : "text-sm"}`}>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Social media CTA */}
        <div className="mt-10 text-center">
          <p className="text-stone-600 mb-4">Ikuti kami untuk update menu dan promo terbaru!</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://instagram.com/warungbusari" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all">
              📸 Instagram
            </a>
            <a href="https://facebook.com/warungbusari" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 rounded-xl shadow-md transition-all">
              👤 Facebook
            </a>
            <a href="https://tiktok.com/@warungbusari" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold px-5 py-3 rounded-xl shadow-md transition-all">
              🎵 TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

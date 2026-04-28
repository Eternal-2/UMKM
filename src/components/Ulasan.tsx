"use client";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { reviews, profile } from "@/data/data";

export default function Ulasan() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIdx((i) => (i + 1) % reviews.length);

  return (
    <section id="ulasan" className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Testimoni</span>
          <h2 className="font-display text-4xl font-extrabold text-stone-900 mt-2">
            Kata <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Pelanggan Setia Kami</span>
          </h2>
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="font-display font-extrabold text-5xl text-amber-500">{profile.rating}</span>
            <div className="text-left">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-stone-500 text-sm mt-1">{profile.totalReviews} ulasan di Google</p>
            </div>
          </div>
        </div>

        {/* Desktop: 2 col grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 card-hover">
              <div className="flex gap-0.5 mb-3">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-stone-700 text-sm leading-relaxed italic mb-4">&ldquo;{r.comment}&rdquo;</p>
              <div className="flex items-center gap-3 pt-3 border-t border-stone-100">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                  {r.avatar}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-stone-900 text-sm truncate">{r.name}</p>
                  <p className="text-stone-400 text-xs">{r.date}</p>
                </div>
              </div>
              <div className="mt-3 bg-amber-50 rounded-lg px-3 py-1.5">
                <p className="text-amber-700 text-xs font-medium">📋 {r.menu}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: slider */}
        <div className="md:hidden">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 mx-auto max-w-sm">
            <div className="flex gap-0.5 mb-3">
              {[...Array(reviews[idx].rating)].map((_, j) => (
                <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-stone-700 leading-relaxed italic mb-4">&ldquo;{reviews[idx].comment}&rdquo;</p>
            <div className="flex items-center gap-3 pt-3 border-t border-stone-100">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                {reviews[idx].avatar}
              </div>
              <div>
                <p className="font-bold text-stone-900">{reviews[idx].name}</p>
                <p className="text-stone-400 text-xs">{reviews[idx].date}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-5">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:bg-amber-50 transition">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all ${i === idx ? "bg-amber-500 w-6" : "bg-stone-300 w-2"}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:bg-amber-50 transition">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Leave review CTA */}
        <div className="mt-10 text-center">
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-amber-300 text-amber-700 hover:bg-amber-50 font-bold px-6 py-3 rounded-xl transition">
            ⭐ Tulis Ulasan di Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

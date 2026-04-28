"use client";
import { Clock, MapPin, Users, Award } from "lucide-react";
import { profile } from "@/data/data";

export default function Tentang() {
  return (
    <section id="tentang" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
              <div className="text-center z-10">
                <div className="text-8xl mb-4">👩‍🍳</div>
                <p className="font-display font-extrabold text-amber-800 text-2xl">Bu Sari</p>
                <p className="text-amber-700 mt-1">Pendiri & Chef Utama</p>
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-200/50 blob" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-200/50 blob" style={{animationDelay:"2s"}} />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full max-w-sm">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "25+", label: "Tahun Berdiri" },
                  { value: "50+", label: "Menu Pernah Ada" },
                  { value: "1000+", label: "Pelanggan Setia" },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl shadow-lg p-4 text-center border border-amber-100">
                    <p className="font-display font-extrabold text-xl text-amber-600">{s.value}</p>
                    <p className="text-stone-500 text-xs mt-0.5 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="mt-8 lg:mt-0 space-y-6">
            <div>
              <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Tentang Kami</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-stone-900 mt-2 leading-tight">
                Cerita di Balik
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600"> Setiap Masakan</span>
              </h2>
            </div>

            <p className="text-stone-600 leading-relaxed">
              Warung Nasi Bu Sari berdiri sejak tahun <strong>1998</strong> di Banyumanik, Semarang. Berawal dari dapur rumah dengan hanya 3 menu, kini kami melayani ratusan pelanggan setiap harinya dengan 25+ pilihan menu masakan Jawa Tengah.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Setiap masakan dibuat dengan <strong>bahan segar</strong> yang dibeli setiap pagi dari pasar lokal, menggunakan resep turun-temurun yang telah diwariskan selama tiga generasi.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { icon: <Clock size={20} className="text-amber-500" />, title: "Jam Buka", value: "06.00 – 21.00 WIB" },
                { icon: <MapPin size={20} className="text-red-500" />, title: "Lokasi", value: "Banyumanik, Semarang" },
                { icon: <Users size={20} className="text-blue-500" />, title: "Tim Kami", value: `${profile.employees} Karyawan Setia` },
                { icon: <Award size={20} className="text-green-500" />, title: "Berdiri Sejak", value: profile.founded },
              ].map((item) => (
                <div key={item.title} className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
                  <div className="mb-2">{item.icon}</div>
                  <p className="text-xs text-stone-500 font-medium">{item.title}</p>
                  <p className="font-bold text-stone-900 text-sm mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <a href="#menu" className="flex-1 text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition">
                Lihat Menu Lengkap
              </a>
              <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="flex-1 text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition">
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

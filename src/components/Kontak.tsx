import { MapPin, Clock, MessageCircle } from "lucide-react";
import { profile } from "@/data/data";

export default function Kontak() {
  return (
    <section id="kontak" className="py-24 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Kontak & Lokasi</span>
          <h2 className="font-display text-4xl font-extrabold text-stone-900 mt-2">
            Temukan <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Warung Bu Sari</span>
          </h2>
          <p className="text-stone-600 mt-3">Kunjungi kami langsung atau hubungi via WhatsApp</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          {/* Alamat */}
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
            className="flex gap-4 p-5 bg-white rounded-2xl border border-stone-100 shadow-sm hover:border-amber-200 hover:shadow-md transition-all group">
            <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition">
              <MapPin size={20} className="text-red-500" />
            </div>
            <div>
              <p className="text-stone-500 text-xs font-semibold uppercase tracking-wide">Alamat</p>
              <p className="text-stone-800 font-semibold mt-0.5 text-sm">{profile.address}</p>
              <p className="text-amber-600 text-xs font-medium mt-1">Buka di Google Maps →</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a href={`https://wa.me/${profile.whatsapp}?text=Halo Bu Sari!`} target="_blank" rel="noopener noreferrer"
            className="flex gap-4 p-5 bg-white rounded-2xl border border-stone-100 shadow-sm hover:border-green-200 hover:shadow-md transition-all group">
            <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition">
              <MessageCircle size={20} className="text-green-500" />
            </div>
            <div>
              <p className="text-stone-500 text-xs font-semibold uppercase tracking-wide">WhatsApp</p>
              <p className="text-stone-800 font-semibold mt-0.5">{profile.phone}</p>
              <p className="text-green-600 text-xs font-medium mt-1">Chat sekarang →</p>
            </div>
          </a>
        </div>

        {/* Jam buka */}
        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center">
              <Clock size={20} className="text-amber-500" />
            </div>
            <p className="font-bold text-stone-900 text-lg">Jam Operasional</p>
            <span className="ml-auto bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">● Buka Sekarang</span>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {profile.hours.map((h) => (
              <div key={h.day} className="bg-amber-50 rounded-xl p-3 text-center">
                <p className="text-stone-500 text-xs font-medium">{h.day}</p>
                <p className="font-bold text-stone-900 text-sm mt-0.5">{h.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl h-48 flex items-center justify-center border border-amber-200">
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 text-amber-700 hover:text-amber-900 transition group">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition">
              <MapPin size={28} className="text-red-500" />
            </div>
            <div className="text-center">
              <p className="font-bold text-lg">Buka di Google Maps</p>
              <p className="text-sm text-amber-600">Banyumanik, Semarang, Jawa Tengah</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

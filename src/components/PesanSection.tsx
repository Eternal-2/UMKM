"use client";
import { useState } from "react";
import { Loader2, CheckCircle, Calendar } from "lucide-react";
import { profile } from "@/data/data";

export default function PesanSection() {
  const [tab, setTab] = useState<"online" | "booking">("online");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ nama: "", hp: "", tanggal: "", jam: "", jumlah: "", catatan: "" });
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleBooking = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setDone(true);
  };

  return (
    <section id="pesan" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Pemesanan</span>
          <h2 className="font-display text-4xl font-extrabold text-stone-900 mt-2">
            Pesan & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Booking Meja</span>
          </h2>
          <p className="text-stone-600 mt-3">Pesan langsung atau booking meja untuk acara spesial Anda</p>
        </div>

        {/* Tabs */}
        <div className="flex bg-stone-100 rounded-2xl p-1 mb-8 max-w-sm mx-auto">
          {(["online", "booking"] as const).map((t) => (
            <button key={t} onClick={() => { setTab(t); setDone(false); }}
              className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
                tab === t ? "bg-white shadow-sm text-amber-700" : "text-stone-500 hover:text-stone-700"
              }`}>
              {t === "online" ? "🛵 Pesan Online" : "📅 Booking Meja"}
            </button>
          ))}
        </div>

        {tab === "online" && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "💬", label: "WhatsApp", desc: "Chat langsung dengan Bu Sari", color: "border-green-300 hover:border-green-400", btn: "bg-green-500 hover:bg-green-600", href: `https://wa.me/${profile.whatsapp}?text=Halo Bu Sari, saya ingin pesan makanan`, text: "Pesan via WA" },
              { icon: "🔴", label: "GoFood", desc: "Pesan via aplikasi GoFood", color: "border-red-300 hover:border-red-400", btn: "bg-red-500 hover:bg-red-600", href: "#", text: "Buka GoFood" },
              { icon: "🟢", label: "GrabFood", desc: "Pesan via aplikasi GrabFood", color: "border-green-400 hover:border-green-500", btn: "bg-green-600 hover:bg-green-700", href: "#", text: "Buka GrabFood" },
              { icon: "🟠", label: "ShopeeFood", desc: "Pesan via aplikasi ShopeeFood", color: "border-orange-300 hover:border-orange-400", btn: "bg-orange-500 hover:bg-orange-600", href: "#", text: "Buka ShopeeFood" },
            ].map((ch) => (
              <div key={ch.label} className={`bg-white rounded-2xl p-5 border-2 ${ch.color} card-hover flex flex-col gap-3`}>
                <div className="text-3xl">{ch.icon}</div>
                <div>
                  <p className="font-bold text-stone-900 text-base">{ch.label}</p>
                  <p className="text-stone-500 text-sm mt-0.5">{ch.desc}</p>
                </div>
                <a href={ch.href} target="_blank" rel="noopener noreferrer"
                  className={`${ch.btn} text-white font-bold py-2.5 px-4 rounded-xl text-sm text-center transition mt-auto`}>
                  {ch.text}
                </a>
              </div>
            ))}
          </div>
        )}

        {tab === "booking" && (
          <div className="bg-white rounded-3xl border border-amber-100 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white">
              <div className="flex items-center gap-3">
                <Calendar size={24} />
                <div>
                  <p className="font-bold text-lg">Booking Meja / Prasmanan</p>
                  <p className="text-amber-100 text-sm">Untuk arisan, gathering, ulang tahun, dll.</p>
                </div>
              </div>
            </div>

            {done ? (
              <div className="p-10 text-center">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={56} />
                <h3 className="font-display font-extrabold text-2xl text-stone-900 mb-2">Booking Terkirim!</h3>
                <p className="text-stone-600">Tim Bu Sari akan menghubungi Anda dalam 1-2 jam untuk konfirmasi.</p>
                <button onClick={() => { setDone(false); setForm({ nama:"", hp:"", tanggal:"", jam:"", jumlah:"", catatan:"" }); }}
                  className="mt-6 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl transition">
                  Booking Lagi
                </button>
              </div>
            ) : (
              <div className="p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { k: "nama", label: "Nama Lengkap", ph: "Nama pemesan" },
                    { k: "hp", label: "No. WhatsApp", ph: "08xx-xxxx-xxxx" },
                  ].map((f) => (
                    <div key={f.k}>
                      <label className="block text-sm font-semibold text-stone-700 mb-1.5">{f.label}</label>
                      <input value={(form as any)[f.k]} onChange={(e) => set(f.k, e.target.value)} placeholder={f.ph}
                        className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 text-stone-800 placeholder-stone-400" />
                    </div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { k: "tanggal", label: "Tanggal", type: "date" },
                    { k: "jam", label: "Jam", type: "time" },
                    { k: "jumlah", label: "Jumlah Orang", type: "number" },
                  ].map((f) => (
                    <div key={f.k}>
                      <label className="block text-sm font-semibold text-stone-700 mb-1.5">{f.label}</label>
                      <input type={f.type} value={(form as any)[f.k]} onChange={(e) => set(f.k, e.target.value)}
                        min={f.type === "number" ? "1" : undefined}
                        className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 text-stone-800" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-1.5">Catatan Tambahan</label>
                  <textarea value={form.catatan} onChange={(e) => set("catatan", e.target.value)}
                    placeholder="Menu pilihan, tema acara, permintaan khusus..."
                    rows={3} className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 text-stone-800 placeholder-stone-400 resize-none" />
                </div>
                <button onClick={handleBooking} disabled={loading || !form.nama || !form.hp || !form.tanggal}
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-stone-300 text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2 text-base">
                  {loading ? <><Loader2 size={18} className="animate-spin" /> Mengirim...</> : "📅 Konfirmasi Booking"}
                </button>
                <p className="text-xs text-stone-400 text-center">Booking minimal H-1. Kami akan menghubungi Anda untuk konfirmasi.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

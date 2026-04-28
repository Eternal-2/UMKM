import { profile } from "@/data/data";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🍱</span>
              <div>
                <p className="font-display font-bold text-white text-lg leading-none">Warung Nasi</p>
                <p className="text-amber-400 font-bold text-lg leading-none">Bu Sari</p>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed mb-5">
              Masakan rumahan otentik khas Jawa Tengah sejak 1998. Dimasak dengan resep turun-temurun dan bahan segar setiap hari.
            </p>
            {/* Socmed */}
            <div className="flex gap-3 flex-wrap">
              {[
                { icon: "📸", href: profile.social.instagram, label: "Instagram" },
                { icon: "👤", href: profile.social.facebook, label: "Facebook" },
                { icon: "🎵", href: profile.social.tiktok, label: "TikTok" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                  className="w-9 h-9 bg-stone-800 hover:bg-amber-600 rounded-lg flex items-center justify-center text-lg transition">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Menu Cepat</h4>
            <ul className="space-y-2.5">
              {["#beranda|Beranda", "#tentang|Tentang Kami", "#menu|Katalog Menu", "#galeri|Galeri", "#ulasan|Ulasan", "#pesan|Pesan Sekarang"].map((l) => {
                const [href, label] = l.split("|");
                return (
                  <li key={href}><a href={href} className="text-stone-400 hover:text-amber-400 text-sm transition">{label}</a></li>
                );
              })}
            </ul>
          </div>

          {/* Order channels */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Pesan Melalui</h4>
            <ul className="space-y-2.5">
              {[
                { icon: "💬", label: "WhatsApp", href: `https://wa.me/${profile.whatsapp}` },
                { icon: "🔴", label: "GoFood", href: profile.social.gofood },
                { icon: "🟢", label: "GrabFood", href: profile.social.grabfood },
                { icon: "🟠", label: "ShopeeFood", href: profile.social.shopeefood },
              ].map((ch) => (
                <li key={ch.label}>
                  <a href={ch.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone-400 hover:text-amber-400 text-sm transition">
                    <span>{ch.icon}</span> {ch.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Informasi</h4>
            <div className="space-y-3 text-sm text-stone-400">
              <p>📍 {profile.address}</p>
              <p>📞 {profile.phone}</p>
              <p>✉️ {profile.email}</p>
              <div className="pt-2 space-y-1">
                {profile.hours.map((h) => (
                  <p key={h.day} className="text-xs"><span className="text-stone-500">{h.day}:</span> {h.time}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-stone-500">
          <p>© 2025 Warung Nasi Bu Sari. Semua hak dilindungi.</p>
          <p>Didigitalkan dengan ❤️ untuk UMKM Indonesia</p>
        </div>
      </div>
    </footer>
  );
}

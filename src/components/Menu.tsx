"use client";
import { useState, useMemo } from "react";
import { Search, ShoppingCart, Plus, Minus, X } from "lucide-react";
import { menu, categories } from "@/data/data";

type CartItem = { id: number; name: string; price: number; qty: number; emoji: string };

function SpicyDots({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3].map((i) => (
        <span key={i} className={`text-xs ${i <= level ? "opacity-100" : "opacity-20"}`}>🌶️</span>
      ))}
    </div>
  );
}

export default function Menu() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("Semua");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const filtered = useMemo(() => {
    return menu.filter((m) => {
      const matchCat = cat === "Semua" || m.category === cat;
      const matchQ = !search || m.name.toLowerCase().includes(search.toLowerCase()) || m.description.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchQ;
    });
  }, [search, cat]);

  const handleSearch = (v: string) => { setLoading(true); setSearch(v); setTimeout(() => setLoading(false), 250); };

  const addToCart = (item: typeof menu[0]) => {
    setCart((prev) => {
      const ex = prev.find((c) => c.id === item.id);
      if (ex) return prev.map((c) => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { id: item.id, name: item.name, price: item.price, qty: 1, emoji: item.emoji }];
    });
  };

  const removeFromCart = (id: number) => setCart((prev) => prev.filter((c) => c.id !== id));
  const updateQty = (id: number, delta: number) => {
    setCart((prev) => prev.map((c) => c.id === id ? { ...c, qty: Math.max(0, c.qty + delta) } : c).filter((c) => c.qty > 0));
  };

  const totalItems = cart.reduce((s, c) => s + c.qty, 0);
  const totalPrice = cart.reduce((s, c) => s + c.price * c.qty, 0);

  const waMessage = encodeURIComponent(
    "Halo Bu Sari! Saya ingin memesan:\n" +
    cart.map((c) => `- ${c.name} x${c.qty} = Rp ${(c.price * c.qty).toLocaleString("id-ID")}`).join("\n") +
    `\n\nTotal: Rp ${totalPrice.toLocaleString("id-ID")}\n\nMohon konfirmasi pesanan saya. Terima kasih!`
  );

  return (
    <section id="menu" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Katalog Produk</span>
          <h2 className="font-display text-4xl font-extrabold text-stone-900 mt-2">
            Menu <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Pilihan Kami</span>
          </h2>
          <p className="text-stone-600 mt-3 max-w-xl mx-auto">Semua menu dimasak fresh setiap hari. Harga sudah termasuk nasi dan lauk pendamping.</p>
        </div>

        {/* Search + cart button */}
        <div className="flex gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={17} />
            <input value={search} onChange={(e) => handleSearch(e.target.value)}
              placeholder="Cari menu..."
              className="w-full pl-11 pr-4 py-3.5 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-sm text-stone-800 placeholder-stone-400" />
          </div>
          <button onClick={() => setCartOpen(true)}
            className="relative bg-amber-500 hover:bg-amber-600 text-white px-4 py-3.5 rounded-xl font-bold flex items-center gap-2 shadow-md transition">
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Keranjang</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-1">
          {categories.map((c) => (
            <button key={c} onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                cat === c ? "bg-amber-500 text-white shadow-md" : "bg-white border border-stone-200 text-stone-600 hover:border-amber-300"
              }`}>
              {c}
            </button>
          ))}
        </div>

        {/* Result count */}
        <p className="text-stone-500 text-sm mb-5">
          {loading ? <span className="animate-pulse">Mencari...</span>
            : <span>Menampilkan <strong className="text-stone-800">{filtered.length}</strong> menu</span>}
        </p>

        {/* Menu list — compact row on mobile, card grid on desktop */}
        <div className="flex flex-col gap-2.5 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-5">
          {filtered.map((item) => {
            const inCart = cart.find((c) => c.id === item.id);
            return (
              <div key={item.id} className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md card-hover border border-stone-100">
                {/* Mobile: horizontal row | Desktop: vertical card */}
                <div className="flex sm:flex-col">
                  {/* Emoji */}
                  <div className="w-16 sm:w-full h-16 sm:h-28 bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center flex-shrink-0 relative">
                    <span className="text-2xl sm:text-6xl">{item.emoji}</span>
                    {item.badge && (
                      <span className={`hidden sm:block absolute top-3 right-3 ${item.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {/* Content */}
                  <div className="flex-1 px-3 py-2 sm:p-4 flex items-center sm:flex-col sm:items-stretch justify-between gap-2 min-w-0">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h3 className="font-display font-bold text-stone-900 text-sm leading-tight">{item.name}</h3>
                        {item.badge && (
                          <span className={`sm:hidden flex-shrink-0 ${item.badgeColor} text-white text-xs font-bold px-1.5 py-0.5 rounded-full`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="font-extrabold text-amber-600 text-sm sm:text-lg sm:mt-2">
                        Rp {item.price.toLocaleString("id-ID")}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      {inCart ? (
                        <div className="flex items-center gap-1.5">
                          <button onClick={() => updateQty(item.id, -1)} className="w-6 h-6 sm:w-7 sm:h-7 bg-amber-100 hover:bg-amber-200 rounded-full flex items-center justify-center transition">
                            <Minus size={11} className="text-amber-700" />
                          </button>
                          <span className="font-bold text-stone-900 w-4 text-center text-sm">{inCart.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="w-6 h-6 sm:w-7 sm:h-7 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center transition">
                            <Plus size={11} className="text-white" />
                          </button>
                        </div>
                      ) : (
                        <button onClick={() => addToCart(item)}
                          className="bg-amber-500 hover:bg-amber-600 text-white px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition whitespace-nowrap">
                          <Plus size={11} /> Tambah
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-stone-400">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-lg font-semibold">Menu tidak ditemukan</p>
          </div>
        )}
      </div>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end" onClick={() => setCartOpen(false)}>
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="relative bg-white w-full max-w-md h-full flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-5 border-b border-stone-100">
              <h3 className="font-display font-bold text-xl">🛒 Keranjang Pesanan</h3>
              <button onClick={() => setCartOpen(false)} className="p-2 hover:bg-stone-100 rounded-xl transition"><X size={20} /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {cart.length === 0 ? (
                <div className="text-center py-16 text-stone-400">
                  <div className="text-5xl mb-3">🍽️</div>
                  <p className="font-semibold">Keranjang masih kosong</p>
                  <p className="text-sm mt-1">Tambahkan menu favorit Anda</p>
                </div>
              ) : cart.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-3 bg-stone-50 rounded-xl">
                  <span className="text-2xl">{item.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-stone-900 text-sm truncate">{item.name}</p>
                    <p className="text-amber-600 text-sm font-bold">Rp {(item.price * item.qty).toLocaleString("id-ID")}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQty(item.id, -1)} className="w-7 h-7 bg-amber-100 hover:bg-amber-200 rounded-full flex items-center justify-center">
                      <Minus size={12} className="text-amber-700" />
                    </button>
                    <span className="font-bold text-sm w-4 text-center">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center">
                      <Plus size={12} className="text-white" />
                    </button>
                    <button onClick={() => removeFromCart(item.id)} className="w-7 h-7 bg-red-100 hover:bg-red-200 rounded-full flex items-center justify-center ml-1">
                      <X size={12} className="text-red-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {cart.length > 0 && (
              <div className="p-5 border-t border-stone-100 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-stone-600 font-medium">Total Pesanan</span>
                  <span className="font-extrabold text-xl text-amber-600">Rp {totalPrice.toLocaleString("id-ID")}</span>
                </div>
                <a href={`https://wa.me/6281234567890?text=${waMessage}`} target="_blank" rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition text-base">
                  💬 Pesan via WhatsApp
                </a>
                <p className="text-xs text-stone-400 text-center">Pesanan akan dikonfirmasi oleh Bu Sari via WhatsApp</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

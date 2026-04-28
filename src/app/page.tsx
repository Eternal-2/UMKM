import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tentang from "@/components/Tentang";
import Menu from "@/components/Menu";
import Galeri from "@/components/Galeri";
import Ulasan from "@/components/Ulasan";
import PesanSection from "@/components/PesanSection";
import Kontak from "@/components/Kontak";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Tentang />
      <Menu />
      <Galeri />
      <Ulasan />
      <PesanSection />
      <Kontak />
      <Footer />
    </main>
  );
}

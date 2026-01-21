import Link from 'next/link';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 pb-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Instruction Section */}
      <section className="px-6 py-12 max-w-4xl mx-auto text-center border-b border-zinc-200">
        <p className="text-zinc-600 text-lg mb-4">
          Pilih salah satu menu di bawah untuk menjelajahi lebih lanjut
        </p>
        <p className="text-zinc-500 text-sm">
          Arahkan kursor ke ikon untuk melihat pilihan
        </p>
      </section>

      {/* Main Menu */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link 
            href="/story" 
            className="group p-8 border-2 border-zinc-200 rounded-lg hover:border-zinc-900 transition-all hover:shadow-lg"
          >
            <h2 className="text-3xl font-light mb-4 text-zinc-900 group-hover:text-zinc-700">Story</h2>
            <p className="text-zinc-600 leading-relaxed">
              Kisah lengkap tentang Zero Two, dari dunia distopia hingga warisannya yang abadi.
            </p>
          </Link>

          <Link 
            href="/photos" 
            className="group p-8 border-2 border-zinc-200 rounded-lg hover:border-zinc-900 transition-all hover:shadow-lg"
          >
            <h2 className="text-3xl font-light mb-4 text-zinc-900 group-hover:text-zinc-700">Photos</h2>
            <p className="text-zinc-600 leading-relaxed">
              Koleksi foto dan gambar Zero Two yang ikonik.
            </p>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 max-w-4xl mx-auto border-t border-zinc-200 text-center">
        <p className="text-zinc-500 text-sm">
          Darling in the Franxx © ZERO by Thanzero 
        </p>
      </footer>
    </div>
  );
}

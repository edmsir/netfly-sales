import { reps } from "@/data/reps";
import { RepCard } from "@/components/RepCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 blur-[120px] rounded-full" />
      </div>

      {/* Hero Section */}
      <header className="relative container mx-auto px-6 pt-32 pb-20 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 text-blue-400 text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
          Netfly Satış Platformu
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
          Profesyonel <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
            Satış Ekibimiz
          </span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Uzman temsilcilerimizle tanışın, ürün portföyümüzü keşfedin ve doğrudan iletişime geçin.
        </p>
      </header>

      {/* Reps Grid Section */}
      <div className="container mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reps.map((rep) => (
            <RepCard
              key={rep.id}
              username={rep.username}
              name={rep.name}
              title={rep.title}
              image={rep.profileImage}
              phone={rep.contactInfo.phone}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Netfly Sales. Tüm hakları saklıdır.</p>
      </footer>
    </main>
  );
}

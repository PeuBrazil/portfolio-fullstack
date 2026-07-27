export function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800/80">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-mono font-bold text-green-500 tracking-tight">&lt;JP.Dev /&gt;</span>
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-400">
          <a href="#about" className="hover:text-zinc-50 transition-colors">Sobre</a>
          <a href="#projects" className="hover:text-zinc-50 transition-colors">Projetos</a>
          <a href="#contact" className="hover:text-zinc-50 transition-colors">Contato</a>
        </nav>
      </div>
    </header>
  );
}
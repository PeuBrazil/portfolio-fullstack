export function Hero() {
  return (
    <section className="space-y-6 pt-12 max-w-3xl">
      <p className="font-mono text-xs font-semibold tracking-widest text-green-500 uppercase">Olá, o meu nome é</p>
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-linear-to-r from-zinc-50 via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
        João Pedro M. Brazil
      </h1>
      <h2 className="text-xl sm:text-2xl font-medium text-zinc-400">
        Desenvolvedor Full Stack especializado em Typescript, React, PHP e Laravel.
      </h2>
      <p className="text-zinc-400 leading-relaxed max-w-xl">
        Focado na construção e refatoração de ecossistemas completos. Crio interfaces fluidas no front-end e construo arquiteturas de back-end sólidas, sempre priorizando regras de negócio claras e a integridade do banco de dados.
      </p>
      <div className="pt-4">
        <a href="#projects" className="inline-flex items-center justify-center px-5 h-11 text-sm font-medium text-zinc-950 bg-zinc-50 rounded-lg hover:bg-zinc-200 transition-colors">
          Ver Projetos
        </a>
      </div>
    </section>
  );
}
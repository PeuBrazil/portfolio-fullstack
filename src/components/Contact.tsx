export function Contact() {
  return (
    <section id="contact" className="border-t border-zinc-800 pt-16 text-center max-w-xl mx-auto space-y-6">
      <p className="font-mono text-xs font-semibold tracking-widest text-green-500 uppercase">03. O que se segue?</p>
      <h3 className="text-3xl font-bold tracking-tight">Entrar em Contato</h3>
      <p className="text-zinc-400 leading-relaxed">
        Estou sempre aberto a novas oportunidades e desafios técnicos em desenvolvimento web. Seja para discutir processos seletivos, arquitetura de sistemas, ou apenas bater um papo sobre tecnologia, a minha caixa de entrada está à disposição.
      </p>
      <div className="pt-4">
        <a href="mailto:seu-email@gmail.com" className="inline-flex items-center justify-center px-6 h-12 text-sm font-semibold text-green-500 border border-green-500/30 rounded-lg hover:bg-green-500/10 transition-colors">
          Diga Olá
        </a>
      </div>
    </section>
  );
}
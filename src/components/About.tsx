export function About() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-zinc-800 pt-16">
      <div className="md:col-span-1">
        <h3 className="text-lg font-semibold font-mono tracking-tight text-green-500">01. Sobre Mim</h3>
      </div>
      <div className="md:col-span-2 space-y-6 text-zinc-400 leading-relaxed">
        <p>
          A minha trajetória no desenvolvimento baseia-se na resolução prática de problemas e na melhoria contínua de aplicações. Tenho experiência direta atuando em equipes técnicas, mapeando prioridades sistêmicas e auxiliando colegas na estruturação de queries e soluções de banco de dados.
        </p>
        <p>
          Recentemente, tenho focado na refatoração de sistemas de informação, modernizando estruturas de relatórios e implementando lógicas de interface assertivas — como priorizar a exibição de status visuais como "Completo" no lugar de valores numéricos, ou adaptar as regras de negócio do back-end para permitir múltiplas formas de cumprimento de processos complexos.
        </p>
        <p>
          Atualmente, operando a partir de Salvador, o meu foco técnico está concentrado nas seguintes ferramentas e tecnologias:
        </p>
        <ul className="grid grid-cols-2 gap-2 text-sm font-mono text-zinc-300">
          <li className="flex items-center gap-2"><span className="text-green-500">▹</span> JavaScript / TypeScript</li>
          <li className="flex items-center gap-2"><span className="text-green-500">▹</span> React</li>
          <li className="flex items-center gap-2"><span className="text-green-500">▹</span> PHP / Laravel</li>
          <li className="flex items-center gap-2"><span className="text-green-500">▹</span> Relacionais (SQL) & DB Clients</li>
          <li className="flex items-center gap-2"><span className="text-green-500">▹</span> Docker & Laragon</li>
          <li className="flex items-center gap-2"><span className="text-green-500">▹</span> Tailwind CSS</li>
        </ul>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectCard } from './components/ProjectCard';
import { Contact } from './components/Contact';

export default function App() {
  const [projects] = useState([
    {
      title: "Em Breve: API de Microserviços Laravel",
      description: "Arquitetura de back-end robusta focada na otimização de fluxos de dados, integridade de base de dados e relacionamentos complexos usando migrations, factories e seeders.",
      techs: ["PHP", "Laravel", "Docker", "PostgreSQL"],
    },
    {
      title: "Em Breve: Calculadora de Estruturas Web",
      description: "Aplicação Full Stack para planejamento de recursos, convertendo inputs brutos em cálculos precisos de materiais, lotes e desgaste lógico de equipamentos.",
      techs: ["React", "TypeScript", "Tailwind"],
    }
  ]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-purple-500/30">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-16 pb-24 space-y-32">
        <Hero />
        <About />

        {/* SEÇÃO PROJETOS */}
        <section id="projects" className="border-t border-zinc-800 pt-16 space-y-12">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold font-mono tracking-tight text-purple-400">02. Projetos em Destaque</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                index={index}
                title={project.title}
                description={project.description}
                techs={project.techs}
              />
            ))}
          </div>
        </section>

        <Contact />
      </main>

      <footer className="border-t border-zinc-900 bg-zinc-950 py-8 text-center text-xs font-mono text-zinc-600">
        <p>Criado por João Pedro M. Brazil &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
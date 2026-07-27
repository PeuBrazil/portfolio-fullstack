import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProjectCard } from './components/ProjectCard';
import { Contact } from './components/Contact';

import projectsData from './data/projects.json';

export default function App() {
  
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-green-500/30">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-16 pb-24 space-y-32">
        <Hero />
        <About />

        <section id="projects" className="border-t border-zinc-800 pt-16 space-y-12">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold font-mono tracking-tight text-green-500">02. Projetos em Destaque</h3>
            <div className="h-px bg-zinc-800 flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.map((project, index) => (
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
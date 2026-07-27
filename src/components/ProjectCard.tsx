interface ProjectCardProps {
  title: string;
  description: string;
  techs: string[];
  index: number;
}

export function ProjectCard({ title, description, techs, index }: ProjectCardProps) {
  return (
    <div className="group relative p-6 bg-zinc-900/40 border border-zinc-800/60 rounded-xl hover:border-zinc-700/80 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center justify-between text-zinc-500">
          <span className="font-mono text-xs">Projeto #{index + 1}</span>
        </div>
        <h4 className="text-xl font-bold text-zinc-100 group-hover:text-green-500 transition-colors">
          {title}
        </h4>
        <p className="text-sm text-zinc-400 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 pt-6 font-mono text-xs text-zinc-400">
        {techs.map((tech, tIndex) => (
          <span key={tIndex} className="px-2.5 py-1 bg-zinc-800/60 rounded-md border border-zinc-800">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
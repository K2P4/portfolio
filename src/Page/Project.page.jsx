import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section 			data-aos="fade-left" id="project" className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">My Projects</h2>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className=" dark:bg-zinc-900 border border-purple-950 dark:border-zinc-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
          >
            <div className="h-48 relative">
              <img
                src={project?.img}
                alt={project.title}
                fill
                className="object-center h-52 w-full"
              />
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl text-yellow-500 font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-400 dark:text-gray-400">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-[#2a2a2a] dark:bg-zinc-800 rounded-full text-yellow-500 dark:text-yellow-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.features && (
                <ul className="text-sm text-gray-400 mt-4 list-disc list-inside space-y-1">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
            
                </ul>
              )}

              <div className="mt-auto pt-4 flex justify-between items-center text-sm">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-yellow-600 hover:underline"
                  >
                    Live <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gray-400 hover:underline"
                  >
                    GitHub <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

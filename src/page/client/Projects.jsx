import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../../data/projects';
import Carousel from '../../components/Carousel';

export default function Projects() {
  const rawCategories = Array.from(new Set(projects.map((p) => p.category || 'Personal')));
  const displayLabel = (cat) => (cat === cat.toUpperCase() ? cat : cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase());
  const categories = ['All', ...rawCategories];
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section data-aos="fade-left" id="projects" className="py-20">
      <div className="mx-auto  px-4">
        <div className="flex flex-col items-center text-center gap-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-slate-100">My Projects</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                active === cat ? 'bg-primary text-white border-primary shadow-sm' : 'bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-300 border-gray-200 dark:border-slate-700 hover:border-primary/50 hover:bg-primary/5 dark:hover:bg-slate-800'
              }`}
            >
              {cat === 'All' ? 'All' : displayLabel(cat)}
            </button>
          ))}
        </div>

        {/* Projects Carousel */}
        <Carousel
          items={filtered}
          getKey={(p, i) => p?.title || i}
          autoSlide={true}
          autoSlideInterval={3000}
          renderItem={(project) => (
            <div className="group h-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 flex flex-col">
              <div className="h-60 relative overflow-hidden">
                <img src={project?.img} alt={project.title} className="object-contain h-60 w-full transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl text-black dark:text-slate-100 font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-700 dark:text-slate-300 my-1">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 bg-white dark:bg-slate-950 rounded-full text-black dark:text-slate-100 border border-gray-200 dark:border-slate-700 hover:border-primary/40">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.features && (
                  <ul className="text-sm text-gray-600 dark:text-slate-400 mt-4 list-disc list-inside space-y-1 marker:text-primary">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto pt-5 flex justify-between items-center text-sm">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary">
                      Live <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary">
                      GitHub <FaGithub className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </section>
  );
}

import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';
import { ProjectCard } from '.';
import { projects } from '../my-projects/projects';

export const Projects = () => {
  return (
    <section id="projects" className="mb-10 w-full tablet:px-10">
      <div className="mb-10 px-3 leading-[0]">
        <h2 className="mb-4 text-2xl font-bold">My Projects</h2>
        <p className="text-slate-400">Here are some of my works:</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-10 ">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
      <div className="hidden tablet:mt-[5rem] tablet:flex tablet:items-center tablet:justify-between">
        <EllipsisHorizontalIcon className="h-12 w-20" />
        <span className="w-[22rem] border-t-[3px]"></span>
      </div>
    </section>
  );
};

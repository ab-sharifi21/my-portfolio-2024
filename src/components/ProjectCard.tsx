import { BsGithub } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import { Project } from '../types/types';
import p2p from '../assets/p2p.webp';
import weatherApp from '../assets/weather-app.png';
import toDoApp from '../assets/todo-icon.svg';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, description, github, tools, url } = project;

  let imageUrl;

  if (project.name === 'P2P - Marketplace') {
    imageUrl = p2p
  } else if (project.name === 'Weather App') {
    imageUrl = weatherApp
  } else {
    imageUrl = toDoApp;
  }

  return (
    <article className="flex h-[32rem] w-[21rem] flex-col rounded-lg bg-bgColor p-4 shadow-boxShadow">
      <div className="relative">
        <img
          className="mb-8 h-[6.5rem] w-[15rem] object-contain grayscale-[50%]"
          src={imageUrl}
          alt="logo of P2P"
        />
        <div className="absolute right-0 top-0 mt-4 flex items-center justify-center gap-4 text-black ">
          <a
            className="rounded-full bg-primaryColor p-1 duration-300 hover:scale-110 hover:bg-blue-500"
            href={github}
            rel="noreferrer"
            target="_blank"
            title="github"
          >
            <BsGithub className="h-6 w-6" />
          </a>
          {project.url ? (
            <a
              className="rounded-full bg-primaryColor p-1 duration-300 hover:scale-110 hover:bg-blue-500"
              href={url}
              rel="noreferrer"
              target="_blank"
              title="Live demo"
            >
              <TbWorld className="h-6 w-6" />
            </a>
          ) : null}
        </div>
      </div>

      <div className="mb-2 flex flex-1 flex-col gap-2">
        <p className="mb-2 text-lg font-semibold">{name}</p>
        <p className="text-slate-300">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <p
            key={index}
            className="rounded-xl bg-primaryColor p-2 text-sm text-black"
          >
            {tool}
          </p>
        ))}
      </div>
    </article>
  );
};

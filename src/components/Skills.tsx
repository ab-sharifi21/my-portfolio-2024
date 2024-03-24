import {
  FaCss3,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNode,
  FaReact,
} from 'react-icons/fa';
import Working from '../assets/working.svg';
import { IoLogoJavascript } from 'react-icons/io';
import { SiNextdotjs, SiTypescript } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { Skill } from '../types/types';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

const skills: Skill[] = [
  {
    id: 1,
    name: 'HTML',
    icon: <FaHtml5 className="h-5 w-5" />,
  },
  {
    id: 2,
    name: 'CSS',
    icon: <FaCss3 className="h-5 w-5" />,
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: <IoLogoJavascript className="h-5 w-5" />,
  },
  {
    id: 4,
    name: 'TypeScript',
    icon: <SiTypescript className="h-5 w-5" />,
  },
  {
    id: 5,
    name: 'React.js',
    icon: <FaReact className="h-5 w-5" />,
  },
  {
    id: 6,
    name: 'Next.js',
    icon: <SiNextdotjs className="h-5 w-5" />,
  },
  {
    id: 7,
    name: 'Git',
    icon: <FaGitAlt className="h-5 w-5" />,
  },
  {
    id: 8,
    name: 'GitHub',
    icon: <FaGithub className="h-5 w-5" />,
  },
  {
    id: 9,
    name: 'Node',
    icon: <FaNode className="h-5 w-5" />,
  },
  {
    id: 10,
    name: 'Docker',
    icon: <FaDocker className="h-5 w-5" />,
  },
  {
    id: 11,
    name: 'SQL',
    icon: <GrMysql className="h-5 w-5" />,
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="mb-10 mt-16 w-full tablet:px-10">
      <h2 className="mb-4 text-center text-2xl font-bold tablet:text-left">
        SKills & Technologies
      </h2>

      <div className="mt-8 px-4 tablet:flex tablet:items-center tablet:justify-between tablet:gap-8 laptop:gap-[10rem]">
        <img
          className="hidden w-[15rem] tablet:block laptop:w-[20rem]"
          src={Working}
          alt="Programmer svg"
        />

        <div className="shadow-boxShadow flex flex-wrap items-center justify-around gap-3 rounded-lg bg-bgColor p-8 ">
          {skills.map((skill) => {
            return (
              <div
                className="flex items-center justify-center gap-1 rounded-full bg-primaryColor px-3 py-2"
                key={skill.id}
              >
                {skill.icon} {skill.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="hidden tablet:mt-12 tablet:flex tablet:items-center tablet:justify-between">
        <EllipsisHorizontalIcon className="h-12 w-20" />
        <span className="w-[22rem] border-t-[3px]"></span>
      </div>
    </section>
  );
};

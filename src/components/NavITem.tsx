import {
  AcademicCapIcon,
  CodeBracketIcon,
  HomeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { Link } from '../types/types';
import { useState } from 'react';

const links: Link[] = [
  {
    id: 1,
    name: 'Home',
    icon: <HomeIcon className="h-6 w-6" />,
    href: '#home',
  },
  {
    id: 2,
    name: 'Skills',
    icon: <AcademicCapIcon className="h-6 w-6" />,
    href: '#skills',
  },
  {
    id: 3,
    name: 'Projects',
    icon: <CodeBracketIcon className="h-6 w-6" />,
    href: '#projects',
  },
  {
    id: 4,
    name: 'Contact',
    icon: <PhoneIcon className="h-6 w-6" />,
    href: '#contact',
  },
];

export const NavItem = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const handleClick = (linkUrl: string) => {
    setActiveLink(linkUrl);
  };
  return (
    <>
      {links.map((link) => {
        return (
          <a
            className={`item-center flex justify-center gap-1 hover:text-primaryColor hover:underline ${activeLink === link.href ? 'text-blue-600 underline' : ''}`}
            key={link.id}
            href={link.href}
            onClick={() => handleClick(link.href)}
          >
            {link.icon}
            {link.name}
          </a>
        );
      })}
    </>
  );
};

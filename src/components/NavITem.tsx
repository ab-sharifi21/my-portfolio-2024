import {
  AcademicCapIcon,
  CodeBracketIcon,
  HomeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { Link } from '../types/types';

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
  return (
    <>
      {links.map((link) => {
        return (
          <a
            className="item-center hover:text-primaryColor flex justify-center gap-1 hover:underline"
            key={link.id}
            href={link.href}
          >
            {link.icon}
            {link.name}
          </a>
        );
      })}
    </>
  );
};

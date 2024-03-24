import { Bars3Icon } from '@heroicons/react/24/outline';
import { NavItem } from '.';

export const Header = () => {
  return (
    <header className="mb-[4rem] flex items-center justify-between px-4 laptop:mb-[5rem]">
      <a href="#home">
        <img
          className="h-[4rem] w-[4rem] laptop:h-[5rem] laptop:w-[5rem]"
          src="../../public/logo.png"
          alt="Abdullah's Logo"
        />
      </a>
      <button className="hover:text-primaryColor laptop:hidden">
        <Bars3Icon className="h-8 w-8" />
      </button>
      <nav className="hidden gap-6 laptop:flex">
        <NavItem />
      </nav>
    </header>
  );
};

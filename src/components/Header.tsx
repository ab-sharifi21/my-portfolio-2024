import { Bars3Icon } from '@heroicons/react/24/outline';
import { NavItem } from '.';
import { useEffect, useState } from 'react';
import Logo from '../../public/logo.png';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`left-0 right-0 top-0 mb-[3rem] flex items-center justify-between px-4  ${isScrolled ? 'sticky rounded-bl-lg rounded-br-lg bg-black/80' : ''}`}
    >
      <a href="#home">
        <img
          className="h-[4rem] w-[4rem] laptop:h-[5rem] laptop:w-[5rem]"
          src={Logo}
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

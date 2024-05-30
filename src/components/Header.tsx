import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavItem } from '.';
import { useEffect, useState } from 'react';
import Logo from '../../public/logo.png';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`left-0 right-0 top-0 mb-[3.5rem] px-4  ${
        isScrolled ? 'sticky rounded-bl-md rounded-br-md bg-white bg-opacity-20 backdrop-blur-3xl' : ''
      } ${isOpen ? 'bg-white bg-opacity-20 backdrop-blur-2xl' : ''}`}
    >
      <div
        className={`flex w-full items-center justify-between ${isOpen ? 'flex-col' : ''}`}
      >
        <div className="flex w-full flex-1 justify-between">
          <a href="#home">
            <img
              className="h-[3.5rem] w-[3.5rem] laptop:h-[4.5rem] laptop:w-[4.5rem]"
              src={Logo}
              alt="Abdullah's Logo"
            />
          </a>
          <button
            className="hover:text-primaryColor laptop:hidden"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
        <nav
          className={`flex gap-6 ${!isOpen ? 'hidden' : 'mb-4 flex-col gap-[4px]'} laptop:flex laptop:flex-row`}
        >
          <NavItem />
        </nav>
      </div>
    </header>
  );
};

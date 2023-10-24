import { useState, useEffect } from 'react';
import { AiFillHome, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi';
import { BiSolidContact } from 'react-icons/bi';
import './header.css';

const Header = () => {
    const [activeLink, setActiveLink] = useState('#home');
    const [isScrolled, setIsScrolled] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);

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
        <header className={`header ${isScrolled ? 'scrolled' : ''} ${menuOpen ? 'open-header' : ''}`}>
            <nav className='nav-container'>
                <a href="#home">
                    <img src="../../public/logo1.png" alt="Abdullah's Logo" />
                </a>
                <div className='hambuger' onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`menu ${menuOpen ? 'open' : ''}`} >
                    <a
                        href="#home"
                        onClick={() => setActiveLink('#home')}
                        className={activeLink === '#home' ? 'active' : ''}
                    ><AiFillHome /> Home</a>
                    <a
                        href="#skills"
                        onClick={() => setActiveLink('#skills')}
                        className={activeLink === '#skills' ? 'active' : ''}
                    ><GiSkills /> Skills</a>
                    <a
                        href="#projects"
                        onClick={() => setActiveLink('#projects')}
                        className={activeLink === '#projects' ? 'active' : ''}
                    ><AiOutlineFundProjectionScreen /> Projects</a>
                    <a
                        href="#contact"
                        onClick={() => setActiveLink('#contact')}
                        className={activeLink === '#contact' ? 'active' : ''}
                    ><BiSolidContact /> Contact</a>
                </div>
            </nav>
        </header>
    );
};


export default Header;
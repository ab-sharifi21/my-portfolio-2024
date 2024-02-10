import { IoLogoHtml5 } from 'react-icons/io';
import { DiCss3 } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { FaDocker, FaReact } from 'react-icons/fa';
import { BiLogoGit } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoNodejs } from 'react-icons/io';
import { SiMysql, SiNextdotjs, SiTypescript } from 'react-icons/si';
import Working from '../../assets/working.svg';
import './skills.css';

const Skills = () => {
    return (
        <section id='skills' className='skills-container'>
            <h2>Skills & Technologies  <span></span></h2>
            <img src={Working} alt="Working in an office image" />
            <div className='my-skills'>
                <ul>
                    <li><IoLogoHtml5 /> HMTL</li>
                    <li><DiCss3 /> CSS</li>
                    <li><IoLogoJavascript /> JavaScript</li>
                    <li><SiTypescript /> TypeScript</li>
                    <li><FaReact /> React.js </li>
                    <li><SiNextdotjs /> Next.js</li>
                    <li><BiLogoGit /> Git</li>
                    <li><BsGithub /> Github</li>
                    <li><IoLogoNodejs /> Node</li>
                    <li><SiMysql /> SQL</li>
                    <li><FaDocker /> Docker </li>
                </ul>
            </div>
        </section>
    )
}

export default Skills;

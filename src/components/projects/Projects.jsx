import ProjectCard from './ProjectCard';
import { projects } from '../../data.js';
import './projects.css';

const Projects = () => {
    return (
        <section id='projects' className='projects-container'>
            <div>
                <h2>My Projects <span></span></h2>
                <p>Here are some of my works:</p>
            </div>

            {
            projects.length
            ? <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <ProjectCard project={project} />
                    </li>
                ))}
            </ul>
            : null
            }
        </section>
    )
}

export default Projects;
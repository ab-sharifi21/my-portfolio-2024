import PropTypes from 'prop-types';
import { BsGithub } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';
import p2p from '../../assets/logo.webp';
import './projectCard.css';

const ProjectCard = ({ project }) => {
    const { name, description, github, tools } = project;
    return (
        <article>
            <div className='logo-container'>
                <img src={project.name === 'P2P - Marketplace' ? p2p : null} alt="logo of P2P" />
                <div className='social-media-container'>
                    <a href={github} rel='noreferrer' target='_blank' title='github'><BsGithub /></a>
                    {
                        project.url
                            ? <a href={project.url} rel='noreferrer' target='_blank' title='Live demo'><TbWorld /></a>
                            : null
                    }
                </div>
            </div>
            <div className="description-container">
                <p>{name}</p>
                <p>{description}</p>
            </div>
            <div className="tools-container">
                {
                    tools.map((tool, index) => (
                        <p key={index}>{tool}</p>
                    ))
                }
            </div>
        </article>
    )
}

ProjectCard.propTypes = {
    project: PropTypes.object.isRequired
};

export default ProjectCard;
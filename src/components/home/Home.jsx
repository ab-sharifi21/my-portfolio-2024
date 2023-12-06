import { BiDownload } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BiLogoGmail } from 'react-icons/bi';
import CV from '../../assets/abdullah_sharifi_cv_en.pdf';
import Me from '../../assets/me.jpg';
import './home.css';

const Home = () => {
    return (
        <>
            <section id='home' className='home-container'>
                <div className="right-container">
                    <div>
                        <h1>Hi !<br />
                        <span>I am Abdullah Sharifi</span></h1>
                        <h2>Junior Full-Stack Web Developer</h2>
                    </div>
                    <p>I am a highly motivated junior web developer with a range of skills spanning from front-end to back-end.</p>
                    <a href={CV} download title='download cv'>Resume <BiDownload /></a>
                    <div className='social-media-container'>
                        <a href="https://github.com/ab-sharifi21" target='_blanck'><BsGithub /></a>
                        <a href="https://www.linkedin.com/in/abdullahsharifi/" target='_blanck'><BiLogoLinkedin /></a>
                        <a href="mailto:ab.sharifi19@gmail.com" target='_blanck'><BiLogoGmail /></a>
                    </div>
                </div>
                <img src={Me} alt="my photo" />
            </section>
        </>
    )
}

export default Home;
import {
  ArrowDownTrayIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';
import me from '../assets/me.jpg';
import { BsGithub } from 'react-icons/bs';
import { BiLogoGmail, BiLogoLinkedin } from 'react-icons/bi';

export const Home = () => {
  return (
    <section id="home" className="mb-[1rem] tablet:px-10">
      <div className="mb-[2.5rem] flex w-full flex-col items-center justify-center gap-[4rem]  laptop:flex-row laptop:justify-between">
        <img
          src={me}
          alt="Abdullah's photo"
          className="h-[22rem] w-[18rem] rounded-tr-full rounded-tl-full object-cover tablet:h-[23rem] tablet:w-[23rem] tablet:rounded-full laptop:order-2"
        />
        <div className="w-full px-4 text-left laptop:w-auto">
          <p className="hi text-xl text-primaryColor">Hi there!</p>
          <h1 className="text-[2rem] font-semibold">I am Abdullah Sharifi</h1>
          <h2 className="animate-typing mb-6 overflow-hidden whitespace-nowrap text-[1.2rem] font-semibold text-primaryColor">
            Full-Stack Web Developer
          </h2>
          <p className="mb-4 max-w-2xl text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in maxime earum facere sequi alias consectetur, odit libero minus eos odio deserunt fuga facilis modi omnis consequuntur magni autem numquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, itaque!
          </p>

          <a
            href={'#'}
            download
            title="download cv"
            className="mb-2 mt-6 flex w-[7rem] justify-between rounded-full font-semibold bg-primaryColor px-3 py-2 text-sm text-black duration-500 hover:scale-110"
          >
            Resume
            <ArrowDownTrayIcon className="h-5 w-6" />
          </a>
          <div className="mt-4 flex gap-3 text-black">
            <a
              className="rounded-full bg-primaryColor p-1 duration-300 hover:scale-110 hover:bg-blue-500"
              href="https://github.com/ab-sharifi21"
              target="_blanck"
            >
              <BsGithub className="h-6 w-6" />
            </a>
            <a
              className="rounded-full bg-primaryColor p-1 duration-300 hover:scale-110 hover:bg-blue-500"
              href="https://www.linkedin.com/in/abdullahsharifi/"
              target="_blanck"
            >
              <BiLogoLinkedin className="h-6 w-6" />
            </a>
            <a
              className="rounded-full bg-primaryColor p-1 duration-300 hover:scale-110 hover:bg-blue-500"
              href="mailto:example@gmail.com"
              target="_blanck"
            >
              <BiLogoGmail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className=" hidden tablet:flex tablet:items-center tablet:justify-between">
        <EllipsisHorizontalIcon className="h-12 w-20" />
        <span className="w-[22rem] border-t-[3px]"></span>
      </div>
    </section>
  );
};

import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { BiLogoGmail } from 'react-icons/bi';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="mb-16 flex flex-col items-center justify-center"
    >
      <h2 className="text-2xl font-bold">Get In Touch</h2>
      <p className="hi mb-12 text-lg text-primaryColor">
        Let&apos;s Work Together
      </p>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <a
            className="text-primaryColor duration-300 hover:scale-110 hover:text-blue-600"
            href="tel:+34632698684"
          >
            <BsTelephoneOutboundFill className="h-10 w-10" />
          </a>
          <p className="font-semibold">Phone & Mobile</p>
          <a
            className="text-sm text-slate-400 duration-300 hover:scale-110 hover:text-blue-600"
            href="tel:+34632698684"
          >
            +34 632 698684
          </a>
        </div>
        <div className="flex flex-col items-center gap-4">
          <a className="duration text-primaryColor hover:scale-110 hover:text-blue-600">
            <HiLocationMarker className="h-10 w-10" />
          </a>
          <p className="font-semibold">Address</p>
          <p className="text-sm text-slate-400">A Coruña, Galicia, Spain</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <a
            className="text-primaryColor duration-300 hover:scale-110  hover:text-blue-600"
            href="mailto:ab.sharifi19@gmail.com"
          >
            <BiLogoGmail className="h-10 w-10" />
          </a>
          <p className="font-semibold">Email</p>
          <a
            className="text-sm text-slate-400 duration-300 hover:scale-110 hover:text-blue-600"
            href="mailto:ab.sharifi19@gmail.com"
          >
            ab.sharifi19@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

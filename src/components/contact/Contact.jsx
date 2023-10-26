import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { BiLogoGmail } from 'react-icons/bi';
import './contact.css';

const Contact = () => {
    return (
        <section id='contact' className='contact-container'>
            <h2>Contact <span></span></h2>
            <div className='contact'>
                <div className='in-touch-container'>
                    <h3>Get In Touch</h3>
                    <p>Let&apos;s Work Together</p>
                </div>
                <div className='phone-address-email'>
                    <div className='contact-item'>
                        <a href="tel:+34632698684">
                            <BsTelephoneOutboundFill />
                        </a>
                        <p>Phone & Mobile</p>
                        <p>+34 632 698684</p>
                    </div>
                    <div className='contact-item'>
                        <a>
                            <HiLocationMarker />
                        </a>
                        <p>Address</p>
                        <p>Santiago de Compostela, Galicia, Spain</p>
                    </div>
                    <div className='contact-item'>
                        <a href="mailto:ab.sharifi19@gmail.com">
                            <BiLogoGmail />
                        </a>
                        <p>Email</p>
                        <p>ab.sharifi19@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
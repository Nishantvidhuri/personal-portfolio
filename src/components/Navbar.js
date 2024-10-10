import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useLinkReveal } from "../hooks/gsap";

const Navbar = ({ footerNav }) => {
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
  const link3Ref = useRef(null);
  const link4Ref = useRef(null);
  const link5Ref = useRef(null);
  const link6Ref = useRef(null);
  const link7Ref = useRef(null);
  const link8Ref = useRef(null);

  const links = [
    link1Ref,
    link2Ref,
    link3Ref,
    link4Ref,
    link5Ref,
    link6Ref,
    link7Ref,
    link8Ref,
  ];

  useLinkReveal(links, 2);

  return (
    <nav className={`navbar container mx-auto flex justify-between  items-start mt-5`} style={{ margin: '20px' }}>
      <div className='logo flex flex-row items-center gap-5 mb-4'>
        <img
          className="w-32 h-32"
          src="https://res.cloudinary.com/dlzahwmc8/image/upload/v1728543375/WhatsApp_Image_2024-07-20_at_8_01_37_PM-removebg-preview_1_-photoaidcom-cropped_dylgz5.png"
          alt="Nishant Vidhuri"
        />
        <HashLink
          smooth
          to='#home'
          className='link-item text-3xl'
          ref={link1Ref}
        >
          Nishant Vidhuri
        </HashLink>
      </div>
      <ul className='menus flex flex-col gap-3 mr-20 sm:w-[170px] w-[100px]'>
        <li className='self-start'>
          <HashLink smooth to='/' className='link-item' ref={link2Ref}>
            Home
          </HashLink>
        </li>
        <li className='self-end'>
          <HashLink smooth to='#projects' className='link-item' ref={link3Ref}>
            My Projects
          </HashLink>
        </li>
        <li className='self-start'>
          <HashLink smooth to='#skills' className='link-item' ref={link4Ref}>
            My Skills
          </HashLink>
        </li>
        <li className='self-end'>
          <HashLink smooth to='#about' className='link-item' ref={link5Ref}>
            About Me
          </HashLink>
        </li>
        <li className='self-start'>
          <HashLink smooth to='#contact' className='link-item' ref={link6Ref}>
            Contact Me
          </HashLink>
        </li>
        <li className='self-end'>
          <a
            href='https://drive.google.com/file/d/1RXTXcFuE2CqfOoYcuhMTK2QEs0XGAiQz/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
            className='link-item'
            ref={link7Ref}
          >
            My Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

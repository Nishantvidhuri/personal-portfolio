import { useRef } from "react";
import { useSocialReveal } from "../hooks/gsap";

const data = [
  {
    id: 1,
    title: "Instagram",
    url: "https://instagram.com/thenishantv",
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/nishant-vidhuri-092a63124/",
  },
  {
    id: 3,
    title: "GitHub",
    url: "https://github.com/Nishantvidhuri",
  },
  {
    id: 4,
    title: "LeetCode",
    url: "https://leetcode.com/u/nishantvidhuri0987/",
  },
];

const Socials = () => {
  const socialRef = useRef(null);

  useSocialReveal(socialRef, 2.5);

  return (
    <div
      className='socials flex gap-5 uppercase text-lg fixed left-10 top-[75%] origin-left -rotate-90 text-white/30 bg-black/30 p-5 backdrop-blur-xl z-[200]'
      ref={socialRef}
    >
      {data.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target='_blank'
          rel='noreferrer'
          className='hover:text-cyan-400 duration-500'
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;

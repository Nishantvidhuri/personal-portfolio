import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = ({ project }) => {
  const projectLeftRef = useRef(null);

  useEffect(() => {
    const element = projectLeftRef.current;

    // Initialize GSAP animation for scroll trigger
    if (element) {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: element,
            start: "top 80%", // Trigger when the element reaches 80% from the top of the viewport
            end: "bottom top",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div className='project overflow-hidden grid grid-cols-1 xl:grid-cols-5  gap-20 relative'>
      {/* Background Image with Glassy Effect */}
      <div
        className='absolute  inset-0 bg-cover bg-center z-0'
        style={{
    backgroundImage: `url(${project.image1})`,
    backgroundSize: '100%', // Ensures the image covers the entire area without distortion
    backgroundPosition: 'top',
    height: '100vh', // Set full height for the viewport
    filter: 'blur(1px)', // Apply blur effect for glassy background
    opacity: '0.6', // Adjust opacity for a glassy effect
    transition: 'opacity 0.5s ease-in-out',
  }}
      ></div>

      {/* Darker Overlay for Enhanced Glassy Effect */}
      <div className='absolute inset-0 bg-black opacity-40 z-10'></div> {/* Adjust opacity to make it darker */}

      <div
        className='project-left xl:col-span-3 flex flex-col  gap-6 relative p-8 z-20'
        ref={projectLeftRef}
      >
        <span className='text-9xl text-yellow-300 shadow-lg'> {/* Changed text color to yellow for brightness */}
          {String(project.id).padStart(2, 0)}
        </span>
        <h3 className='text-5xl leading-relaxed text-white uppercase shadow-lg'> {/* Added shadow to text */}
          {project.title}
        </h3>
        <p className='text-white'>{project.description}</p>
        <span className='text-yellow-300 flex flex-wrap gap-3'>
          {project.tools.map((tool, i) => (
            <span key={i} className='border border-yellow-300 rounded-full px-3 py-1'> {/* Changed border color to yellow */}
              {tool}
            </span>
          ))}
        </span>
        <div className='project-btn flex flex-wrap gap-5'>
          <a
            className='uppercase py-4 px-8 border border-yellow-300 rounded-full hover:bg-yellow-300/20 hover:border-yellow-300/20 duration-300'
            href={project.liveLink}
            target='_blank'
            rel='noreferrer'
          >
            Live Site
          </a>

          {project.fullStackLink && (
            <a
              className='uppercase py-4 px-8 border border-yellow-300 rounded-full hover:bg-yellow-300/20 hover:border-yellow-300/20 duration-300'
              href={project.fullStackLink}
              target='_blank'
              rel='noreferrer'
            >
              Full Stack Code
            </a>
          )}

          {project.frontEndLink && (
            <a
              className='uppercase py-4 px-8 border border-yellow-300 rounded-full hover:bg-yellow-300/20 hover:border-yellow-300/20 duration-300'
              href={project.frontEndLink}
              target='_blank'
              rel='noreferrer'
            >
              Front-End Code
            </a>
          )}

          {project.backEndLink && (
            <a
              className='uppercase py-4 px-8 border border-yellow-300 rounded-full hover:bg-yellow-300/20 hover:border-yellow-300/20 duration-300'
              href={project.backEndLink}
              target='_blank'
              rel='noreferrer'
            >
              Back-End Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;

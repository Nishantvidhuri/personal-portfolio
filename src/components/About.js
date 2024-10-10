import { useEffect, useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import SectionTitle from "./SectionTitle";

const Education = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const workExpRef = useRef(null);
  const frontendCertRef = useRef(null);

  // Add hover effect
  useHoverEffect(leftRef);

  // Function to handle visibility of sections for animations
  const handleScrollAnimations = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate'); // Add your animation class
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScrollAnimations, {
      threshold: 0.1, // Trigger when 10% of the section is visible
    });

    // Observe each ref
    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    if (workExpRef.current) observer.observe(workExpRef.current);
    if (frontendCertRef.current) observer.observe(frontendCertRef.current);

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  const educationData = [
    {
      title: "B.Tech in Computer Science",
      institution: "A.K.T.U",
      year: "Oct 2023",
      cgpa: "7.4 CGPA",
      align: "left",
    },
    {
      title: "12th Grade",
      institution: "St Mary’s Christian Public School (C.B.S.E)",
      year: "Aug 2019",
      align: "right",
    },
    {
      title: "10th Grade",
      institution: "Sidhharth International Public School (C.B.S.E)",
      year: "Aug 2017",
      align: "left",
    },
  ];

  const certificatesData = [
    {
      title: "Frontend Domination",
      link: "https://drive.google.com/file/d/1GVp4PuGbAxN91Ng3Aos-1W1BMNx1B4qN/view?usp=sharing",
      institution: "Sheriyans Coding School",
      align: "right",
    },
    {
      title: "Data Structures and Algorithms",
      link: "https://drive.google.com/file/d/1zlfUyZxPyZeuv85I_Rju4I1UCguMF1Rd/view?usp=sharing",
      institution: "Coding Ninjas",
      align: "left",
    },
  ];

  const experienceData = [
    {
      title: "Inno Stack Hexa Solutions",
      location: "Hyderabad",
      period: "Jun 2023 - July 2023",
      description:
        "During my first internship in web development, I gained invaluable insights into the importance of continuous learning and growth in the tech industry. I realized that success requires not only hard work but also consistent effort and determination. Facing challenges head-on and persevering through difficult situations ultimately leads to personal and professional growth, fostering the development of a stronger, more capable version of oneself.",
      align: "left",
    },
  ];

  return (
    <div className='education container mx-auto mt-40' id='education'>
      <SectionTitle title={"Education & Experience"} />
      <div className='education-wrapper mt-10 grid grid-cols-1 gap-20 overflow-hidden'>
        <div className='education-section'>
          <h3 className='text-3xl text-cyan-400'>Education</h3>
          {educationData.map((item, index) => (
            <div
              key={index}
              className={`education-item ${item.align === "left" ? "text-left" : "text-right"}`}
              ref={item.align === "left" ? leftRef : rightRef}
            >
              <h4 className='text-2xl'>{item.title}</h4>
              <p className='text-white/75'>{item.institution}</p>
              <span className='text-white/50'>{item.year}</span>
              {item.cgpa && <p className='text-white/50'>{item.cgpa}</p>}
            </div>
          ))}
        </div>

        <div className='certificates-section'>
          <h3 className='text-3xl text-cyan-400'>Certificates</h3>
          {certificatesData.map((item, index) => (
            <div
              key={index}
              className={`certificate-item ${item.align === "left" ? "text-left" : "text-right"}`}
              ref={item.title === "Frontend Domination" ? frontendCertRef : (item.align === "left" ? leftRef : rightRef)}
            >
              <a href={item.link} target='_blank' rel='noreferrer' className='text-cyan-400 underline'>
                {item.title}
              </a>
              <p className='text-white/75'>{item.institution}</p>
            </div>
          ))}
        </div>

        <div className='experience-section'>
          <h3 className='text-3xl text-cyan-400'>Work Experience</h3>
          {experienceData.map((item, index) => (
            <div
              key={index}
              className={`experience-item ${item.align === "left" ? "text-left" : "text-right"}`}
              ref={workExpRef}
            >
              <h4 className='text-2xl'>{item.title}</h4>
              <p className='text-white/75'>{item.location}</p>
              <span className='text-white/50'>{item.period}</span>
              <p className='mt-2'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;

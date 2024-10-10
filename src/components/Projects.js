import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title: "CineChronicle - Movie Rating Platform",
    image1:
      "https://res.cloudinary.com/dlzahwmc8/image/upload/v1728541038/vcinechronicle_jdrqqi.png",
    image2:
      "https://res.cloudinary.com/dlzahwmc8/image/upload/v1728541039/earch_cinechronicle_n35ype.png",
    description:
      "CineChronicle is a movie rating platform that allows users to browse and rate movies, TV shows, and trending content. With a clean and user-friendly interface, CineChronicle makes it easy to explore different categories and discover new releases. This project uses React and Tailwind CSS to ensure responsiveness across devices.",
    tools: ["React.js", "Tailwind CSS", "API Integration"],
    liveLink: "https://cinemachronicle.netlify.app/",
    fullStackLink: "",
    frontEndLink: "https://github.com/Nishantvidhuri/CineChronicle",
    backEndLink: "",
  },
  {
    id: 2,
    title: "ExoApe Cloning Site",
    image1:
      "https://res.cloudinary.com/dlzahwmc8/image/upload/v1728541249/exo_ape_epo2bo.png",
    image2:
      "https://res.cloudinary.com/dlzahwmc8/image/upload/v1728541248/exo_ape_reel_x4fqby.png",
    description:
      "ExoApe Cloning Site is a fully responsive web application that replicates the design and functionality of the original ExoApe website. Built using HTML, CSS, and JavaScript, this project focuses on recreating the aesthetic and interactivity of the ExoApe brand, ensuring that it works seamlessly across different devices.",
    tools: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://exoape-landing-clone.vercel.app/",
    fullStackLink: "",
    frontEndLink: "https://github.com/Nishantvidhuri/ExoApe-Cloning-Site",
    backEndLink: "",
  },
  {
    id: 3,
    title: "DevDetective - GitHub Profile Search Tool",
    image1:
      "https://res.cloudinary.com/dlzahwmc8/image/upload/v1728539661/dev_detective_izpcw3.png",
    image2:
      "https://res.cloudinary.com/dlzahwmc8/image/upload/v1728539661/dev_search_yhyfjo.png",
    description:
      "DevDetective is a web application designed to search and display GitHub profiles in a clean and responsive format. This project leverages HTML, CSS, and JavaScript to interact with the GitHub API, providing users with a seamless experience to fetch and view detailed information about any GitHub user.",
    tools: ["HTML", "CSS", "JavaScript", "GitHub API"],
    liveLink: "https://nishantvidhuri.github.io/Dev-Detective/",
    fullStackLink: "",
    frontEndLink: "https://github.com/Nishantvidhuri/Dev-Detective?tab=readme-ov-file",
    backEndLink: "",
  },
  {
    id: 4,
    title: "Password Generator",
    image1:
      "https://res.cloudinary.com/dlzahwmc8/image/upload/v1728538830/passwordoverview_bt7yzp.png",
    image2:
      "https://res.cloudinary.com/dlzahwmc8/image/upload/v1728538991/passworduse_zkqafy.png",
    description:
      "Password Generator is a simple and efficient web application that allows users to generate secure and random passwords based on selected criteria. This project is built using HTML, CSS, and JavaScript to ensure an easy-to-use interface and functionality. Features: Customizable Password Length, Character Options, Copy to Clipboard, and Responsive Design. Works seamlessly on both desktop and mobile devices.",
    tools: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://nishantvidhuri.github.io/Password-Generator/",
    fullStackLink: "",
    frontEndLink: "https://github.com/Nishantvidhuri/Password-Generator",
    backEndLink: "",
  },
];

const Projects = () => {
  return (
    <div className='projects container mx-auto mt-40' id='projects'>
      <SectionTitle title={"My Projects"} />
      <div className='projects-wrapper mt-40 flex flex-col gap-10'>
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

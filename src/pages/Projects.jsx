import { Link } from "react-router-dom";
import { CTA } from "../components";
import { adrien, causeconnect, Learnex } from "../assets/icons";
import arrowIcon from "../assets/icons/arrow.svg"; // Import arrow icon

// Define your projects with updated details
const projects = [
  {
    name: "LearnEx",
    description: "An e-learning platform where users can access various courses and resources to enhance their skills.",
    iconUrl: Learnex,
    link: "https://www.figma.com/proto/1Fl9cSccFdDUUAHAxrc5gl/zidio-project?page-id=7%3A170&node-id=61-177&node-type=frame&viewport=-16988%2C8424%2C0.31&t=KJUERNSZit227X4W-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=394%3A318"
  },
  {
    name: "Adrien Pharmaceuticals",
    description: "An e-commerce platform for Adrien Pharmaceuticals, offering a range of medical products for purchase.",
    iconUrl: adrien,
    link: "https://www.figma.com/proto/iIFTH6adU0HHVchybAD89N/Ml-poster?page-id=0%3A1&node-id=849-65&node-type=frame&viewport=-4877%2C8460%2C0.16&t=q2BBJ8Za2W3tSxtv-1&scaling=contain&content-scaling=fixed&starting-point-node-id=860%3A21"
  },
  {
    name: "CauseConnect NGO",
    description: "A user interface design for CauseConnect NGO's website to facilitate easy donation, updates, and event management.",
    iconUrl: causeconnect,
    link: "https://www.figma.com/proto/iIFTH6adU0HHVchybAD89N/Ml-poster?page-id=0%3A1&node-id=1295-1357&node-type=frame&viewport=-4877%2C8460%2C0.16&t=q2BBJ8Za2W3tSxtv-1&scaling=contain&content-scaling=fixed&starting-point-node-id=860%3A21"
  }
];

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img
                  src={arrowIcon}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;

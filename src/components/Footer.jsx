import { Link } from "react-router-dom";
import git from '../assets/icons/github.svg'
import link from '../assets/icons/linkedin.svg'
import mail from '../assets/icons/twitter.svg'
import { contact } from "../assets/icons";
// Define your social links
const socialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/varaduiux",
    iconUrl: git, // Path to GitHub icon
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/varad-deshpande-682158230",
    iconUrl: link, // Path to LinkedIn icon
  },
  {
    name: "Email",
    link: "mailto:deshpandevaraduiux@gmail.com",
    iconUrl:contact, // Path to Email icon
  },
];

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />
      <div className='footer-container'>
        <p>
          © 2024 <strong>Varad Deshpande</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain hover:opacity-80 transition-opacity duration-200'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

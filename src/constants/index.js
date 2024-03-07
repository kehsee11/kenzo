import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { drone, fitnessApp, linkedin, blog, randomQuote, kenzoMovie, restaurant, weather, bootstrap, css, dart, git, github, html, javascript, reactImage, sass, tailwind } from "../assets";


const links = [
     {
          id: 1,
          link: "home",
     },
     {
          id: 2,
          link: "about",
     },
     {
          id: 3,
          link: "portfolio",
     },
     {
          id: 4,
          link: "experience",
     },
     {
          id: 5,
          link: "contact",
     },
];
const techs = [
     {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
     }, {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
     }, {
          id: 3,
          src: bootstrap,
          title: "Bootstrap",
          style: "shadow-purple-500",
     }, {
          id: 4,
          src: sass,
          title: "Sass",
          style: "shadow-pink-500",
     }, {
          id: 5,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
     }, {
          id: 6,
          src: git,
          title: "Git",
          style: "shadow-red-500",
     }, {
          id: 7,
          src: reactImage,
          title: "REACT",
          style: "shadow-blue-600",
     }, {
          id: 8,
          src: github,
          title: "GITHUB",
          style: "shadow-gray-400",
     }, {
          id: 9,
          src: tailwind,
          title: "TAILWIND",
          style: "shadow-sky-400",
     }, {
          id: 10,
          src: dart,
          title: "Dart",
          style: "shadow-sky-400",
     }
]
const portfolio = [
     {
          id: 1,
          src: blog,
          link: "https://github.com/kehsee11/ectasy-blog",
          view: ""
     }, {
          id: 2,
          src: linkedin,
          link: "https://github.com/kehsee11/linkedin-clone",
          view: "https://devemma-restaurant.netlify.app"
     }, { 
     id: 3,
     src: kenzoMovie,
     link: "https://github.com/kehsee11/kenzo-movie",
     view: "https://kenzo-movie.vercel.app/"
    
}, 
         
     , {
          id: 4,
          src: randomQuote,
          link: "https://github.com/Hemazyn/random-quotes",
          view: "https://devemma-random-quotes.netlify.app"
     }, {
          id: 5,
          src: drone,
          link: "https://github.com/Hemazyn/3d-drone",
          view: "https://devemma-drone.netlify.app"
     }, {
          id: 6,
          src: weather,
          link: "https://github.com/Hemazyn/weather-app",
          view: "https://devemma-weather.netlify.app"
       },
]
const linksIcons = [
     {
          id: 1,
          child: (
               <>
                    LinkedIn <FaLinkedin size={30} />
               </>
          ),
          href: "https://www.linkedin.com/in/kenny-abdul-14475221a",
          style: 'rounded-tr-md'
     }, {
          id: 2,
          child: (
               <>
                    Github <FaGithub size={30} />
               </>
          ),
          href: "https://github.com/kehsee11",
     }, {
          id: 3,
          child: (
               <>
                    Mail <HiOutlineMail size={30} />
               </>
          ),
          href: "mailto:kehsee@gmail.com",
     }, {
          id: 4,
          child: (
               <>
                    Resume <BsFillPersonLinesFill size={30} />
               </>
          ),
          href: "https://www.canva.com/design/DAFtH_674QE/49Mb1irokq_X-pZ8x1m7NA/view?website#2",
          style: 'rounded-br-md',
          download: true,
     },
]

export { links, techs, portfolio, linksIcons, FaGithub, FaLinkedin, HiOutlineMail, BsFillPersonLinesFill };

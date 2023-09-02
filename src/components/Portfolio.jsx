import React from "react"
import fitnessApp from "../assets/portfolio/fitness-app.png";
import restaurant from "../assets/portfolio/restaurant.png"
import movieLand from "../assets/portfolio/movieLand.png"
import randomQuote from "../assets/portfolio/randomQuote.png"
import twitterClone from "../assets/portfolio/twitter-clone.png"
import weather from "../assets/portfolio/weather.png"
import { FaGithub } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { BrowserRouter, Link } from "react-router-dom";

const Portfolio = () => {
     const portfolio = [
          {
               id: 1,
               src: fitnessApp,
               link: "https://github.com/Hemazyn/fitness-app",
               view: "https://devemma-exercise.netlify.app"
          }, {
               id: 2,
               src: restaurant,
               link: "https://github.com/Hemazyn/restaurant",
               view: "https://devemma-restaurant.netlify.app"
          }, {
               id: 3,
               src: movieLand,
               link: "https://github.com/Hemazyn/movieland",
               view: "https://devemma-movieland.netlify.app"
          }, {
               id: 4,
               src: randomQuote,
               link: "https://github.com/Hemazyn/random-quotes",
               view: "https://devemma-random-quotes.netlify.app"
          }, {
               id: 5,
               src: twitterClone,
               link: "https://github.com/Hemazyn/javaScript-twitter-profile-ui-clone",
               view: "https://devemma-twitter-ui.netlify.app"
          }, {
               id: 6,
               src: weather,
               link: "https://github.com/Hemazyn/weather-app",
               view: "https://devemma-weather.netlify.app"
          },
     ]
     return (
          <BrowserRouter>
               <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen z-10">
                    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                         <div className="p-8">
                              <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                              <p className="py-6">Check out some of my work right here</p>
                         </div>
                         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                              {portfolio.map(({ id, src, link, view }) => (
                                   <div key={id} className="shadow-md shadow-gray-600 rounded-lg relative z-5">
                                        <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                                        <div className="flex items-center absolute top-0 rounded-md h-6 mt-1 ml-2 px-2 py-5 gap-1 border bg-zinc-500">
                                             <button>
                                                  <Link to={link} target="_blank"><FaGithub size={20} /></Link>
                                             </button>
                                             <button>
                                                  <Link to={view} target="_blank"><AiFillEye size={25} /></Link>
                                             </button>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div >
          </BrowserRouter >
     );
}

export default Portfolio;
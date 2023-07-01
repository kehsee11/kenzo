import React from "react"
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg"
import navbar from "../assets/portfolio/navbar.jpg"
import reactParallax from "../assets/portfolio/reactParallax.jpg"
import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import reactWeather from "../assets/portfolio/reactWeather.jpg"
import { FaGithub } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { BrowserRouter, Link } from "react-router-dom";

const Portfolio = () => {
     const portfolio = [
          {
               id: 1,
               src: arrayDestruct,
          }, {
               id: 2,
               src: installNode
          }, {
               id: 3,
               src: navbar
          }, {
               id: 4,
               src: reactParallax
          }, {
               id: 5,
               src: reactSmooth
          }, {
               id: 6,
               src: reactWeather
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
                              {portfolio.map(({ id, src }) => (
                                   <div key={id} className="shadow-md shadow-gray-600 rounded-lg relative z-5">
                                        <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                                        <div className="flex items-center absolute top-0 rounded-md h-6 mt-1 ml-2 px-2 py-5 gap-1 border bg-zinc-500">
                                             <button>
                                                  <Link to="https://github.com/hemazyn" target="_blank"><FaGithub size={20} /></Link>
                                             </button>
                                             <button>
                                                  <Link to="https://github.com/hemazyn" target="_blank"><AiFillEye size={25} /></Link>
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
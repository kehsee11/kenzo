import React from "react";
import HeroImg from "../assets/hemazyn.png";

const Home = () => {
     return (
          <>
               <div name="home" className="md:h-[90vh] w-full bg-gradient-to-b from-black via-black to-gray-800 pt-[10vh] lg:pt-[20vh]">
                    <div className="lg:w-[80%] mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row">
                         <div className="flex flex-col justify-center h-full md:w-3/5">
                              <h2 className="text-[20px] md:text-4xl lg:text-6xl text-white mt-2 lg:mt-0">Passionate Front-End Developer <br /> (ReactJs | Flutter)</h2>
                              <p className="text-gray-500 text-[15px] lg:text-2xl py-4 max-w-md">Passionate, Front-End Developer. With vast experience in building (frontend web and app) applications.
                                   Having serious passion for creating intuitive, dynamic user experiences, UI effects,
                                   animations and interested in the entire Frontend spectrum.
                                   Help clients achieve their desire outcome, Join me down below and let’s get cracking!
                              </p>
                         </div>
                         <div className="md:w-2/5">
                              <img src={HeroImg} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
                         </div>
                    </div>
               </div>
          </>
     );
}

export default Home;
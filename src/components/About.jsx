import React from "react";

const About = () => {
     return (
          <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-[10vh] lg:pt-0">
               <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-4">
                         <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                    </div>
                    <p className="text-base lg:text-xl mt-5 lg:mt-20">
                         Having serious passion for creating intuitive, dynamic user experiences, UI effects, 3D designs, animations and.
                         Interested in the entire frontend (React) and working on ambitious projects with positive people.
                         I create successful responsive websites that are fast, easy to use, and built with best practices.
                    </p>
                    <br />
                    <p className="text-base lg:text-xl">
                         Working on front-end development spectrum, HTML, CSS, JS, building variaties of web apps,
                         custom plugins, features, animations, and coding interactive layouts.
                         I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                         I value simple content structure, clean design patterns, and thoughtful interactions,
                         Getting clients overwhelming design is my top priority.
                    </p>
               </div>
          </div >
     );
}

export default About;
import React from "react";

const About = () => {
     return (
          <div name="about" className="w-full bg-gradient-to-b from-gray-800 to-black text-white pt-5 lg:pt-0">
               <div className="p-4 mx-auto flex flex-col justify-center w-[90%] h-full pt-0 lg:pt-20">
                    <div className="pb-4">
                         <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                    </div>
                    <div className="mt-8">
                         <p className="text-xs lg:text-2xl text-gray-500"><span className="font-bold">  </span>
                             <br />
                         </p>
                         <p className="text-xs lg:text-2xl text-gray-500 mt-4">Hi there! I am Kenny! A Full stack developer with expertise in Javascript. I've been coding for over 5 years now. As a Full Stack developer I've worked on different (frontend and backend web and app) applications.
                                   A professional developer with deep knowledge for creating intuitive, dynamic user experiences, UI effects,
                                   animations and interested in the entire Frontend spectrum.
                                  I am a goal driven,enthusiastic and solution driven developer with vast experience.
                         I am very fluid and very open to learn new stuff and adapt to new situations.
                         Whenever I encounter a new problem, I usually conduct  extensive research on it in order to comprehen it and discover cutting-edge and innovative
                         approaches for dealing with similar prolems in the future. Get in touch with me.</p>
           
                    </div>
               </div>
          </div >
     );
}

export default About;
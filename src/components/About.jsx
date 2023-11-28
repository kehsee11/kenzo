import React from "react";

const About = () => {
     return (
          <div name="about" className="w-full bg-gradient-to-b from-gray-800 to-black text-white pt-[10vh] lg:pt-0">
               <div className="p-4 mx-auto flex flex-col justify-center w-[90%] h-full pt-20">
                    <div className="pb-4">
                         <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                    </div>
                    <div className="mt-8">
                         <p className="text-2xl text-gray-400"><span className="font-bold">A Front-End Maestro Orchestrating User Experiences with React and Flutter </span>
                              As a seasoned Frontend Developer with a focus on React, I bring a wealth of experience in crafting robust, user-centric web applications.
                              My proficiency lies in architecting intuitive user interfaces and implementing complex functionalities, driven by a strong foundation in React development. <br />
                         </p>
                         <p className="text-2xl text-gray-400 mt-4">While I have established myself as a proficient React developer, I am currently expanding my horizons into Flutter development, aiming to translate my frontend expertise into the realm of mobile applications.
                              I'm in the early stages of my journey with Flutter, eagerly embracing its potential to create dynamic and seamless experiences across various platforms.</p>
                         <p className="text-2xl text-gray-400 mt-4">With a passion for learning and an eye for detail, I am committed to bridging the gap between React's excellence in web development and emerging as a competent Flutter developer.
                              I aspire to contribute innovative solutions that harmoniously integrate React's robustness with Flutter's versatility, ultimately delivering engaging and impactful applications to users worldwide.</p>
                    </div>
               </div>
          </div >
     );
}

export default About;
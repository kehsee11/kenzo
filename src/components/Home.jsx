import React from "react";
import HeroImg from "../assets/header-background.jpg"

const Home = () => {
     return (
          <>
               <div name="home" className="md:h-[90vh] w-full bg-black pt-[10vh] lg:pt-[20vh]">
                    <div className="lg:w-[80%] mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row">
                         <div className="flex flex-col justify-center h-full md:w-3/5">
                              <h2 className="text-[20px] md:text-4xl lg:text-6xl text-white mt-2 lg:mt-0">Web Developer <br /> (MERN | ReactJs |React Native| NextJs | MongoDB | FireBase|)</h2>
                              <p className="text-gray-500 text-[15px] lg:text-2xl py-4 max-w-md">
                              </p>
                         </div>
                         <div className=" py-4 md:w-1/5"  >
                              <img src={HeroImg} alt="my profile" className="  rounded-full mx-auto w-2/3 md:w-full"   />
                         </div>
                    </div>
               </div>
          </>
     );}

export default Home;
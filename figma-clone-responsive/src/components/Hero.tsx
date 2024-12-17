import React from 'react';
import { IoArrowForward } from 'react-icons/io5';

const Hero = () => {
  return (
    <div className="max-w-[1920px] mx-auto bg-[#043873] flex items-center h-screen bg-[url('/Hero-section.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-4 gap-2  w-full max-w-[1440px] mx-auto">
        
      
        <div className="flex flex-col flex-1 justify-center text-center lg:text-left">
          <h1 className="text-[36px] sm:text-[48px] lg:text-[55px] text-white font-extrabold leading-tight">
            Get More Done with Whitepace
          </h1>
          <p className="text-[16px] sm:text-[18px] text-white mt-4 sm:mt-6">
            Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
          </p>
          <button className="flex items-center justify-center mt-16 sm:mt-12 bg-[#4F9CF9] rounded-md h-[50px] w-[200px] text-white mx-auto lg:mx-0">
            Try Whitepace free
            <IoArrowForward className="ml-2" />
          </button>
        </div>

        
        <div className="flex-1 flex items-center justify-center mt-20 lg:mt-0">
          <div className="w-[300px] sm:w-[400px] lg:w-[685px] h-[250px] sm:h-[350px] lg:h-[456.39px] bg-[#C4DEFD] shadow-lg">
           
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;

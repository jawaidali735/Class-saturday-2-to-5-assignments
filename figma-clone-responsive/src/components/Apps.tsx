import { IoArrowForward } from 'react-icons/io5';
import Image from 'next/image';
import React from 'react';

const Apps = () => {
  return (
    <div className="max-w-[1920px] mx-auto flex items-center h-screen overflow-hidden bg-[url('/Apps.svg')] bg-cover bg-center bg-no-repeat">
    
      <div className="flex flex-col lg:flex-row justify-between px-4 sm:px-10 lg:px-20 gap-10 w-full max-w-[1440px] mx-auto">
        
    
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/Apps2.svg"
            alt="/"
            width={582}
            height={470}
            className="w-[350px] h-[350px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[582px] lg:h-[470px] lg:mt-0 mt-1"
          />
        </div>

 
        <div className="flex flex-col flex-1 mt-[-50px] sm:mt-[-30px] md:mt-[-20px] lg:mt-0 justify-center text-center lg:text-left text-white">
          <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[55px] font-extrabold leading-tight mt-20 lg:mt-1 ">
            Work with Your <br /> Favorite Apps Using <br /> whitepace
          </h1>

          <p className="text-[18px] sm:text-[18px] mt-6 sm:mt-8 lg:mt-6">
            Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
          </p>

          <button className="flex items-center justify-center mt-12 sm:mt-14 bg-[#4F9CF9] rounded-md h-[50px] w-[150px] text-white mx-auto lg:mx-0 ">
            Read more
            <IoArrowForward className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apps;

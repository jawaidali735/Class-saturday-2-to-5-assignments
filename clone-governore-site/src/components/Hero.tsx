import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="relative z-0 w-full overflow-hidden bg-opacity-75 bg-[url('/bg_house.jpg')] bg-cover">
        
<div className="absolute inset-0 -z-50 h-full w-ffull bg-zinc-100 bg-opacity-80"></div>
        <div className="z-50 m-auto mt-6 block w-[95%] items-center justify-between md:flex md:flex-row lg:w-[90%] xl:w-[1300px]">
      <div className="h-fit w-full pt-5 md:w-1/2 md:py-10">
        <h1 className="whitespace-nowrap text-center text-[2rem] font-extrabold leading-10 tracking-wider text-[#044e83] sm:text-5xl sm:leading-none md:text-left lg:text-6xl">
          Governor Sindh
        </h1>
        <h1 className="whitespace-nowrap text-center text-[1.5rem] font-normal leading-[2rem] tracking-wider text-[#044e83] sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem]">
          Kamran Khan Tessori
        </h1>
        <h1 className="mt-5 whitespace-nowrap text-center text-[1.5rem] font-extrabold leading-[2rem] tracking-wider text-sub sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem] text-[#2eb6e8]">
          Certified Cloud
          <br />
          Applied Generative AI
          <br />
          Engineer (GenEng)
        </h1>
        <p className="my-5 whitespace-nowrap text-center text-[1.25rem] font-extrabold text-[#044e83] sm:text-2xl md:text-left">
          Earn up to $5,000 / month
        </p>
        <p className="my-5 w-full text-center text-[1.25rem] font-extrabold tracking-wider text-[#044e83] sm:text-2xl md:w-[80%] md:text-left">
          Now admissions are open in Hyderabad
        </p>
      
       <div className="flex overflow-hidden items-center  flex-col lg:flex-row lg:gap-20 px-2 lg:px-0">
       <button className="bg-[#044e83] mt-8  lg:w px-6 whitespace-nowrap lg:px-14 py-4 rounded-md font-bold text-white text-sm lg:snap-normal ">APPLY NOW</button>
       <div className="lg:mt-10 mt-2 text-center text-[#044e83]">
        <h1 className="font-extrabold text-xl lg:text-3xl">562,143</h1>
        <p className="whitespace-nowrap">Acceptes Applications</p>
       </div>
       </div>

      </div>
      <div className="relative  mt-7 flex  w-full items-end justify-center md:m-auto md:justify-end">
        <Image src="/cover.png" width={500} height={500} alt="/" className="md: ml-40 h-auto min-w-[900px] lg:w-[600px]" />

      </div>
      </div>
    </div>
  );
};

export default Hero;

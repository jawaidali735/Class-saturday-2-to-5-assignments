import React from 'react'
import { IoArrowForward } from 'react-icons/io5';
import Image from 'next/image';


const ProjectManage = () => {
  return (
     <div className="max-w-[1920px] mx-auto  flex items-center h-screen overflow-hidden ">
          <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-4 gap-2  w-full max-w-[1440px] mx-auto ">
           <Image
           src="/img.png"
           alt=''
           width={602.84}
           height={448.52}
           className='absolute ml-[-300px] z-0 mt-[-100px]'
           /> 
           
            <div className="flex flex-col flex-1 justify-center text-center lg:text-left">
            <Image src="/Element.png" alt='' width={234} height={38}  className='absolute lg:mt-[-60px]  lg:ml-[155px] ml-[75px] mt-[-150px] '/>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[55px]  font-extrabold leading-tight z-0">
              Project <br/> Management
              </h1>
            
              <p className="text-[16px] sm:text-[18px]  mt-10  lg:mt-6">
              Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
              </p>
              <button className="flex items-center justify-center mt-16 sm:mt-12 bg-[#4F9CF9] rounded-md h-[50px] w-[150px] text-white mx-auto lg:mx-0 z-0">
                Get Started
                <IoArrowForward className="ml-2" />
              </button>
            </div>
    
                    <div className="flex-1 flex items-center justify-center">
              <div className="w-[300px] sm:w-[300px] lg:w-[685px] h-[250px] sm:h-[350px] lg:h-[456.39px] bg-[#C4DEFD] lg:mt-0 mt-20 shadow-lg">
               
              </div>
            </div>
            
          </div>

          
        </div>
  )
}

export default ProjectManage
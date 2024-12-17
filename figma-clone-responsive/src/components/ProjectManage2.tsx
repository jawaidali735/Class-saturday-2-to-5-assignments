
import { IoArrowForward } from 'react-icons/io5';
import Image from 'next/image';
import React from 'react'

const ProjectManage2 = () => {
  return (
    <div className="max-w-[1920px] mx-auto  flex items-center h-screen overflow-hidden ">
              <div className="flex flex-col-reverse lg:flex-row justify-between px-4 lg:px-4 gap-2  w-full max-w-[1440px] mx-auto ">
              
              <div className="flex-1 flex items-center justify-center">
                  <Image src="/Work-Together-Image.svg" alt='/' width={583} height={542} className='w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[583px] lg:h-[542px] lg:mt-0 mt-10' />
                </div>



                <div className="flex flex-col flex-1 mt-[-150px] lg:mt-0 justify-center text-center lg:text-left">
                <Image src="/Element.png" alt='' width={234} height={38}  className='absolute lg:mt-[-110px]  lg:ml-[180px] ml-[170px] mt-[-210px] lg:w-[234px] lg:h-[38px] w-[170px] '/>
                  <h1 className="text-[36px] sm:text-[48px] lg:text-[55px]  font-extrabold leading-tight z-0">
                  Work together
                  </h1>
                
                  <p className="text-[18px] sm:text-[18px]  mt-10  lg:mt-6">
                  With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.

                  </p>
                  <button className="flex items-center justify-center mt-16 sm:mt-12 bg-[#4F9CF9] rounded-md h-[50px] w-[150px] text-white mx-auto lg:mx-0 z-0">
                    Try it now
                    <IoArrowForward className="ml-2" />
                  </button>
                </div>
        
                        
                
              </div>
    
              
            </div>
  )
}

export default ProjectManage2
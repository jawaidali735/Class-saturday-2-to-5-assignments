import React from 'react'
import { IoArrowForward } from 'react-icons/io5';
import Image from 'next/image';


const YourData = () => {
  return (
     <div className="max-w-[1920px] mx-auto  flex items-center h-screen overflow-hidden ">
          <div className="flex flex-col-reverse lg:flex-row justify-between px-4 lg:px-4 gap-2  w-full max-w-[1440px] mx-auto ">
          
            <div className="flex flex-col flex-1 justify-center text-center lg:text-left">
            <Image src="/Element.png" alt='' width={234} height={38}  className='absolute lg:mt-[-130px]  lg:ml-[155px] ml-[120px] mt-[-210px] '/>
              <h1 className="text-[36px] sm:text-[48px] lg:text-[55px]  font-extrabold leading-tight z-0">
              100% your data
              </h1>
            
              <p className="text-[16px] sm:text-[18px]  mt-10  lg:mt-6">
              The app is open source and your notes are saved to an open format, so you&apos;ll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.
              </p>
              <button className="flex items-center justify-center mt-16 sm:mt-12 bg-[#4F9CF9] rounded-md h-[50px] w-[150px] text-white mx-auto lg:mx-0 z-0">
                Read more
                <IoArrowForward className="ml-2" />
              </button>
            </div>
    
                    <div className="flex-1 flex items-center justify-center">
              <Image src="/new1.svg" alt='/' width={681} height={381} className='mb-24 lg:mb-0' />
            </div>
            
          </div>

          
        </div>
  )
}

export default YourData
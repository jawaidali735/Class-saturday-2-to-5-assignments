import React from 'react'
import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';
const Work = () => {
  return (
    <div className=" max-w-[1920px] mx-auto  flex items-center h-screen bg-[url('/Your-work.svg')] bg-auto bg-center bg-no-repeat">
      <div className="text-center text-white relative ">
      <Image src="/Elementb.png" alt='' width={234} height={38}  className='absolute lg:mt-[210px]  lg:ml-[910px] ml-[155px] mt-[235px] z-10 '/>
      <h1 className="text-[36px] sm:text-[48px] lg:text-[55px]  font-extrabold leading-tight z-0 pt-36">
      Your work, everywhere you are
              </h1>
                     
              <p className="text-[18px] sm:text-[18px]  mt-10  lg:mt-6 lg:px-36 px-6">
              Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
              </p>

              <div className='flex items-center justify-center '>
              <button className="flex items-center justify-center mt-16 sm:mt-12 bg-[#4F9CF9] hover:bg-[#3766a0] rounded-md h-[50px] w-[150px] text-white mx-auto lg:mx-0 z-0">
               Try Taskey
                              <IoArrowForward className="ml-2" />
                            </button>
              </div>
      </div>

     
    </div>
  )
}

export default Work

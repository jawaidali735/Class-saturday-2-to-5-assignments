
import React from 'react'
import { IoArrowForward } from 'react-icons/io5';
import Image from 'next/image';
const Customise = () => {
  return (
    <div className="max-w-[1920px] mx-auto  flex items-center h-screen overflow-hidden ">
             <div className="flex flex-col-reverse lg:flex-row justify-between px-4 lg:px-4 gap-10  w-full max-w-[1440px] mx-auto ">
             
             <div className="flex-1 flex items-center justify-center">
                 <div className="w-[300px] sm:w-[300px] lg:w-[685px] h-[250px] sm:h-[350px] lg:h-[456.39px] bg-[#C4DEFD] lg:mt-0 mt-20 shadow-lg">
                  
                 </div>
               </div>
               <div className="flex flex-col flex-1 justify-center text-center lg:text-left">
               <Image src="/Element3.png" alt='' width={490} height={31}  className='absolute lg:mt-[-80px]  lg:ml-0  ml-[55px] lg:w-[490px] lg:h-[31px] w-[290px] h-[31px] mt-[-150px] '/>
                 <h1 className="text-[36px] sm:text-[48px] lg:text-[55px]  font-extrabold leading-tight z-0">
                 Customise it
                 to <br/> your needs
                 </h1>
               
                 <p className="text-[16px] sm:text-[18px]  mt-10  lg:mt-6">
                 Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                 </p>
                 <button className="flex items-center justify-center mt-16 sm:mt-12 bg-[#4F9CF9] rounded-md h-[50px] w-[150px] text-white mx-auto lg:mx-0 z-0">
                   Let&apos;s Go
                   <IoArrowForward className="ml-2" />
                 </button>
               </div>
       
                       
               
             </div>
   
             
           </div>
  )
}

export default Customise
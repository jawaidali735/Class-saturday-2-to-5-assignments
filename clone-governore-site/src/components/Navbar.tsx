
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
<div className='bg-[#044e83]'>
 
<div className='relative z-10 m-auto flex h-16 w-[95%] items-center p-4 justify-between md:h-20 lg:w-[90%] xl:w-[1300px] '>

        <Image src="/logo.9ff76f62.png" alt='' height={176} width={140}  className='absolute top-4 h-[130px] w-[100px] mr-4'/>
   
      <div className='text_shadow pl-36 hidden text-[17px] font-extrabold text-[#b9d8f3] lg:block xl-lg:text-xl xl:text-2xl'>Tuition Free Education Program on Latest Technologies
    
      </div>
      <div className="text_shadow pl-44 lg:hidden text-[15px] font-extrabold text-[#b9d8f3] sm:block ">
      <h1  >Tuition Free Program</h1>
      </div>
      
      <div className=' hidden items-center gap-5 text-[#FAF9F6] sm:flex lg:gap-10'>
        <Link href="/">Home</Link>
        <Link href="/">Apply</Link>
        <Link href="/">Jobs</Link>
        <Link href="/">Result</Link>
        <div className='flex items-center gap-2'>
        <Link href="/">Courses</Link>
        <MdKeyboardArrowDown/>
        </div>
      </div>
    </div>
    
</div>
  )
}

export default Navbar

"use client"

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import { VscMenu } from "react-icons/vsc";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [open, setOpen] = useState(false); 

  return (
    <div className="bg-[#043873]">
      <div className="max-w-[1440px] mx-auto overflow-hidden flex justify-between items-center px-2 h-[90px] bg-[#043873] text-white ">
       
        <div className="flex gap-2 sm:text-md md:text-xl lg:text-[28px] ">
          <Image src="/Group.svg" alt="" height={29} width={37} className="h-[20px] w-[28px] lg:h-[29px] lg:w-[37px]" />
          Whitepace
        </div>


        <div className="sm:flex gap-10 hidden">
          <div className="flex items-center gap-2">
            Products
            <IoIosArrowDown />
          </div>

          <div className="flex items-center gap-2">
            Solutions
            <IoIosArrowDown />
          </div>

          <div className="flex items-center gap-2">
            Resources
            <IoIosArrowDown />
          </div>

          <div className="flex items-center gap-2">
            Pricing
            <IoIosArrowDown />
          </div>

          <div className="flex gap-4">
            <button className="bg-[#FFE492] rounded-md h-[50px] w-[126px]">Login</button>

            <button className="flex items-center justify-center bg-[#4F9CF9] rounded-md h-[50px] w-[227px] text-white">
              Try Whitepace free
              <IoArrowForward className="ml-2" />
            </button>
          </div>
        </div>

      
        <div className="sm:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <VscMenu className="w-8 h-8 cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="left" className="bg-[#043873] text-white">
              <SheetHeader>
                <SheetTitle className="text-2xl flex items-center gap-2 justify-center text-white"><Image src="/Group.svg" alt="" height={29} width={37} className="h-[20px] w-[28px] " />
                Whitepace</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-6 mt-6 text-lg">
                <div  onClick={() => setOpen(false)} className="flex items-center justify-between">
                  Products
                  <IoIosArrowDown />
                </div>
                <div  onClick={() => setOpen(false)} className="flex items-center justify-between">
                  Solutions
                  <IoIosArrowDown />
                </div>
                <div  onClick={() => setOpen(false)} className="flex items-center justify-between">
                  Resources
                  <IoIosArrowDown />
                </div>
                <div  onClick={() => setOpen(false)} className="flex items-center justify-between">
                  Pricing
                  <IoIosArrowDown />
                </div>
                <button  onClick={() => setOpen(false)} className="bg-[#FFE492] text-black rounded-md h-[40px] w-full">
                  Login
                </button>
                <button  onClick={() => setOpen(false)} className="bg-[#4F9CF9] text-white rounded-md h-[50px] w-full flex items-center justify-center">
                  Try Whitepace free
                  <IoArrowForward className="ml-2" />
                </button>
              </div>

            
             
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

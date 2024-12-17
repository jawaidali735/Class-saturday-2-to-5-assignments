"use client";

import React, { useState, useEffect, useRef } from "react";
import { FiCheckCircle } from "react-icons/fi";
import Image from "next/image";
const plans = [
  {
    title: "Free",
    price: "$0",
    text:"Capture ideas and find them quickly",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
  },
  {
    title: "Personal",
    price: "$11.99",
    text:"Keep home and family on track",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
  },
  {
    title: "Organization",
    price: "$49.99",
    text:"Capture ideas and find them quickly",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
  },
];

const PricingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0); 
  const containerRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: 0, 
        behavior: "smooth",
      });
    }
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth;
      const index = Math.floor(scrollLeft / cardWidth); 
      setActiveIndex(index);
    }
  };


  const scrollToCard = (index: number) => {
    const container = containerRef.current;
    if (container) {
      const cardWidth = container.offsetWidth;
      container.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <div className="max-w-[1920px]  mx-auto  overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-[1440px] mx-auto">
      <Image src="/priceplan.png" alt='' width={334} height={30.11}  className='absolute lg:mt-[45px]  lg:ml-[670px] ml-[75px] mt-[30px] w-[234] h-[31] z-[-10] '/>
        <h1 className="  text-center  text-[36px] sm:text-[48px] lg:text-[55px] font-extrabold leading-tight z-0">
          Choose Your Plan
        </h1>
         
        <p className="text-center  text-[16px] sm:text-[18px] mt-10 lg:mt-6 lg:px-36 px-5  mb-6 ">
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity,
          Evernote has the <br /> right plan for you.
        </p>

        <div
          className="flex mx-10 lg:mx-0 gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth md:overflow-visible justify-start lg:justify-center"
          ref={containerRef}
          onScroll={handleScroll}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg  ${
                plan.title === "Personal" ? "bg-[#043873] text-white "  : "bg-white"
              } border border-[#FFE492] mx-0  w-full    md:w-80 snap-center flex-shrink-0`}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
              <p
                className={`text-2xl font-semibold mb-4 ${
                  plan.title === "Personal" ? "text-[#FFE492] " : "text-black"
                }`}
              >
                {plan.price}
              </p>

              <p className=" mb-4">{plan.text}</p>

              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span
                      className={`text-2xl font-semibold mb-4 ${
                        plan.title === "Personal" ? "text-[#FFE492]" : "text-black"
                      }`}
                    >
                      <FiCheckCircle />
                    </span>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
              <button
                className={`w-[166px] h-[51px] p-2 rounded ${
                  plan.title === "Personal"
                    ? "bg-[#4F9CF9] hover:bg-blue-700"
                    : "border border-[#FFE492] hover:bg-gray-100"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

       
        <div className="flex justify-center mt-4 space-x-2 md:hidden">
          {plans.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCards;

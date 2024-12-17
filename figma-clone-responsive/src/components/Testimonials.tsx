"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";

const testimonials = [
  {
    text: "“Whitespace is designed as a collaboration tool for businesses that is a full project management solution.”",
    name: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    img: "/Avater.png",
    bg: "bg-white",
    textColor: "text-black",
    borderColor: "border-[#212529]",
  },
  {
    text: "“Whitespace is designed as a collaboration tool for businesses that is a full project management solution.”",
    name: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    img: "/Avater2.png",
    bg: "bg-[#4f9df8]",
    textColor: "text-white",
    borderColor: "border-white",
  },
  {
    text: "“Whitespace is designed as a collaboration tool for businesses that is a full project management solution.”",
    name: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    img: "/Avater3.png",
    bg: "bg-[#4f9df8]",
    textColor: "text-white",
    borderColor: "border-white",
  },
];

export default function Testimonials() {
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
    <section className="py-10 px-4 md:px-20 mb-20">
      <h2 className="text-center text-[28px] sm:text-[36px] md:text-[48px] lg:text-[55px] font-extrabold leading-tight mb-16 mt-16">
        What Our Clients Say
      </h2>
      <div
        className="flex mx-10 lg:mx-0 gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth md:overflow-visible justify-start lg:justify-center"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md w-full md:w-80 snap-center flex-shrink-0 ${testimonial.bg} ${testimonial.textColor}`}
          >
            <div className="flex items-center mb-4 space-x-[-45px]">
              <BiSolidQuoteSingleLeft className="w-[100px] h-[100px]" />
              <BiSolidQuoteSingleLeft className="w-[100px] h-[100px]" />
            </div>
            <p
              className={`text-lg pb-10 mb-10 border-b-2 ${testimonial.borderColor}`}
            >
              {testimonial.text}
            </p>
            <div className="flex items-center">
              <Image
                src={testimonial.img}
                alt={`Client ${index + 1}`}
                width={95}
                height={95}
                className="rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold text-[24px] text-[#043873]">
                  {testimonial.name}
                </h4>
                <p className="text-[16px]">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    
      <div className="flex justify-center mt-4 space-x-2 md:hidden">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToCard(index)}
            className={`w-3 h-3 rounded-full ${
              activeIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}

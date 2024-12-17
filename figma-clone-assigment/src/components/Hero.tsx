import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex w-11/12">
        <div className="flex flex-col flex-1 gap-4 justify-center px-4">
          <h1 className="font-bold text-[44px]">Welcome To Our Website</h1>
          <p className="text-[32px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard
          </p>
          <button className="text-white w-[237px] h-[66px] p-4 bg-black">
            Contact US
          </button>
        </div>

        <div className="flex-1">
          <div>
            <Image
              src="/image.svg"
              alt="Banner Image"
              width={502}
              height={465}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

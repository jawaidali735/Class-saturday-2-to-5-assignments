import React from 'react';

import Image from 'next/image';

const OurSponsors = () => {
  return (
    <div className="max-w-[1920px] mx-auto flex items-center overflow-hidden">
      <div className="flex flex-col flex-1 text-center w-full max-w-[1440px] mx-auto mb-20">
      
        <Image
          src="/Element.png"
          alt=""
          width={234}
          height={38}
          className="absolute lg:mt-[45px] lg:ml-[645px] ml-[120px] mt-[32px]"
        />

      
        <h1 className="text-[36px] sm:text-[48px] lg:text-[55px] font-extrabold leading-tight z-0">
          Our sponsors
        </h1>

     
        <div className="flex flex-col lg:flex-row justify-between space-y-24 items-center px-10 sm:px-20 lg:px-40 mt-20 lg:mt-6">
     
          <Image
            src="/Apple.svg"
            alt="/"
            width={55}
            height={51}
            className="w-[70px] sm:w-[90px] lg:w-[70px] h-[70px] sm:h-[90px] lg:h-[70px] lg:mt-[70px]"
          />
          <Image
            src="/Microsoft.svg"
            alt="/"
            width={207}
            height={40}
            className="w-[220px] sm:w-[260px] lg:w-[207px] h-[60px] sm:h-[80px] lg:h-[40px] "
          />
          <Image
            src="/Slack.svg"
            alt="/"
            width={280}
            height={71}
            className="w-[240px] sm:w-[300px] lg:w-[280px] h-[80px] sm:h-[100px] lg:h-[71px]"
          />
          <Image
            src="/Google.svg"
            alt="/"
            width={211}
            height={70}
            className="w-[200px] sm:w-[250px] lg:w-[211px] h-[70px] sm:h-[90px] lg:h-[70px]"
          />
        </div>
      </div>
    </div>
  );
};

export default OurSponsors;

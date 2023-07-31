import React from 'react';
import { Banner1, Banner2, Banner3, Banner4, Banner5 } from '../images';

const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

const Header = ({ title, image }) => {
  return (
    <div className="w-full h-[100vh]">
      <div className="relative w-full h-full">
        <img
          src={image ?? images[Math.floor(Math.random() * images.length)]}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 ">
        <div className="-mt-[150px]">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;

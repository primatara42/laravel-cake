import React from "react";
import { HeaderLogo } from "./AllImages";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-primary text-white py-1 px-3 text-lg md:text-base w-full sticky top-0 sm:px-10 sm:py-3">
      <div className="flex items-center gap-x-3">
        <div>
          <img src={HeaderLogo} alt="" className="w-7"/>
        </div>
        <div className="text-center">
          <h1 className="text-base font-semibold sm:text-xl">Laravel</h1>
          <h1 className="text-sm font-extralight sm:text-lg">Cake</h1>
        </div>
      </div>

      <ul className="hidden items-center justify-around font-bold gap-x-16 text-base md:flex">
        <li>Home</li>
        <li>Menu</li>
        <li>Promo</li>
        <li>Kontak</li>
      </ul>
      <div className="hidden font-bold justify-between gap-x-5">
        <button className="hover:font-extrabold">Login</button>
        <button className="w-36 border-4 border-white text-white rounded-full hover:border-none hover:bg-white hover:text-primary duration-300 ease-in-out">
          Sign Up
        </button>
      </div>
      <div className="md:hidden">
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Header;

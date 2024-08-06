import React from "react";
import HeaderLogo from "../assets/icons/laravel-icon.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="flex justify-between bg-primary text-white p-5 text-lg md:text-base w-full">
      <div className="">
        <img src={HeaderLogo} alt="Laravel Cake" />
      </div>

      <ul className="flex items-center justify-around font-bold gap-x-10 md:hidden">
        <li>Home</li>
        <li>Menu</li>
        <li>Promo</li>
        <li>Kontak</li>
      </ul>
      <div className="font-bold flex justify-between gap-x-5 md:hidden">
        <button className="hover:font-extrabold">Login</button>
        <button className="w-36 border-4 border-white text-white rounded-full hover:border-none hover:bg-white hover:text-primary duration-300 ease-in-out">
          Sign Up
        </button>
      </div>
      <div className="bg-red-700 my-auto -md:hidden">
        <GiHamburgerMenu />
      </div>
      <ul className="font-bold -md:hidden gap-x-10 absolute top-0 right-0 bg-slate-300 p-3 w-60">
        <li>Home</li>
        <li>Menu</li>
        <li>Promo</li>
        <li>Kontak</li>
      </ul>
    </div>
  );
};

export default Header;

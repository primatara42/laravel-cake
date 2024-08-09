import React from "react";
import JumbotronImage from "../assets/images/jumbotron_image(1).png";
import { FaArrowRight } from "react-icons/fa";
const Jumbotron = () => {
  return (
    <div className="w-full h-[100vh] py-80 bg-primary flex justify-between items-center text-white md:block md:py-24">
      <div className="left mb-5 md:hidden">
        <img
          src={JumbotronImage}
          className="max-w-[1300px] md:w-[500px] md:ml-10 sm:max-w-80"
        />
      </div>
      <div className="right bg-primary pr-10  font-bold md:flex md:flex-col md:p-10">
        <div className="text-5xl md:text-4xl md:text-center">
          <h1 className="">
            Delicious <span className="text-secondary">Desserts,</span>
          </h1>
          <h1 className="">
            Perfected with <span className="text-secondary">Laravel.</span>
          </h1>
        </div>

        <div className="my-5 -md:hidden md:pl-10">
          <img src={JumbotronImage} className="" />
        </div>
        <p className="my-5 text-lg  md:text-center md:text-base">
          "Explore delectable sweets at Laravel Cake, where every donut,
          brownie, and ice cream is crafted to perfection with the seamless
          precision of Laravel, creating a unique bakery experience."
        </p>
        <div className="text-xl md:text-lg md:text-center md:flex md:justify-center sm:flex-col sm:w-[75%] sm:mx-auto sm:gap-y-5">
          <button className="mr-10 border-4 p-3 sm:w-full rounded-full hover:bg-white hover:border-white hover:text-primary duration-300 ease-in-out">
            Order Now
          </button>
          <button className="bg-white text-primary p-4 sm:w-full rounded-full hover:bg-secondary hover:border-secondary hover:text-white duration-300 ease-in-out">
            Explore More
            <span>
              <FaArrowRight className="inline-block ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;

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
      <div className="right pr-10 text-5xl font-bold md:text-4xl md:flex md:flex-col md:p-10 bg-primary">
        <div className="md:text-center">
          {" "}
          <h1 className="sm:text-left">
            Delicious <span className="text-secondary">Desserts,</span>
          </h1>
          <h1 className="sm:text-left">
            Perfected with <span className="text-secondary">Laravel.</span>
          </h1>
        </div>

        <div className="my-5 -md:hidden md:pl-20">
          <img
            src={JumbotronImage}
            className=""
          />
        </div>
        <p className="my-5 text-lg  md:text-center md:text-base ">
          "Explore delectable sweets at Laravel Cake, where every donut,
          brownie, and ice cream is crafted to perfection with the seamless
          precision of Laravel, creating a unique bakery experience."
        </p>
        <div className="text-xl md:text-lg md:text-center">
          <button className="mr-10 border-4 p-3 rounded-full hover:bg-white hover:border-white hover:text-primary duration-300 ease-in-out">
            Order Now
          </button>
          <button className="bg-white text-primary p-4 rounded-full hover:bg-secondary hover:border-secondary hover:text-white duration-300 ease-in-out">
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

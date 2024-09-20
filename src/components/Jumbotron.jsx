import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { JumbotronImage } from "./AllImages";
const Jumbotron = () => {
  return (
    <div className="container bg-primary max-w-md text-white mx-auto flex items-center p-8 sm:max-w-lg md:max-w-5xl lg:max-w-full">
      <div className="hidden md:flex items-center">
        <div className="hidden lg:block flex-initial">
          <img src={JumbotronImage} alt="Laravel Cake" className="w-[1300px]" />
        </div>
        <div className="hidden lg:block w-[90%]">
          <div className="text-6xl font-semibold">
            <h1>
              Delicious
              <span className="text-secondary font-bold"> Dessert,</span>
            </h1>
            <h1>
              Perfected with
              <span className="text-secondary font-bold"> Laravel</span>
            </h1>
          </div>
          <p className="text-lg my-5">
            "Explore delectable sweets at Laravel Cake, where every donut,
            brownie, and ice cream is crafted to perfection with the seamless
            precision of Laravel, creating a unique bakery experience."
          </p>
          <div className="flex gap-x-5 font-bold">
            <a
              href="#"
              className="text-xl block bg-primary text-white border-2 border-white px-5 py-3 rounded-full"
            >
              Order Now!
            </a>
            <a
              href="#"
              className="text-xl block bg-white text-primary border-2 px-5 py-3 rounded-full"
            >
              Explore More
              <span>
                <FaArrowRight className="inline-block ml-3" />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="flex justify-center mb-3">
          <img src={JumbotronImage} alt="Laravel Cake" className="" />
        </div>
        <div className="text-2xl font-bold sm:text-center mb-3 md:text-4xl">
          <h1>
            Delicious <span className="text-secondary">Dessert,</span>
          </h1>
          <h1>
            Perfected with <span className="text-secondary">Laravel</span>
          </h1>
        </div>
        <p className="text-sm sm:text-center mb-3 md:text-base">
          "Explore delectable sweets at Laravel Cake, where every donut,
          brownie, and ice cream is crafted to perfection with the seamless
          precision of Laravel, creating a unique bakery experience."
        </p>
        <div className="w-44 text-center mx-auto sm:w-96">
          <a
            href="#"
            className="text-lg bg-primary block mr-5 border-2 px-3 py-1 rounded-full mb-3 w-full sm:w-fit sm:inline-block"
          >
            Order Now
          </a>
          <a
            href="#"
            className="text-lg bg-white block text-primary border-2 px-3 py-1 rounded-full w-full sm:w-fit sm:inline-block"
          >
            Explore More{" "}
            <span>
              <FaArrowRight className="inline-block" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;

import React from "react";
import JumbotronImage from "../assets/images/jumbotron_image.png";
import { FaArrowRight } from "react-icons/fa";
const Jumbotron = () => {
  return (
    <div className="h-[100vh] py-96 bg-primary flex items-center text-white">
      <div className="left w-[80%]">
        <img src={JumbotronImage} />
      </div>
      <div className="right ml-20 text-6xl font-bold">
        <h1 className="mb-5">
          Delicious <span className="text-secondary">Desserts,</span>
        </h1>
        <h1>
          Perfected with <span className="text-secondary">Laravel.</span>
        </h1>
        <p className="my-5 text-lg w-[80%]">
          "Explore delectable sweets at Laravel Cake, where every donut,
          brownie, and ice cream is crafted to perfection with the seamless
          precision of Laravel, creating a unique bakery experience."
        </p>
        <div className="text-2xl">
          <button className="mr-10 border-4 p-3 rounded-full hover:bg-white hover:border-white hover:text-primary duration-300 ease-in-out">Order Now</button>
          <button className="bg-white text-primary p-4 rounded-full hover:bg-secondary hover:border-secondary hover:text-white duration-300 ease-in-out">
            Explore More <span><FaArrowRight className="inline-block"/></span>
          </button>
        </div>
        {/* <h1 className='text-6xl'>Delicious Desserts, 
                <br />
            Perfected with Laravel</h1> */}
      </div>
    </div>
  );
};

export default Jumbotron;

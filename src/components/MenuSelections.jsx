import React from "react";
import { FavoriteMenu } from "./AllImages";

function MenuSelections() {
  return (
    <div className="container sm:max-w-lg mx-auto p-10 bg-third md:max-w-5xl lg:max-w-full">
      <h1 className="text-secondary text-xl text-center font-bold mb-5 md:text-3xl">
        Menu <span className="text-primary">Selections</span>
      </h1>
      <div className="md:flex md:justify-between md:items-center">
        <p className="text-sm text-justify mb-3 sm:text-base md:text-lg md:w-96 lg:w-[80%]">
          Explore our wide range of delicious treats and desserts, from classic
          cakes to delightful pastries.
        </p>
        <div className="flex justify-end mb-3">
          <select className="bg-primary text-white rounded-full px-3 py-2 text-sm md:text-lg">
            <option value="all">All</option>
            <option value="cake">Cake</option>
            <option value="donut">Donut</option>
            <option value="pie">Pie</option>
            <option value="ice cream">Ice Cream</option>
          </select>
        </div>
      </div>
      <div className="card_container flex flex-wrap gap-y-10 gap-x-10 sm:justify-between lg:justify-center">
        <div className="card bg-white p-5 rounded-xl shadow-xl font-semibold sm:max-w-72">
            <img src={FavoriteMenu} className="w-24 h-24 object-cover rounded-full mb-3 sm:w-36 sm:h-36"/>
            <h2 className="text-base sm:text-lg">Cheesecake Speculoos</h2>
            <p className="font-normal text-sm text-justify mb-3 sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus repudiandae reiciendis, rerum magnam expedita.</p>
        <div className="text-primary text-base sm:text-lg flex justify-between items-center">
            <p>Rp 25.000</p>
            <button className="bg-white border-primary border-2 rounded-full p-2">Add to Cart</button>
        </div>
        </div>
        <div className="card bg-white p-5 rounded-xl shadow-xl font-semibold sm:max-w-72">
            <img src={FavoriteMenu} className="w-24 h-24 object-cover rounded-full mb-3 sm:w-36 sm:h-36"/>
            <h2 className="text-base sm:text-lg">Cheesecake Speculoos</h2>
            <p className="font-normal text-sm text-justify mb-3 sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus repudiandae reiciendis, rerum magnam expedita.</p>
        <div className="text-primary text-base sm:text-lg flex justify-between items-center">
            <p>Rp 25.000</p>
            <button className="bg-white border-primary border-2 rounded-full p-2">Add to Cart</button>
        </div>
        </div>
        <div className="card bg-white p-5 rounded-xl shadow-xl font-semibold sm:max-w-72">
            <img src={FavoriteMenu} className="w-24 h-24 object-cover rounded-full mb-3 sm:w-36 sm:h-36"/>
            <h2 className="text-base sm:text-lg">Cheesecake Speculoos</h2>
            <p className="font-normal text-sm text-justify mb-3 sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus repudiandae reiciendis, rerum magnam expedita.</p>
        <div className="text-primary text-base sm:text-lg flex justify-between items-center">
            <p>Rp 25.000</p>
            <button className="bg-white border-primary border-2 rounded-full p-2">Add to Cart</button>
        </div>
        </div>
        <div className="card bg-white p-5 rounded-xl shadow-xl font-semibold sm:max-w-72">
            <img src={FavoriteMenu} className="w-24 h-24 object-cover rounded-full mb-3 sm:w-36 sm:h-36"/>
            <h2 className="text-base sm:text-lg">Cheesecake Speculoos</h2>
            <p className="font-normal text-sm text-justify mb-3 sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus repudiandae reiciendis, rerum magnam expedita.</p>
        <div className="text-primary text-base sm:text-lg flex justify-between items-center">
            <p>Rp 25.000</p>
            <button className="bg-white border-primary border-2 rounded-full p-2">Add to Cart</button>
        </div>
        </div>
        <div className="card bg-white p-5 rounded-xl shadow-xl font-semibold sm:max-w-72">
            <img src={FavoriteMenu} className="w-24 h-24 object-cover rounded-full mb-3 sm:w-36 sm:h-36"/>
            <h2 className="text-base sm:text-lg">Cheesecake Speculoos</h2>
            <p className="font-normal text-sm text-justify mb-3 sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus repudiandae reiciendis, rerum magnam expedita.</p>
        <div className="text-primary text-base sm:text-lg flex justify-between items-center">
            <p>Rp 25.000</p>
            <button className="bg-white border-primary border-2 rounded-full p-2">Add to Cart</button>
        </div>
        </div>
        <div className="card bg-white p-5 rounded-xl shadow-xl font-semibold sm:max-w-72">
            <img src={FavoriteMenu} className="w-24 h-24 object-cover rounded-full mb-3 sm:w-36 sm:h-36"/>
            <h2 className="text-base sm:text-lg">Cheesecake Speculoos</h2>
            <p className="font-normal text-sm text-justify mb-3 sm:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo doloribus repudiandae reiciendis, rerum magnam expedita.</p>
        <div className="text-primary text-base sm:text-lg flex justify-between items-center">
            <p>Rp 25.000</p>
            <button className="bg-white border-primary border-2 rounded-full p-2">Add to Cart</button>
        </div>
        </div>



      </div>
    </div>
  );
}

export default MenuSelections;

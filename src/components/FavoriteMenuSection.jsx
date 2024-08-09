import React from "react";
import FavoriteMenu from "../assets/images/cheesecakeSpeculoos.jpg";

const FavoriteMenuSection = () => {
  return (
    <div className="container sm:max-w-lg mx-auto p-10 bg-third md:max-w-5xl lg:max-w-full">
      <h1 className="text-xl text-center font-bold mb-5 md:text-3xl">
        Customer Favorites
      </h1>
      <p className="text-sm text-justify mb-3 sm:text-base md:text-lg">
        Discover our top-rated treats, from fluffy donuts to decadent brownies
        and refreshing ice cream. These customer favorites are sure to satisfy
        your sweet cravings.
      </p>
      <div className="card_container flex flex-wrap gap-y-5 gap-x-10 sm:gap-y-10">
        <div className="card font-semibold mx-auto flex flex-col items-center">
          <img
            src={FavoriteMenu}
            alt="Favorite Menu"
            className="w-24 h-24 rounded-full object-cover sm:w-36 sm:h-36 md:w-52 md:h-52"
          />
          <h2 className="text-base sm:text-lg">Cheesecake Speculoos</h2>
          <button className="text-base sm:text-lg text-primary">
            Order Now &rsaquo;
          </button>
        </div>
        <div className="card font-semibold mx-auto flex flex-col items-center">
          <img
            src={FavoriteMenu}
            alt="Favorite Menu"
            className="w-24 h-24 rounded-full object-cover sm:w-36 sm:h-36 md:w-52 md:h-52"
          />
          <h2 className="text-base sm:text-lg">Cheesecake Speculoos</h2>
          <button className="text-base sm:text-lg text-primary">
            Order Now &rsaquo;
          </button>
        </div>
        <div className="card font-semibold mx-auto flex flex-col items-center">
          <img
            src={FavoriteMenu}
            alt="Favorite Menu"
            className="w-24 h-24 rounded-full object-cover sm:w-36 sm:h-36 md:w-52 md:h-52"
          />
          <h2 className="text-base sm:text-lg">Cheesecake Speculoos</h2>
          <button className="text-base sm:text-lg text-primary">
            Order Now &rsaquo;
          </button>
        </div>

        <div className="card font-semibold mx-auto flex flex-col items-center">
          <img
            src={FavoriteMenu}
            alt="Favorite Menu"
            className="w-24 h-24 rounded-full object-cover sm:w-36 sm:h-36 md:w-52 md:h-52"
          />
          <h2 className="text-base sm:text-lg">Cheesecake Speculoos</h2>
          <button className="text-base sm:text-lg text-primary">
            Order Now &rsaquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteMenuSection;

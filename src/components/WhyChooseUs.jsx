import React from "react";
import {
  FoodDelivery,
  HighQualityIngeridients,
  WideVariatyOfDessert,
} from "./AllImages";

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "ON TIME DELIVERY",
      description:
        "We ensure that every order arrives in your hands according to the promised time, maintaining the quality and freshness of the product.",
      image: FoodDelivery,
    },
    {
      title: "HIGH-QUALITY INGREDIENTS",
      description:
        "We use only premium ingredients in every cake we make, ensuring delicious taste and safety for consumption.",
      image: HighQualityIngeridients,
    },
    {
      title: "Wide Variety of Desserts",
      description:
        "Our bakery offers a diverse selection of desserts, including cakes, brownies, ice creams, and more. Whatever your sweet cravings, we have something to satisfy every taste!",
      image: WideVariatyOfDessert,
    },
  ];

  const whyUsTitleFormat = (title) => {
    const [firstWord, ...restWords] = title.split(" ");
    return (
      <>
        <span className="text-primary">{firstWord}</span>{" "}
        <span className="text-secondary">{restWords.join(" ")}</span>
      </>
    );
  };

  return (
    <div className="container sm:max-w-lg mx-auto p-10 bg-third md:max-w-5xl lg:max-w-full">
      <h1 className="text-secondary text-xl text-center font-bold mb-5 md:text-3xl">
        WHY <span className="text-primary">CHOOSE US</span>
      </h1>

      <div className="why_choose_us">
        {benefits.map((benefit, index) => (
          <>
            {/* Card for mobile screen */}
            <div id={index} className="lg:hidden mt-10 bg-white pb-5 rounded-xl">
              <div>
                <img src={benefit.image} alt={benefit.title} className="rounded-t-xl" />
              </div>
              <div className="p-5">
              <h2 className="mb-3 text-secondary font-bold text-center text-base sm:text-lg">
                  {benefit.title}
                </h2>
                <p className="text-sm text-justify mb-3 sm:text-base">{benefit.description}</p>
              </div>
            </div>

            {/* Card for laptop screen */}
            <div
              id={index}
              className={`hidden lg:flex items-center gap-x-10 mb-10 justify-between ${
                index % 2 !== 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div>
                <h2 className="text-secondary text-xl font-bold mb-5 md:text-3xl">
                  {whyUsTitleFormat(benefit.title)}
                </h2>
                <p>{benefit.description}</p>
              </div>
              <div>
                <img src={benefit.image} alt={benefit.title} className="w-96 rounded-lg" />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;

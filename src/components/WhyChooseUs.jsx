import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "ON TIME DELIVERY",
      description:
        "We ensure that every order arrives in your hands according to the promised time, maintaining the quality and freshness of the product.",
      image: "", // replace with your image path or URL
    },
    {
      title: "HIGH-QUALITY INGREDIENTS",
      description:
        "We use only premium ingredients in every cake we make, ensuring delicious taste and safety for consumption.",
      image: "../asses/images/dough.jpg",
    },
    {
      title: "Wide Variety of Desserts",
      description:
        "Our bakery offers a diverse selection of desserts, including cakes, brownies, ice creams, and more. Whatever your sweet cravings, we have something to satisfy every taste!",
      image: "../asses/images/kindofdessert.jpg",
    },
  ];

  return (
    <div className="container sm:max-w-lg mx-auto p-10 bg-third md:max-w-5xl lg:max-w-full">
      <h1 className="text-secondary text-xl text-center font-bold mb-5 md:text-3xl">
        WHY <span className="text-primary">CHOOSE US</span>
      </h1>
      <div>{features.image}</div>
    </div>
  );
};

export default WhyChooseUs;

import React, { useEffect } from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import FavoriteMenuSection from "./components/FavoriteMenuSection";
import MenuSelections from "./components/MenuSelections";
import WhyChooseUs from "./components/WhyChooseUs";

const App = () => {
  return (
    <div className="font-Inter">
      <Header />
      <Jumbotron />
      <FavoriteMenuSection />
      <MenuSelections />
      <WhyChooseUs />
    </div>
  );
};

export default App;

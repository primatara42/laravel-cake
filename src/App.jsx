import React from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import FavoriteMenuSection from "./components/FavoriteMenuSection";
import MenuSelections from "./components/MenuSelections";

const App = () => {
  return (
    <div className="font-Inter">
      {/* <Header /> */}
      <Jumbotron />
      <FavoriteMenuSection/>
      <MenuSelections/>
    </div>
  );
};

export default App;

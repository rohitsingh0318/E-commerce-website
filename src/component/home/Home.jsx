import React from "react";
import Header from "../Header";
import ProductList from "../ProductList";
import Slider from "../../Slider";

const Home = ({ product, addCard }) => {
  return (
    <>
      {/* <Header /> */}
      <Slider />
      <ProductList product={product} addCard={addCard} />
    </>
  );
};

export default Home;

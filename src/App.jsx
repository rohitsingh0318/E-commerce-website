import React from "react";
import "./App.css";
import { product } from "../product";
import Home from "./component/home/Home";
import CartPage from "./component/cart/CartPage";
import Header from './component/Header'; 
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

const App = () => {
  const [cart, setCart] = React.useState([]);
  const [cartCount, setCartCount] = React.useState(0); 

  const addCard = (product) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    setCartCount((prevCount) => prevCount + 1); 
  };

  const deleteCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));

    const deletedItem = cart.find((item) => item.id === id);
    if (deletedItem) {
      setCartCount((prevCount) => prevCount - deletedItem.quantity);
    }
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );

    const newTotal = cart.reduce(
      (total, item) =>
        item.id === id ? total + quantity - item.quantity : total,
      cartCount
    );
    setCartCount(newTotal);
  };

  return (
    <BrowserRouter>
    <Header cartCount={cartCount} />
      <Routes>
        <Route
          path="E-commerce-website/"
          element={<Home product={product} addCard={addCard} />}
        />
        <Route
          path="E-commerce-website/cart/"
          element={
            <CartPage
              deleteCart={deleteCart}
              updateQuantity={updateQuantity}
              cart={cart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

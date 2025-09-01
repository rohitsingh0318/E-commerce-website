import React from "react";
import "./App.css";
import { product } from "../product";
import Home from "./component/home/Home";
import CartPage from "./component/cart/CartPage";
import Header from "./component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [cart, setCart] = React.useState([]);
  const [cartCount, setCartCount] = React.useState(0);

  const addCard = (product) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === product.id);
      let updatedCart;
      if (itemInCart) {
        updatedCart = prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prevCart, { ...product, quantity: 1 }];
      }

      // Update cart count
      const totalCount = updatedCart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      setCartCount(totalCount);

      return updatedCart;
    });
  };

  const deleteCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      const totalCount = updatedCart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      setCartCount(totalCount);
      return updatedCart;
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = Math.max(0, quantity);
            return newQty === 0 ? null : { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item !== null);

      const totalCount = updatedCart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      setCartCount(totalCount);

      return updatedCart;
    });
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
          path="cart/"
          element={
            <CartPage
              cart={cart}
              deleteCart={deleteCart}
              updateQuantity={updateQuantity}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

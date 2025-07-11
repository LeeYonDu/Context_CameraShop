import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar";
import { useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import App from "./App";

export default function Layout() {
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(() => {
    const saved = localStorage.getItem("cartCount");
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("cartCount", numberOfItemsInCart);
  }, [numberOfItemsInCart]);

  return (
    <>
      <CartContext.Provider
        value={{ numberOfItemsInCart, setNumberOfItemsInCart }}
      >
        <NavBar numberOfItemsInCart={numberOfItemsInCart} />
        <div className="pt-24">
          <Outlet />
        </div>
      </CartContext.Provider>
    </>
  );
}

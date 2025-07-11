import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar";
import { useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";


export default function Layout() {
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(() => {
    const saved = localStorage.getItem("cartCount");
    return saved ? parseInt(saved, 10) : 0;
  });

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    setNumberOfItemsInCart((prev) => prev +1);
  };

  useEffect(() => {
    localStorage.setItem("cartCount", numberOfItemsInCart);
  }, [numberOfItemsInCart]);

  return (
    <>
      <CartContext.Provider
        value={{ numberOfItemsInCart, setNumberOfItemsInCart, cartItems, addToCart }}
      >
        <NavBar numberOfItemsInCart={numberOfItemsInCart} />
        <div className="pt-24">
          <Outlet />
        </div>

      </CartContext.Provider>
    </>
  );
}

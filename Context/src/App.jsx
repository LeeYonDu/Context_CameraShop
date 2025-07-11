import "./index.css";
import NavBar from "./components/navBar";
import { ItemList } from "./components/itemList";
import { useEffect, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Item } from "./components/item";

function App() {

  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(() => {
  const saved = localStorage.getItem("cartCount");
  return saved ? parseInt(saved, 10): 0; });

  useEffect (() => {
    localStorage.setItem("cartCount", numberOfItemsInCart);
  }, [numberOfItemsInCart])

  return (
    <CartContext.Provider
      value={{ numberOfItemsInCart, setNumberOfItemsInCart }}
    >
      
        <NavBar numberOfItemsInCart={numberOfItemsInCart} />
        <ItemList />
        
    
    </CartContext.Provider>
  );
}

export default App;

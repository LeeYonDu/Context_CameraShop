import "./index.css";
import NavBar from "./components/navBar";
import { ItemList } from "./components/itemList";
import { useState } from "react";
import { CartContext } from "./context/CartContext";
import { Item } from "./components/item";

function App() {
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);

  return (
    <CartContext.Provider
      value={{ numberOfItemsInCart, setNumberOfItemsInCart }}
    >
      <div>
        <NavBar numberOfItemsInCart={numberOfItemsInCart} />
        <ItemList />
        
      </div>
    </CartContext.Provider>
  );
}

export default App;

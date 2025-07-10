import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Item = ({ name, price, image }) => {

    const {setNumberOfItemInCart} = useContext(CartContext);

  return (
    <div>
      <img src={image} alt={name} className="h-20 object-cover" />
      <p>{name}</p>
      <p>₩{price.toLocaleString()}</p>
      <button
        onClick={() => {
          setNumberOfItemInCart((prev) => prev + 1);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

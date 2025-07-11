import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Item = ({ name, price, image }) => {

    const { setNumberOfItemInCart } = useContext(CartContext);

  return (
    <div className="w-[200px] aspect-[4/5] bg-white flex justify-center items-center flex-col gap-2 rounded-[20px] px-2 py-2 ">
      <img src={image} alt={name} className="h-20 object-cover" />
      <p>{name}</p>
      <p>₩ {price.toLocaleString()}</p>
      <button
        className="border-1 border-gray-300 bg-gray-200/50"
        onClick={() => {
          setNumberOfItemInCart((prev) => prev + 1);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

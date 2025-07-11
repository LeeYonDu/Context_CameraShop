import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const Item = ({ id, name, price, image }) => {
  const navigate = useNavigate();
  const { setNumberOfItemsInCart } = useContext(CartContext);
  const handleClick = () => {
    const url = `/detail/${id}`;
    navigate(url);
  };
  return (
    <div
      className="w-[200px] aspect-[4/5] bg-white flex justify-center items-center flex-col gap-2 rounded-[20px] px-2 py-2 "
      onClick={handleClick}
    >
      <img src={image} alt={name} className="h-20 object-cover" />
      <p className="text-center">{name}</p>
      <p>₩ {price.toLocaleString()}</p>
      <button
        className="border-1 border-gray-300 bg-gray-200/50"
        onClick={(e) => {
          e.stopPropagation();
          setNumberOfItemsInCart((prev) => prev + 1);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const Item = ({ id, name, price, image }) => {
  const navigate = useNavigate();
  const { cartItems, setCartItems, setNumberOfItemsInCart } = useContext(CartContext);

  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  const addToCart = () => {
    if (!cartItems.includes(id)) {
      setCartItems([...cartItems, id]);
      setNumberOfItemsInCart((prev) => prev + 1); 
    }
  };


  return (
    <div
      className="w-[200px] aspect-[4/5] bg-white flex justify-center items-center flex-col gap-2 rounded-[20px] px-2 py-2"
      onClick={handleClick}
    >
      <img src={image} alt={name} className="h-20 object-cover" />
      <p className="text-center">{name}</p>
      <p>₩ {price.toLocaleString()}</p>
      <button
        className="border-1 border-black bg-gray-200 text-red-500 px-4 py-2 rounded-[10px] border border-transparent hover:border-red-500"
        onClick={(e) => {
          e.stopPropagation(); //-> 상세페이지 onclick으로 안 넘어가게 함
          addToCart();        
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

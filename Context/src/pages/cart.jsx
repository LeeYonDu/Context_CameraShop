import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { data } from "../data";

export default function Cart() {
  const { cartItems, setCartItems, setNumberOfItemsInCart } = useContext(CartContext);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((itemId) => itemId !== id);
    setCartItems(updatedCart);
    setNumberOfItemsInCart(updatedCart.length);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const itemsInCart = data.filter((item) => cartItems.includes(item.id));

  return (
    <div className="p-10 flex flex-col gap-10 items-center">
      <h1 className="text-3xl font-bold">장바구니</h1>
      {itemsInCart.length === 0 ? (
        <p>장바구니가 비어 있습니다.</p>
      ) : (
        <div className="grid grid-cols-3 gap-10">
          {itemsInCart.map((item) => (
            <div
              key={item.id}
              className="w-[200px] aspect-[4/5] bg-white shadow p-4 flex flex-col items-center rounded-xl"
            >
              <img src={item.image} alt={item.name} className="w-full h-auto" />
              <p className="text-xl font-semibold">{item.name}</p>
              <p>₩ {item.price.toLocaleString()}</p>
              <button
                onClick={() => removeItem(item.id)}
                className="mt-2 px-4 py-1 bg-red-500 text-white rounded"
              >
                삭제
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

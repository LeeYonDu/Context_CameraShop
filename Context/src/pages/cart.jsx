import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { data } from "../data";

export default function Cart() {
  const { cartItems, setCartItems, setNumberOfItemsInCart } =
    useContext(CartContext);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((itemId) => itemId !== id);
    setCartItems(updatedCart);
    setNumberOfItemsInCart(updatedCart.length);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const itemsInCart = data.filter((item) => cartItems.includes(item.id));

  return (
    <div className=" w-screen min-h-screen overflow-x-hidden">
    <div className="p-15 m-10 flex flex-col gap-10 items-center">
      <h1 className="text-4xl font-bold mt-[100px] mb-[20px]">
        🛒 장바구니
      </h1>

      <div className="flex items-center">
        {itemsInCart.length === 0 ? (
          <p className="text-2xl">장바구니가 비어 있습니다.</p>
        ) : (
          <div className="grid grid-cols-1 gap-7 bg-white/30 w-full p-20 rounded-[10px]">
            {itemsInCart.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow p-2 flex flex-row items-center justify-between gap-[200px] rounded-[10px]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[80px] h-auto"
                />
                <p className="text-xl text-center font-semibold">{item.name}</p>
                <p className="text-xl text-center">
                  ₩ {item.price.toLocaleString()}
                </p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="mr-2 flex items-center bg-white/0 border border-transparent hover:border-red-500 rounded"
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

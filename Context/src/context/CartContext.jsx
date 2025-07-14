import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    
  // 장바구니 아이템 수 불러오기
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(() => {
    const saved = localStorage.getItem("cartCount");
    const parsed = parseInt(saved, 10);
    return !isNaN(parsed) ? parsed : 0;
  });

  // 장바구니 아이템 목록
  const [cartItems, setCartItems] = useState(() => {
    const savedItems = localStorage.getItem("cartItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // 아이템 추가 함수
  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    setNumberOfItemsInCart((prev) => prev + 1);
  };

  // 아이템 수 로컬에 저장
  useEffect(() => {
    localStorage.setItem("cartCount", numberOfItemsInCart);
  }, [numberOfItemsInCart]);

  // 아이템 목록 로컬에 저장
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setNumberOfItemsInCart(cartItems.length);
    localStorage.setItem("cartCount", cartItems.length.toString());
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        numberOfItemsInCart,
        setNumberOfItemsInCart,
        cartItems,
        setCartItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

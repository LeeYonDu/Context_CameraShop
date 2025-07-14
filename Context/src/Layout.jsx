import { Outlet } from "react-router-dom";
import NavBar from "./components/navBar";
import { CartProvider } from "./context/CartContext"; 

export default function Layout() {
  return (
    <CartProvider>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </CartProvider>
  );
}

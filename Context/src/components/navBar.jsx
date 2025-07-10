
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";

export default function NavBar() {

    const {numberOfItemsInCart} = useContext(CartContext);
    

    return(
        <div className="w-screen h-24 px-10 fixed top-0 flex justify-between items-center bg-white border-b-2">
        
            <NavLink to="/"><img className="h-12" src="/svg/canon_logo.svg" alt="canon_logo" /></NavLink>
            <NavLink to="/cart"><img className="h-10" src="/svg/cart.png" alt="cart" />
            {numberOfItemsInCart}</NavLink>
        
        </div>
        );

    };

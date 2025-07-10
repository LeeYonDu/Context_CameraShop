import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Detail from "./pages/detail.jsx";
import Cart from "./pages/cart.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/cart/' element={<Cart/>}></Route>
      <Route path='/detail/:id' element={<Detail/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

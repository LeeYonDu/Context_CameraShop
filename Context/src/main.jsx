import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/detail";
import Cart from "./pages/cart";
import Layout from "./Layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      {/* 모든 경로에 Layout을 감싸고 그 안에 Outlet으로 렌더링됨 */}
      <Route path="/" element={<Layout />}>

        <Route index element={<App/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
);

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ShopContextProvider from "./context/shopContext";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import SearchBar from "./pages/SearchBar";

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          <Navbar />
          <SearchBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
          <Footer />
          <Copyright />
        </div>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;

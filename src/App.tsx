import { useEffect, useState } from "react";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import ProductItem from "./components/ProductItem";

function App() {
  
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<ProductItem />} />
        <Route path="/about" element={<About />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;

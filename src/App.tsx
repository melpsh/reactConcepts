import { useEffect, useState } from "react";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";

function App() {
  const [title, setTitle] = useState<string>("initial title");

  useEffect(() => {
    console.log(title);
    setTimeout(() => {
      setTitle("title is changed")
    }, 3000);
  }, []);
  
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products title={title} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

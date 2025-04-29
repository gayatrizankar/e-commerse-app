import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Shop from "./shop";
import Eachproduct from "./eachproduct";
import Blog from "./blog";
import About from "./about";
import Contact from "./contact";
import Cart from "./cart";
import Payment from "./payment";

const App = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState([]);

 
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/shopproducts.json");
      const data = await response.json();
      setAllProducts(data);
    };
    fetchProducts();
  }, []);


  const AddToCart = (product) => {
    alert("Product added to cart");
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home AddToCart={AddToCart} />} />
        <Route path="/shop" element={<Shop AddToCart={AddToCart}/>} />
        <Route path="/shop/:id" element={<Eachproduct  AddToCart={AddToCart} allproducts={allproducts} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default App;

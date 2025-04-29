import React, { useEffect, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

const Home = ({ AddToCart }) => {
  const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchNewProducts = async () => {
      try {
        const response = await fetch("/newproducts.json");
        const data = await response.json();
        setNewProducts(data);
      } catch (error) {
        console.error("Error fetching new products:", error);
      }
    };

    fetchProducts();
    fetchNewProducts();
  }, []);

  return (
    <div>
      <Header />
      <div className="h-screen w-screen bg-indigo-100 relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src="/images/hero4.png"
            alt="Hero section"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-30 left-10 text-left">
          <p className="font-bold text-xl">Trade-in-offer</p>
          <p className="text-3xl font-bold">Super value deals</p>
          <p className="text-5xl font-bold text-green-800">On all products</p>
          <p className="text-base mt-2">
            Save more with coupons & up to 70% off
          </p>
          <button
            onClick={() => navigate("/shop")}
            className="mt-4 px-6 py-2 bg-green-600 text-white text-lg rounded-lg shadow hover:bg-green-700"
          >
            Shop Now
          </button>
        </div>
      </div>

      <section className="flex items-center justify-center mt-10 flex-col">
        <p className="text-4xl font-bold font-serif">Featured Products</p>
        <p className="font-bold p-3">Summer collection New Modern Design</p>
      </section>

      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} AddToCart={AddToCart} />
        ))}
      </div>

      <section className="relative">
        <img className="h-[300px] object-cover w-full m-5" src="/images/b2.jpg" alt="" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
          <p className="text-xl font-bold">Repair Services</p>
          <p className="text-3xl font-bold">
            Up to <span className="text-red-400">70% Off</span> - All t-shirts and Accessories
          </p>
          <button className="h-[50px] w-[150px] rounded-xl bg-white text-black">Explore More</button>
        </div>
      </section>

      <section className="flex items-center justify-center mt-10 flex-col">
        <p className="text-4xl font-bold font-serif">New Arrival</p>
        <p className="font-bold p-3">Summer Collection New Model Design</p>
      </section>

      <div className="flex flex-wrap justify-center">
        {newProducts.map((product) => (
          <ProductCard key={product.id} product={product} AddToCart={AddToCart} />
        ))}
      </div>

      <SignupSection />
      <Footer />
    </div>
  );
};

const ProductCard = ({ product, AddToCart }) => (
  <div className="hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-center h-[500px] w-[350px] border-2 border-gray-200 m-2 p-5">
    <img className="h-[450px] w-[300px] object-cover" src={product.image} alt={product.name} />
    <p className="pl-2">{product.company}</p>
    <p className="text-xl font-bold pl-2">{product.name}</p>
    <p className="text-xl font-bold pl-2">⭐ {product.rating}</p>
    <div className="flex justify-between">
      <p className="text-2xl pl-2 font-bold">${product.price}</p>
      <button onClick={() => AddToCart(product)} className="h-[40px] w-[100px] rounded-xl text-green-500 bg-green-100 flex items-center justify-center cursor-pointer">
        Add to Cart
      </button>
    </div>
  </div>
);

const SignupSection = () => (
  <div className="h-[150px] w-full m-5 bg-blue-900 flex gap-10 items-center justify-center">
    <div>
      <p className="text-2xl font-bold text-white">Signup For New Seller</p>
      <p className="font-bold text-sm">
        Get Email updates about our latest shop and <span className="text-yellow-500">Special offers</span>
      </p>
    </div>
    <div className="flex">
      <input className="p-2 h-[40px] w-[200px] bg-white" type="text" placeholder="Enter your email" />
      <button className="h-[40px] w-[100px] bg-green-800 text-white font-bold cursor-pointer">Sign Up</button>
    </div>
  </div>
);

export default Home;

import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";

const Shop = ({AddToCart}) => {
  const [allproducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
     
        const response = await fetch("/shopproducts.json"); 
        const data = await response.json();
        setAllProducts(data);
        console.log(data);
    };

    fetchProducts();
  }, []); 
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="relative">
        <img src="/images/b1.jpg" alt="Banner" className="w-full" />
        <div className="absolute flex flex-col items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="text-5xl text-white font-bold">#stayhome</p>
          <p className="text-md text-white">
            Save More with Coupons & Upto 70% Off
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {allproducts.length > 0 ? (
          allproducts.map((product) => (
            <div
              key={product.id} onClick={() => navigate(`/shop/${product.id}`)}
              className="hover:shadow-2xl transition-shadow duration-300 cursor-pointer flex flex-col justify-center h-[500px] w-[350px] border-2 border-gray-200 m-2 p-5"
            >
              <img
                className="h-[450px] w-[300px] object-cover"
                src={product.image}
                alt={product.name}
              />
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
          ))
        ) : (
          <p className="text-center text-xl p-5">Loading products...</p>
        )}
      </div>
      <div className="h-[150px] w-full m-5 bg-blue-900 flex gap-10 items-center justify-center">
        <div>
          <p className="text-2xl font-bold text-white">Signup For New Seller</p>
          <p className="font-bold text-sm">Get Email updates about our latest shop and <span className="text-yellow-500">Special offers</span></p>
        </div>
        <div className="flex">
        <input className="p-2 h-[40px] w-[200px] bg-white flex items-center justify-center " type="text"  placeholder="Enter you email"/>
        <button className="h-[40px] w-[100px] bg-green-800 flex items-center justify-center font-bold text-white cursor-pointer">Sign Up</button>
        </div>
      </div>
      <div className="mb-5 flex flex-col items-center justify-center">
<Footer/> 
<p className='text-sm pt-[150px]'>2021@-HTML CSS E-commerse Template</p>
      </div>
    </div>

  );
};

export default Shop;

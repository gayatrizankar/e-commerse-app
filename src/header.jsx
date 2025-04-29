import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="h-[60px] w-screen bg-indigo-100 text-bold flex gap-[550px] items-center drop-shadow-md">
        <div>
          <p className="text-2xl font-bold text-indigo-400 font-serif p-5">Loomsy</p>
        </div>
        <div className="flex gap-10">
          <p onClick={() => navigate('/')} className="text-xl font-bold text-black cursor-pointer hover:underline">Home</p>
          <p onClick={() => navigate('/shop')} className="text-xl font-bold text-black cursor-pointer hover:underline">Shop</p>
          <p onClick={()=>navigate('/blog')} className="text-xl font-bold text-black cursor-pointer hover:underline">Blog</p>
          <p onClick={()=>navigate('/about')} className="text-xl font-bold text-black cursor-pointer hover:underline">About</p>
          <p onClick={()=>navigate('/contact')} className="text-xl font-bold text-black cursor-pointer hover:underline">Contact</p>
          <p  onClick={()=>navigate('/cart')} className="text-xl font-bold text-black cursor-pointer hover:underline"><i class="fa-solid fa-cart-shopping"></i></p>
        </div>
      </div>
    </div>
  );
};

export default Header;

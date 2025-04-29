import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
         const response = await fetch("/eachblog.json");
        const data = await response.json();
        setBlog(data);
      };

    fetchBlog();
  }, []);

  return (
    <div>
      <Header />
      
      <div className="relative">
        <img
          className="h-[300px] w-full object-cover"
          src="/images/b19.jpg"
          alt="Blog Header"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-3xl font-bold text-white">#ReadMore</p>
          <p className="text-sm text-white">
            Read all case studies about our products!
          </p>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl mb-4 font-bold font-serif flex gap-5 flex-col">Latest Blogs</h2>
       <div className="flex gap-10 flex-col">
        {blog.map((blog) => (
          <div className="h-[300px] w-full flex  items-center justify-center">
          <img className="h-[250px] w-[350px] object-cover m-5" src={blog.image} alt="" />
          <div className="flex flex-col p-5">
            <p className="text-2xl font-bold font-serif">{blog.name}</p>
            <p className="text-xl font-serif text-gray-500 " >{blog.description}</p>
            <p className="text-2xl font-serif font-bold pt-5 cursor-pointer hover:text-green-900">Continue Reading-----</p>
          </div>

        </div>
        ))}
        
       </div>
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
      <div>
        <Footer />
      </div>
    </div>
  )
};

export default Blog;

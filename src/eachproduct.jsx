import React from 'react'
import { useParams } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Eachproduct = ({allproducts,AddToCart}) => {
    const { id } = useParams();
    const product = allproducts?.find((m) => m.id === parseInt(id));
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div className='flex items-center justify-center'>
            <div>
                <img className='h-[500px] w-[300px] object-cover m-10' src={product.image} alt="" />
            </div>
            <div>
                <p className='p-3 text-md font-bold pl-5'>Home / T-Shirt</p>
                <p className='text-2xl font-bold pl-5'>{product.name}</p>
                <p className='text-3xl font-bold pl-5 text-green-700'>${product.price}</p>
                <p className='p-5 pb-3 font-bold '>Select size
                <div class="relative w-48">
  <select class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
    <option value="S">Small (S)</option>
    <option value="M">Medium (M)</option>
    <option value="L">Large (L)</option>
    <option value="XL">Extra Large (XL)</option>
  </select>
</div>
                </p>
                <p className='p-5 pt-0 font-bold'>Quantity
                <div class="relative w-48">
  <select class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
</div>
                    
                </p>
                <p className='pl-5 font-bold text-xl '>Poduct Details</p>
                <p className='w-[500px] flex text-md'>{product.description}</p>
                <button onClick={() => AddToCart(product)} className=' h-[40px] w-[200px] bg-green-700 text-xl font-bold items-center justify-center m-5'>Add To Cart</button>

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
            <Footer/>
        </div>
    </div>
  )
}

export default Eachproduct

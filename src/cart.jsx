import React from 'react';
import Header from './header';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const removeFromCart = (id) => {
    const show = window.confirm('Are you sure you want to remove this item?');
    
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Header />
      <div className='relative'>
        <img className='h-[300px] w-full object-cover' src='/images/banner.png' alt='Banner' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
          <p className='text-4xl text-white font-bold'>#Cart</p>
          <p className='text-white'>Add your coupons & Save up to 75%</p>
        </div>
      </div>

      <div className='mt-10 overflow-x-auto'>
        <table className='w-full border-collapse border border-gray-300 text-center'>
          <thead className='bg-gray-200'>
            <tr>
              <th className='p-3 border border-gray-300'>REMOVE</th>
              <th className='p-3 border border-gray-300'>IMAGE</th>
              <th className='p-3 border border-gray-300'>PRODUCT</th>
              <th className='p-3 border border-gray-300'>PRICE</th>
              <th className='p-3 border border-gray-300'>QUANTITY</th>
              <th className='p-3 border border-gray-300'>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((item) => (
                <tr key={item.id} className='border border-gray-300'>
                  <td className='p-3 border border-gray-300'>
                    <button onClick={() => removeFromCart(item.id)} className='h-[40px] w-[100px] rounded-xl font-bold text-white bg-red-400'>
                      REMOVE
                    </button>
                  </td>
                  <td className='p-3 border border-gray-300'>
                    <img className='h-[100px] w-[100px]' src={item.image} alt={item.name} />
                  </td>
                  <td className='p-3 border border-gray-300 font-bold text-xl'>{item.name}</td>
                  <td className='p-3 border border-gray-300 font-bold text-xl'>${item.price}</td>
                  <td className='p-3 border border-gray-300 text-xl'>{item.quantity}</td>
                  <td className='p-3 border border-gray-300 font-bold text-xl'>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-5 text-center text-xl">Your cart is empty</td> 
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center gap-10 mt-10 p-5'>
        <div className='w-full md:w-auto'>
          <p className='text-xl font-bold mb-3'>Apply Coupons</p>
          <div className='flex flex-col md:flex-row'>
            <input className='h-[40px] w-full md:w-[300px] border-2 border-gray-300 p-2' type="text" placeholder="Enter coupon code" />
            <button className='h-[40px] w-full md:w-[100px] bg-green-800 text-white font-bold mt-2 md:mt-0'>Apply</button>
          </div>
        </div>

        <div className='h-auto w-full md:w-[450px] border-2 border-gray-300 p-5'>
          <p className='text-2xl font-bold p-2'>Cart Total</p>
          <div className='flex flex-col gap-2'>
            <div className='flex justify-between'>
              <p>Cart subtotal</p>
              <p>${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</p>
            </div>
            <div className='flex justify-between'>
              <p>Shipping </p>
              <p>Free</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-xl font-bold'>Total</p>
              <p className='text-xl font-bold'>${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</p>
            </div>
            <button onClick={() => navigate('/payment')} className='h-[40px] mt-3 w-full md:w-[200px] bg-green-800 text-white font-bold rounded-xl cursor-pointer'>
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='h-[100px] w-screen flex gap-20 p-5 mt-5'>
        <div>
            <div className='text-2xl font-bold text-indigo-400 font-serif p-5'>Loomsy</div>
            <div className='text-xl font-bold'>Contact</div>
            <div className='flex '>
                <p className='font-bold'>Address:</p>
                <p>123 Maple Street, Suite 456
Springfield, IL 62701
USA</p> </div>
            <div className='flex'>
                <p className='font-bold'>Phone:</p>
                <p>(555) 123-4567</p>
            </div>
            <div className='flex'>
                <p className='font-bold'>Hours:</p>
                <p>Mon-Fri, 9am-6pm</p>
            </div>
            <div className='font-bold'>Follow Us</div>
            
        </div>
        <div>
            <p className='text-xl font-bold'>About</p>
            <p>About us </p>
            <p>Delivery Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Contact us</p>
        </div>
        <div>
            <p className='text-xl font-bold'>My Account</p>
            <p>Sign in </p>
            <p>View Cart</p>
            <p>My Wishilist</p>
            <p>Track My Order</p>
            <p>Help</p>
        </div>
        <div>
            <p className='text-xl font-bold'>Install App</p>
            <p>From app store or google store</p>
            <p>Secured payment gateways</p>
           <div className='flex gap-5'>
            <a href="https://www.apple.com/app-store/"><img  className='h-[40px] w-[150px] rounded-xl object-cover m-3 ml-0 mr-0' src="https://digitopoly.files.wordpress.com/2016/06/app-store-logo.png" alt="" /></a>
           <a href="https://play.google.com/store/games?device=windows"> <img className='h-[60px] w-[150px] rounded-xl object-cover' src="https://www.pngall.com/wp-content/uploads/10/Google-Play-PNG-Clipart.png" alt="" />
           </a>
           </div>
           <div className='flex flex-col'>
            <p>Secured Payment through</p>
           <div className='flex gap-5'>
           <p><img  className='h-[50px] w-[100px] object-contain' src="https://th.bing.com/th/id/OIP.vDMTOrQGXsCRn-XQj-IMuAHaCb?rs=1&pid=ImgDetMain" alt="" /></p>
            <p><img className='h-[50px] w-[100px] object-contain'  src="https://th.bing.com/th/id/OIP.J55-roM7PJPNOUNSxcqRKQHaDO?rs=1&pid=ImgDetMain" alt="" /></p>
            <p><img  className='h-[50px] w-[100px] object-contain' src="https://www.freepnglogos.com/uploads/paypal-logo-png-29.png" alt="" /></p>
            <p><img className='h-[50px] w-[100px] object-contain'  src="https://th.bing.com/th/id/OIP.OxvYhm9rOQ5YaPNrn4vhEgHaDt?rs=1&pid=ImgDetMain" alt="" /></p>
           </div>
           </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Footer
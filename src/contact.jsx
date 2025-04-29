import React from 'react'
import Header from './header'
import Footer from './footer'

const Contact = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div className='relative'>
            <img className='h-[300px] w-full object-cover' src="\images\banner.png" alt="" />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <p className='text-4xl text-white font-bold'>#Let's_talk</p>
                <p className='text-white'>LEAVE A MESSAGE,We will low to hear from you!</p>
            </div>
        </div>
        <div className='flex items-center justify-center gap-10 p-10'>
            <div className='flex flex-col '>
                <p className='text-sm pl-2'>GET IN TOUCH</p>
                <p className='text-2xl font-bold p-2 pb-0'>Visit One of Our Agency Location</p>
                <p className='text-2xl font-bold p-2 pt-0'>or contact us today</p>
                <p className='pl-2'>Head Office</p>
                <p><span className='text-md font-bold pl-2'>Email:</span>contact@gmail.com</p>
                <p><span className='text-md font-bold pl-2'>Phone no.:</span>(344)-2344-34</p>
                <p><span className='text-md font-bold pl-2'>Address</span> 123,Main Street,Los Angeles,CA</p>
                <p><span className='text-md font-bold pl-2'>Timing :</span>Monday to Saturday : 4:00 to 7:00</p>
            </div>
            <div>
                <img className='h-[400px] w-[500px] rounded-xl object-cover' src="https://images.squarespace-cdn.com/content/v1/529fc0c0e4b088b079c3fb6d/1579127565255-Q9124SYDZ230UWFYNQIZ/ke17ZwdGBToddI8pDm48kDEVP3Z9Ou7Y6Do0L5-Fle97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbH3gqKloCyvHPNGYL7BwztT5fWHxj5v7IIdELp-X66uOpYghpI-Ha_TwZsqqmJXng/Screen+Shot+2020-01-15+at+5.05.36+PM.png" alt="" />
            </div>
        </div>
        <div className='h-[600px] w-[1000px] p-2 border-2 m-auto border-gray-200 flex items-center justify-center'>
            <div className='flex flex-col gap-2'>
                <p>LEAVE A MESSAGE</p>
                <p className='text-xl font-bold p-1 m-2'>We love to hear from you</p>
                <input  className='h-[40px] w-[400px] border-2 border-gray-200 p-1 m-2' placeholder='Your Name' type="text" name="" id="" />
                <input className='h-[40px] w-[400px] border-2 border-gray-200 p-1 m-2'  type="text" placeholder='Email' name="" id="" />
                <input className='h-[40px] w-[400px] border-2 border-gray-200 p-1 m-2'  type="text" placeholder='Subject' name="" id="" />
                <textarea className='h-[100px] w-[400px] border-2 border-gray-200 p-1 m-2' name="" placeholder='Message' id=""></textarea>
                <button className='h-[40px] w-[100px] bg-green-800 text-white font-bold rounded-xl cursor-pointer'>Submit</button>
            </div>
            <div>
                <div className='h-[100px] w-[300px] flex items-center justify-center'>
                    <img className='h-[60px] w-[60px] ' src="\images\1.png" alt="" />
                    <div className='flex flex-col '>
                        <p className='text-sm text-gray-500'>Senior Marketing Manager</p>
                        <p className='text-sm text-gray-500'>phone no:12345546</p>
                        <p className='text-sm text-gray-500'>email:contact@gmail.com</p>
                    </div>
                </div>
                <div className='h-[100px] w-[300px] flex items-center justify-center'>
                    <img className='h-[60px] w-[60px] '  src="\images\2.png" alt="" />
                    <div className='flex flex-col '>
                        <p className='text-sm text-gray-500'>Senior Marketing Manager</p>
                        <p className='text-sm text-gray-500'>phone no:12345546</p>
                        <p className='text-sm text-gray-500'>email:contact@gmail.com</p>
                    </div>
                </div>
                <div className='h-[100px] w-[300px] flex items-center justify-center'>
                    <img className='h-[60px] w-[60px] '  src="\images\3.png" alt="" />
                    <div className='flex flex-col '>
                        <p className='text-sm text-gray-500'>Senior Marketing Manager</p>
                        <p className='text-sm text-gray-500'>phone no:12345546</p>
                        <p className='text-sm text-gray-500'>email:contact@gmail.com</p>
                    </div>
                </div>

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

export default Contact

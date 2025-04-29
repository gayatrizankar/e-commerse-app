import React from 'react'
import Header from './header'
import Footer from './footer'

const About = () => {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <div className='relative'>
            <img className='h-[300px] w-full object-cover' src="\images\banner.png" alt="" />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <p className='text-4xl text-white font-bold'>#Know Us</p>
                <p className='text-white'>get to know about us</p>
            </div>
        </div>
        <div className='flex items-center justify-center gap-10 p-10'>
            <img className='h-[350px] w-[500px] object-cover' src="\images\a6.jpg" alt="" />
            <div className='flex flex-col gap-5'>
            <p className='text-3xl font-bold '>Who We Are?</p>
           <p className='text-md '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ipsam iure, incidunt qui facere ut aspernatur illo perspiciatis debitis sint error architecto laboriosam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos enim asperiores architecto amet blanditiis, voluptatibus adipisci, saepe, fugit itaque sapiente facere deleniti quisquam.</p>
           <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quam voluptatibus nesciunt amet!</p>
           </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-10 p-10'>
            <p className='text-5xl font-bold font-sans'>Download our <a  className='text-blue-700 underline cursor-pointer' href="https://play.google.com/store/games?device=windows">App</a> </p>
            <video autoPlay muted playsInline >
            <source src="/videos/videoplayback.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

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

export default About

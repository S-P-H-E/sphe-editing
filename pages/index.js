import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import { HiMenu } from 'react-icons/hi';
import {FaTiktok} from 'react-icons/fa'
import {BiDownArrowAlt} from 'react-icons/bi'
import {AiFillInstagram} from 'react-icons/ai'

import Hero from '@/public/assets/images/heroIMG.png'
import Profile from '@/public/assets/images/profile.png'
import Image from 'next/image';
import Plan from '@/components/Plan';

export default function Home() {
  const editorRef = useRef(null);
  const plansRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuLinkClick = (path) => {
    router.push(path);
    setIsMenuOpen(false);
  };

  const scrollToEditor = () => {
    editorRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToPlans = () => {
    plansRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <Head>
        <title>S P H E</title>
        <meta name="description" content="Sphe Editig Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <div className='text-[#EBEBEB] w-full border-b-[1px] border-[#3E3E3E] px-10 py-6 flex justify-between items-center'>
        <h1 className='text-xl font-bold'>S P H E</h1>

        <div className='flex items-center gap-8'>
          {/* Mobile Menu */}
          <button className='p-2 hover:bg-[#2c2c2c] rounded md:hidden' onClick={handleMenuToggle}>
            <HiMenu size={24} />
          </button>

          {/* Desktop Menu */}
          <div className='hidden md:flex gap-8'>
            <button className='hover:underline'>Home</button>
            <button className='hover:underline' onClick={scrollToEditor}>Editor</button>
            <button className='hover:underline' onClick={scrollToPlans}>Plans</button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`text-black fixed top-0 left-0 right-0 bottom-0 z-10 bg-white transition-all duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className='p-4 flex flex-col gap-3 justify-center h-screen'>
            <button className='block w-full py-2 text-center hover:bg-gray-200' onClick={() => handleMenuLinkClick('/')}>Home</button>
            <button className='block w-full py-2 text-center hover:bg-gray-200' onClick={scrollToEditor}>Editor</button>
            <button className='block w-full py-2 text-center hover:bg-gray-200' onClick={scrollToPlans}>Plans</button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className='text-[#EBEBEB] flex flex-col justify-center items-center py-10'>
          <FaTiktok className='m-4' size={30}/>
          <p className='text-sm md:text-xl font-medium'>2.6 Million + Views </p>
          <h1 className='text-5xl md:text-9xl font-medium py-4 text-center'>Get trendy <br/> high-quality edits</h1>
          <button onClick={scrollToPlans} className='bg-[#0F1115] flex justify-center items-center py-3 px-6 my-6 md:my-20 rounded-lg text-[#C5C5C6] font-medium transition-all scale-110 hover:-translate-y-3'>SCROLL TO LEARN MORE
            <BiDownArrowAlt size={20} className='ml-2 text-[#545557]'/>
          </button>
          <Image src={Hero} className='w-[350px] md:w-[600px]'/>
      </div>

      {/* Editor */}
      <div ref={editorRef} className='flex flex-col justify-center items-center text-white'>
        <h1 className='font-medium text-4xl m-12'>Meet the editor</h1>
        <Image src={Profile} className='w-[150px]'/>
        <h2 className='text-2xl m-5 text-[#757575] font-medium'>Sphe</h2>
        <div className='m-2 flex gap-5'>
          <FaTiktok onClick={() => {event.preventDefault();window.open('https://www.tiktok.com/@empire_cord', "_blank");}} size={50} className='border rounded-lg p-3 transition-all hover:scale-100 md:hover:scale-110'/>
          <AiFillInstagram onClick={() => {event.preventDefault();window.open('https://www.instagram.com/sphe.exe', "_blank");}} size={50} className='border rounded-lg p-3 transition-all hover:scale-100 md:hover:scale-110'/>
        </div>
      </div>

      {/* Plans */}
      <div ref={plansRef} className='text-white flex flex-col justify-center items-center mt-28'>
        <h1 className='text-4xl font-medium my-10'>Plans</h1>
        <div className='flex flex-col gap-1 md:gap-10 md:flex-row'>
          <Plan 
          price={'39'}
          recurrence={'once-off'}
          option1={'30 Second Edit'}
          option2={'Pre Selected Sound'}
          option3={'72 Hour Delivery'}
          option4={'Pre Selected Editing Style'}
          />
          <Plan 
          price={'99'}
          recurrence={'once-off'}
          option1={'Custom Duration'}
          option2={'Pick Your Sound'}
          option3={'24 Hour Delivery'}
          option4={'Custom Editing Style'}
          />
        </div>
      </div>

      {/* Store */}
      <div className='flex flex-col justify-center items-center text-white pt-12 md:pt-20 border-t-[1px] border-[#3E3E3E]'>
        <h1 className='text-3xl md:text-4xl font-medium text-center'>Want presets, overlays and templates?</h1>
        <button className='my-9 md:my-16 py-2 px-4 rounded-lg bg-white text-black font-medium transition-all hover:scale-110' onClick={() => handleMenuLinkClick('/store')}>View My Store</button>
      </div>

      {/* Footer */}
      <div className='text-[#EBEBEB] w-full border-t-[1px] border-[#3E3E3E] px-10 py-5 flex justify-center items-center'>
        <h1 className='text-md text-[#3E3E3E]'>© 2023 All rights reserved.</h1>
      </div>
    </>
  )
}

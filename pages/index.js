import Head from 'next/head'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import { HiMenu } from 'react-icons/hi';
import {FaTiktok} from 'react-icons/fa'
import {BiDownArrowAlt} from 'react-icons/bi'
import {AiFillInstagram} from 'react-icons/ai'
import {IoIosClose} from 'react-icons/io'

import Hero from '@/public/assets/images/heroIMG.png'
import Profile from '@/public/assets/images/profile.png'
import Image from 'next/image';
import Plan from '@/components/Plans';
import Showreel from '@/components/Showreel';

export default function Home() {
  const editorRef = useRef(null);
  const resultsRef = useRef(null);
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

  const scrollToResults = () => {
    resultsRef.current.scrollIntoView({ behavior: 'smooth' });
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
            <button className='hover:underline' onClick={scrollToResults}>Results</button>
            <button className='hover:underline' onClick={scrollToPlans}>Plans</button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`text-white fixed top-0 left-0 right-0 bottom-0 z-10 bg-black transition-all duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className='p-4 flex flex-col h-screen justify-center'>
            <div className='flex flex-col gap-3'>
              <button className='block w-full py-2 text-center border rounded-full' onClick={() => handleMenuLinkClick('/')}>Home</button>
              <button className='block w-full py-2 text-center border rounded-full' onClick={scrollToEditor}>Editor</button>
              <button className='block w-full py-2 text-center border rounded-full' onClick={scrollToResults}>Results</button>
              <button className='block w-full py-2 text-center border rounded-full' onClick={scrollToPlans}>Plans</button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className='text-[#EBEBEB] flex flex-col justify-center items-center py-10'>
          {/* <FaTiktok className='m-4' size={30}/> */}
          <div className='text-sm md:text-xl font-medium uppercase bg-gradient-to-r from-[#ECEDEC] to-[#8F9090] rounded-full'>
            <div className='bg-[#050505] px-3 m-[0.10rem] rounded-full'>
              <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#ECEDEC] to-[#8F9090]'>
                10% off your first purchase
              </p>
            </div>
          </div>
          <h1 className='text-5xl md:text-9xl font-medium py-7 md:py-9 text-center'>Get trendy <br/> high-quality edits</h1>
          <button onClick={scrollToResults} className='bg-[#0F1115] flex justify-center items-center py-3 px-6 my-6 md:my-20 rounded-lg text-[#C5C5C6] font-medium transition-all scale-110 hover:-translate-y-3 uppercase'>Scroll to learn more
            <BiDownArrowAlt size={20} className='ml-2 text-[#545557]'/>
          </button>
          <Image src={Hero} className='w-[350px] md:w-[600px]'/>
          {/* <Showreel /> */}
      </div>
      
      {/* Portfolio */}
      {/* <div className='flex flex-col justify-center items-center text-white'>
        <h1 className='font-medium text-4xl m-12'>The Edits</h1>
      </div> */}

      {/* Editor */}
      <div ref={editorRef} className='flex flex-col justify-center items-center text-white'>
        <h1 className='font-medium text-4xl m-12'>Meet the editor</h1>
        <Image src={Profile} className='w-[150px]'/>
        <div className='text-sm md:text-xl font-medium uppercase -gradient-to-r from-[#ECEDEC] to-[#8F9090] rounded-full mt-5'>
          <div className='bg-[#050505] px-3 m-[0.10rem] rounded-full'>
            <p className='text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#ECEDEC] to-[#8F9090]'>
              Sphe
            </p>
          </div>
        </div>
        {/* <p className='max-w-[250px] text-center m-4 p-2 border rounded-lg'>
          I have 2 years of editing experience, the editing softwares I use are <mark className='bg-transparent text-white underline'>After Effects</mark> and <mark className='bg-transparent text-white underline'>Premier Pro</mark>.
        </p> */}
        <div className='m-2 flex gap-5'>
          <FaTiktok onClick={() => {event.preventDefault();window.open('https://www.tiktok.com/@sphe.exe', "_blank");}} size={50} className='border text-white rounded-lg p-3 transition-all hover:scale-100 md:hover:scale-110'/>
          <AiFillInstagram onClick={() => {event.preventDefault();window.open('https://www.instagram.com/sphe.exe', "_blank");}} size={50} className='border text-white rounded-lg p-3 transition-all hover:scale-100 md:hover:scale-110'/>
        </div>
      </div>

      {/* Results */}
      <div ref={resultsRef} className='flex flex-col justify-center items-center text-white mt-28'>
        <h1 className='font-medium text-4xl m-12'>Results</h1>
        <div className='flex flex-col gap-7 md:gap-0 md:flex-row justify-between w-full max-w-[250px] md:max-w-[600px]'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[3rem] text-[#EB603F]'>3M +</h1>
            <p className='border px-3 rounded-full'>Views Generated</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[3rem] text-[#EB603F]'>500k +</h1>
            <p className='border px-3 rounded-full'>Total Video Likes</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[3rem] text-[#EB603F]'>19k+</h1>
            <p className='border px-3 rounded-full'>Fanbase</p>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div ref={plansRef} className='text-white flex flex-col justify-center items-center mt-28'>
        <h1 className='text-4xl font-medium my-10'>Plans</h1>
        <div className='flex flex-col gap-1 md:gap-10 md:flex-row'>
          <Plan 
            before={''}
            price={'29'}
            recurrence={'once-off'}
            option1={'30 Second Edit'}
            option2={'Pre Selected Sound'}
            option3={'72 Hour Delivery'}
            option4={'Pre Selected Editing Style'}
          />
          <Plan
            before={''}
            price={'199'}
            recurrence={'once-off'}
            option1={'Custom Duration'}
            option2={'Pick Your Sound'}
            option3={'6 Hour Delivery'}
            option4={'Custom Editing Style'}
          />
        </div>
      </div>

      {/* Discord */}
      {/* <div className='flex flex-col justify-center items-center text-white pt-12 md:pt-20 border-t border-[#3E3E3E]'>
        <h1 className='text-3xl m-2 md:text-4xl font-medium text-center'>Join my community, get FREE editing resources.</h1>
        <button className='my-9 md:my-12 py-2 px-4 rounded-lg bg-white text-black font-medium' onClick={() => {event.preventDefault();window.open('https://discord.gg/PBpeEV8cmC', "_blank");}}>
          Join my discord
        </button>
      </div> */}

      {/* Footer */}
      <div className='text-[#EBEBEB] w-full border-t-[1px] border-[#3E3E3E] px-10 py-5 flex justify-center items-center'>
        <h1 className='text-md text-[#3E3E3E]'>© 2023 All rights reserved.</h1>
      </div>
    </>
  )
}

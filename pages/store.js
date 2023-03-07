import Head from "next/head";
import { useState } from "react";
import {FiSearch} from 'react-icons/fi'
import { useRouter } from 'next/router';

import PsuedoProjectFile from "../public/assets/images/store/PsuedoPF.png";

const items = [
  { 
    id: 1, 
    name: '"Psuedo" Project file',
    price: "4.99",
    image: 'https://images.payhip.com/o_1gqddf7j012e21si81frba16iu610.png?width=300'
  },
  { 
    id: 2, 
    name: '"September" Project file',
    price: "4.99",
    image: 'https://images.payhip.com/o_1gounc08kp10143e1m710nl13e010.png?width=300'
  },
  { 
    id: 4, 
    name: '"Escape plan remix" Project file',
    price: "1.99",
    image: 'https://images.payhip.com/o_1fshqinn91r3q14r51778jcc11pfm.jpg?width=300'
  },
  { 
    id: 4, 
    name: '"Darkness" Project file',
    price: "4.99",
    image: 'https://images.payhip.com/o_1g4fo9amsgbu1geb1pbat5pl7kr.jpg?width=300'
  },
];

export default function Store() {
  // Set Store Status
  const [storeStatus, setStoreStatus] = useState(false);

  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  // filter the items based on the search query
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const router = useRouter();

  const handleMenuToggle = () => {
  };

  const handleMenuLinkClick = (path) => {
    router.push(path);
  };

  return (
    <>
      <Head>
        <title>S P H E | Store</title>
        <meta name="description" content="Sphe Editing Store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-[#EBEBEB] w-full border-b-[1px] border-[#3E3E3E] px-10 py-5 flex justify-between items-center">
        <h1 className='text-xl font-bold text-white transition-all hover:scale-105 cursor-pointer' onClick={() => handleMenuLinkClick('/')} >S P H E</h1>
        <div className="border border-gray-300 bg-black px-2 py-1 rounded-full flex justify-center items-center gap-1">
            <FiSearch />
            <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleSearch}
            className="bg-transparent border border-transparent focus:border-transparent focus:outline-none"
            />
        </div>
      </div>


      {/* if store status is true then display contents after '{/* display the filtered items or "no items found" message */}
      {storeStatus ? (
        <div className="p-4 text-white">
          <div>
            <h1 className="text-3xl mt-32">Explore Gallery</h1>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start items-start">
            {filteredItems.length === 0 ? (
              <div className="bg-[#050505] flex justify-center items-center w-full">
                <p className="text-2xl text-[#555555]">No items found</p>
              </div>
            ) : (
              filteredItems.map((item) => (
                <div key={item.id} className="p-4 mr-5 my-2 border border-[#3F4044] rounded-lg md:w-1/6 h-[450px] flex flex-col justify-between">
                  <img src={item.image} alt={item.name} className="rounded-xl" />
                  <p className="my-3">Perky.mp4</p>
                  <p className="my-2 text-xl font-medium">{item.name}</p>
                  <p className="flex text-black bg-[#FFD19F] rounded-full py-2 px-4 w-fit">${item.price}</p>
                  <button className='bg-white rounded-lg text-black font-medium flex justify-center items-center py-2 mt-6 w-full'>Buy</button>
                </div>
              ))
            )}
          </div>
        </div>
      ) : (
        <div className="text-white flex justify-center items-center m-10">
          <div className="bg-[#0F1115] rounded-lg border border-[#3F4044] flex flex-col justify-center items-center">
            <h1 className="text-3xl mx-10 mt-10">Store is currently unavailable</h1>
            <button className='bg-white rounded-lg text-black font-medium flex justify-center items-center py-2 w-[200px] m-10' onClick={() => handleMenuLinkClick('/')}>Home</button>
          </div>
        </div>
      )}

    </>
  );
}

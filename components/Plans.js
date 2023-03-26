import {BsFillCheckCircleFill} from 'react-icons/bs'
import {FaPaypal} from 'react-icons/fa'

export default function Plan({before, price, recurrence, option1, option2, option3, option4}) {
  const email = 'sphe.g.personal@gmail.com';

  const emailBTN = () => {
      window.location.href = `mailto:${email}`;
  };
  
    return (
        <div className='bg-[#0F1115] w-[300px] md:w-[400px] flex flex-col justify-start items-start rounded-lg border border-[#3F4044] p-[24px] mb-20'>
          <mark className='bg-transparent text-[1rem] text-[#8E8E90] uppercase'>{before}</mark>
          <h1 className='text-[3rem] font-medium flex justify-center items-center'> ${price}
            <h1 className='text-[1.6rem] text-[#727375]'>/{recurrence}</h1>
          </h1>
          <div className='flex mt-5 gap-2 justify-center items-center'>
            <BsFillCheckCircleFill />
            <h1 className='text-[#8E8E90] font-medium'>{option1}</h1>
          </div>
          <div className='flex mt-5 gap-2 justify-center items-center'>
            <BsFillCheckCircleFill />
            <h1 className='text-[#8E8E90] font-medium'>{option2}</h1>
          </div>
          <div className='flex mt-5 gap-2 justify-center items-center'>
            <BsFillCheckCircleFill />
            <h1 className='text-[#8E8E90] font-medium'>{option3}</h1>
          </div>
          <div className='flex mt-5 gap-2 justify-center items-center'>
            <BsFillCheckCircleFill />
            <h1 className='text-[#8E8E90] font-medium'>{option4}</h1>
          </div>

          <div className='w-full flex'>
            <h1 onClick={emailBTN} className='bg-white rounded-lg text-black font-medium flex justify-center items-center py-2 mt-6 mx-1 w-full cursor-pointer'>Purchase<mark className='mx-1 bg-transparent text-[#5C5C5D] font-light'>${price}</mark></h1>
            {/* <FaPaypal size={40} className='bg-white rounded-lg text-black font-medium flex justify-center items-center py-2 mt-6 mx-1 w-20'/> */}
          </div>
        </div>
    )
}
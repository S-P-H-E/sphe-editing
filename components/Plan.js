import {BsFillCheckCircleFill} from 'react-icons/bs'

export default function Plan({price, recurrence, option1, option2, option3, option4}) {
  const email = 'sphe.g.personal@gmail.com';

  const emailBTN = () => {
      window.location.href = `mailto:${email}`;
  };
  
    return (
        <div className='bg-[#0F1115] w-[300px] md:w-[400px] flex flex-col justify-start items-start rounded-lg border border-[#3F4044] p-[24px] mb-20'>
          <h1 className='text-[3rem] font-medium flex justify-center items-center'>${price}
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
          
          <div className='w-full'>
            <h1 onClick={emailBTN} className='bg-white rounded-lg text-black font-medium flex justify-center items-center py-2 mt-6'>Get in contact</h1>
          </div>
        </div>
    )
}
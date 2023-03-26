import Hero from '@/public/assets/images/heroIMG.png'
import Image from 'next/image';

export default function Showreel() {
    const videoUrl = "https://www.youtube.com/embed/_bFI4HEmgw4";

    return (
        <div className="rounded-xl scale-90 md:bg-[#0F1115] border md:border-[#3F4044] md:p-[24px]">
            <iframe
                className="rounded-xl w-[370px] sm:w-[480px] h-[220px] sm:h-[270px] md:w-[853px] md:h-[480px]"
                src={videoUrl}
                width="100%"
                height="100%"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
            ></iframe>
            <div className="flex justify-between items-center md:mt-5">
                <div>
                    <h1 className='font-medium text-[0px] md:text-4xl'>Showreel</h1> 
                    <p className="text-[#727375] text-[0px] md:text-[1rem]">View my latest work</p>
                </div>
                <button className="bg-white px-4 py-2 hidden md:flex text-xl rounded-lg text-black" onClick={() => {event.preventDefault();window.open('https://www.tiktok.com/@sphe.exe', "_blank");}}>Follow</button>
            </div>
            
        </div>
    )
}
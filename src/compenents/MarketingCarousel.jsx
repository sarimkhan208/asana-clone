import React, { useState } from 'react'
import {BsArrowLeft,BsArrowRight} from 'react-icons/bs'

const MarketingCarousel = () => {

    const [index,setIndex] = useState(0)

    const prevToggle = () =>{
        if(index==0){
            setIndex(4)
        }else{
            setIndex((prev)=>prev-1)
        }
    }
    
    const nextToggle = () =>{
        if(index==4){
            setIndex(0)
        }else{
            setIndex((prev)=>prev+1)
        }
        
    }
  return (
    <div className='px-[70px] py-[60px] flex justify-between' >

        {/* ABOUT MARKETING */}
      <div className='w-[40%] pl-[20px]' >
        <h3 className=' text-[50px] font-helvetica font-medium leading-[55px] text-[#0D0E10]' >The best platform for cross-functional work</h3>
        <p className=' mb-[30px] tracking-widest text-[18px] leading-[30px] text-[#0D0E10] font-helvetica font-medium mt-[60px]' >Want to drive efficiency across your organization? Asana is flexible and easy for all teams to use, so you can deliver quality work together, faster.</p>
        <div className='flex justify-between gap-[40px] pr-[100px] ' >
            <button className='leading-[16px] text-[16px] py-[15px] rounded-sm bg-[#0D0E10] text-white font-semibold w-[100%] ' >Get Started</button>
            <button className='leading-[16px] text-[17px] py-[15px] rounded-sm bg-white text-[#0D0E10] font-semibold w-[100%] border-2 border-[#0D0E10] '  >See how it works</button>
        </div>
      </div>

        {/* MARKETING CAROUSEL */}
        <div className='w-[45%]' >

            <div className='flex justify-center' >
                <button onClick={()=>setIndex(0)} className={`hover:bg-[#F06A6A] ${index==0?'bg-[#F06A6A]':'bg-[#ECECEC]'}  text-[#0D0E10] font-helvetica text-[15px] font-semibold px-[15px] py-[2px] rounded-3xl tracking-wider leading-[32px] mr-2`} >Marketing</button>
                <button onClick={()=>setIndex(1)} className={`hover:bg-[#F1BD6C] ${index==1?'bg-[#F1BD6C]':'bg-[#ECECEC]'}  text-[#0D0E10] font-helvetica text-[15px] font-semibold px-[15px] py-[2px] rounded-3xl tracking-wider leading-[32px] mr-2`} >Product</button>
                <button onClick={()=>setIndex(2)} className={`hover:bg-[#9EE7E3] ${index==2?'bg-[#9EE7E3]':'bg-[#ECECEC]'}  text-[#0D0E10] font-helvetica text-[15px] font-semibold px-[15px] py-[2px] rounded-3xl tracking-wider leading-[32px] mr-2`}  >IT</button>
                <button onClick={()=>setIndex(3)} className={`hover:bg-[#938CE1] ${index==3?'bg-[#938CE1]':'bg-[#ECECEC]'}  text-[#0D0E10] font-helvetica text-[15px] font-semibold px-[15px] py-[2px] rounded-3xl tracking-wider leading-[32px] mr-2`}  >Operations</button>
                <button onClick={()=>setIndex(4)} className={`hover:bg-[#5DA283] ${index==4?'bg-[#5DA283]':'bg-[#ECECEC]'}  text-[#0D0E10] font-helvetica text-[15px] font-semibold px-[15px] py-[2px] rounded-3xl tracking-wider leading-[32px] mr-2`}  >Sales</button>
            </div>

            <img className='my-[25px]'  src={carouselImg[index]} alt="" />

            <div className='flex justify-center gap-4 mt-[50px]'>
                <button onClick={prevToggle} className='p-[8px] text-[22px] rounded-full border-2 hover:border-[#0D0E10] border-gray-400 text-gray-600' >{<BsArrowLeft/>}</button>
                <button onClick={nextToggle} className='p-[8px] text-[22px] rounded-full border-2 hover:border-[#0D0E10] border-gray-400 text-gray-600' >{<BsArrowRight/>}</button>
            </div>
        </div>
    </div>
  )
}

export default MarketingCarousel

let carouselImg = [
    'https://i.postimg.cc/MpWBZyGM/Screenshot-2023-08-29-105514.png',
    'https://i.postimg.cc/vB9TtBBw/Screenshot-2023-08-29-105639.png',
    'https://i.postimg.cc/yYndP2Vx/Screenshot-2023-08-29-105734.png',
    'https://i.postimg.cc/7ZWLv7Jy/Screenshot-2023-08-29-105806.png',
    'https://assets.asana.biz/transform/a79665bc-49dc-4b14-a244-bf98ff221df2/homepagev2-image5-2x-EN?io=transform:fill,width:768&format=webp'
]
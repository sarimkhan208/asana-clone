import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

const Card = ({image,title,desc,color}) => {
    

    
  return (
        <div className={`rounded-md p-[20px] my-[20px] ${color} text-[#FFFFFF] w-[270px] h-[265px] flex flex-col justify-between `}>
            <div>
                <div className='w-12 h-12 bg-white p-1 rounded-md'>
                    <img className='rounded-md' src={image} alt="" />
                </div>
                <div className='my-[10px] font-helvetica font-semibold tracking-wider text-[15px]' >{title}</div>
                <div className='font-helvetica font-semibold tracking-widest text-[14px]'>{desc}</div>
            </div>

            
            <div>
                <div className='hover:text-black hover:bg-white cursor-pointer bg-transparent h-8 w-8 rounded-full flex justify-center items-center border border-white text-white' >
                    {<BsArrowRight className='-rotate-45'/>}
                </div>
            </div>
        </div>
    )
}

export default Card

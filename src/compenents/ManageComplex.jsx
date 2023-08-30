import React from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'

const ManageComplex = () => {
  return (
    <div className='bg-[#FFFFFF] px-[20px] laptop:px-[60px] py-[80px] font-helvetica' >

        <div className='text-black text-[30px] pb-[80px] cursor-pointer hover:text-red-500' >{<AiOutlineArrowDown/>}</div>


        <div className='laptop:flex' >
            <div className='w-[100%] laptop:w-[50%]' >
                <span className='text-[#273240] text-[13px] leading-[21px] font-semibold tracking-widest' >DRIVE EFFICIENCY ACROSS TEAMS</span>
                <h4 className='text-[#273240] text-[31px] leading-[42px] font-medium tracking-wider mt-[10px] mb-[20px] ' >Manage complex work easily</h4>
            
                <p className='text-[#646F79] text-[19px] mb-[30px] font-medium tracking-wider'>Connect what needs to get done, who's doing it, and by when.</p>
            
                <img src="https://i.postimg.cc/CL50n3cb/planning.png" alt="" />
            </div>


            <div className='w-[100%] laptop:w-[50%] mt-[30px]   laptop:px-[50px] laptop:my-auto '>

                <h4 className='text-[#0D0E10] text-[24px] leading-[30px] tracking-wider' >List View</h4>

                <p className='my-[20px] text-[#646F79] text-[19px] mb-[30px] font-medium tracking-wider'>Organize and assign tasks. With lists, teams see immediately what they need to do, which tasks are a priority, and when work is due.</p>
            
                <div className='flex font-helvetica font-bold tracking-widest text-[16px] hover:text-red-500 cursor-pointer' >Get Started <span className='ml-2 mt-1'>{<BsArrowRight/>}</span> </div>
            </div>
        </div>
      
    </div>
  )
}

export default ManageComplex

import React from 'react'
import {TbChevronDown} from 'react-icons/tb'
import {CiGlobe} from 'react-icons/ci'
import {RxHamburgerMenu} from 'react-icons/rx'

const Navbar = () => {
  return (
    <div className='h-[60px] w-[100%] px-[15px] tablet:px-[30px] laptop:px-[60px]  flex items-center bg-[#EEEBEA] ' >
        <img src="/asanalogo.svg" />
        <div className='ml-[60px] hidden laptop:flex ' >
            <div className='flex mr-[30px] text-[#89806F] font-helvetica text-[14px] tracking-widest font-semibold cursor-pointer' >Product <span className='mt-1 ml-[2px] text-[12px]'>{<TbChevronDown/>}</span></div>
            <div className='flex mr-[30px] text-[#89806F] font-helvetica text-[14px] tracking-widest font-semibold cursor-pointer' >Solution <span className='mt-1 ml-[2px] text-[12px]'>{<TbChevronDown/>}</span></div>
            <div className='flex mr-[30px] text-[#89806F] font-helvetica text-[14px] tracking-widest font-semibold cursor-pointer' >Resources <span className='mt-1 ml-[2px] text-[12px]'>{<TbChevronDown/>}</span></div>
            <div className='flex mr-[30px] text-[#89806F] font-helvetica text-[14px] tracking-widest font-semibold cursor-pointer' >Enterprise</div>
            <div className='flex mr-[30px] text-[#89806F] font-helvetica text-[14px] tracking-widest font-semibold cursor-pointer' >Pricing</div>
        </div>

        <div className='hidden tablet:flex laptop:flex ml-auto' >
            <div className='flex mr-[30px] text-[#89806F] font-helvetica tracking-widest font-semibold cursor-pointer' ><span className='text-[24px] '>{<CiGlobe/>}</span></div>
            <div className='flex mr-[30px] text-[#89806F] font-helvetica text-[14px] tracking-widest font-semibold cursor-pointer' >Contact Sales</div>
            <div className='flex mr-[30px] text-[#89806F] font-helvetica text-[14px] tracking-widest font-semibold cursor-pointer ' >Log In</div>
        </div>

        <button className='ml-auto tablet:ml-0 laptop:ml-0 text-[15px] font-helvetica tracking-widest font-bold bg-black text-white p-[8px] px-[14px] rounded-tablet hover:bg-[#F06A6A] hover:text-[black]' >
            Get Started
        </button>
        <div className='block laptop:hidden text-[22px] ml-[10px]' >{<RxHamburgerMenu/>}</div>
    </div>
  )
}

export default Navbar

import React, { useState } from 'react'
import {TbChevronDown} from 'react-icons/tb'
import {BsArrowRight} from 'react-icons/bs'

const PrioritizeRevenueSection = () => {

    const [automated,setAutomated] = useState(true)
    const [streamline,setStreamline] = useState(false)
    const [manage,setManage] = useState(false)
    const [connect,setConnect] = useState(false)

    const [index,setIndex] = useState(0)

    const automatedToggle = ()=>{
        setAutomated(()=>true)
        setStreamline(()=>false)
        setManage(()=>false)
        setConnect(()=>false)
        setIndex(()=>0)
    }

    const streamlineToggle = ()=>{
        setAutomated(()=>false)
        setStreamline(()=>true)
        setManage(()=>false)
        setConnect(()=>false)
        setIndex(()=>1)
    }

    const manageToggle = ()=>{
        setAutomated(()=>false)
        setStreamline(()=>false)
        setManage(()=>true)
        setConnect(()=>false)
        setIndex(()=>2)
    }

    const connectToggle = ()=>{
        setAutomated(()=>false)
        setStreamline(()=>false)
        setManage(()=>false)
        setConnect(()=>true)
        setIndex(()=>3)
    }

    

  

  return (
    <div className='px-[20px] py-[30px] laptop:py-[80px] laptop:px-[60px] bg-[#0D0E10] flex gap-0 laptop:gap-[50px]'>

        <div className='w-[100%] tablet:w-[100%] laptop:w-[40%] font-helvetica' >
            <span className='laptop:pr-[60px] text-[#EDF1F2] font-helvetica text-[13px] leading-5 font-semibold tracking-widest' >STREAMLINE YOUR WORK AND PROCESSES</span>
            <h4 className='text-[32px] text-[#FFFFFF] font-medium tracking-widest font-helvetica mt-[20px]' >Prioritize revenue-driving work</h4>
            <p className='mb-[50px] mt-[20px] laptop:pr-[60px] text-[#EDF1F2] font-helvetica text-[18px] leading-6 font-medium tracking-widest' >Asana helps you organize complex work across teams to drive business outcomes</p>

            <div onClick={automatedToggle} className={`cursor-pointer hover:bg-[#474748] flex justify-between text-[16px] font-bold font-helvetica tracking-wider border-t-[1px]  ${automated?'border-[#4573D2]':'border-[#474748]'} py-[15px] px-[10px] bg-[#0D0E10] text-[#FFFFFF]`} >
                <div>Automate your workflows</div>
                <div  className={`transition-transform transform ease-in-out duration-300 ${automated ? 'rotate-180' : ''} text-[#474748] mt-[5px]`} >{<TbChevronDown/>}</div>
            </div>

                <div className={` ${automated?'overflow-auto h-auto mb-[20px]':'overflow-hidden h-0 ease-in-out'} pl-[10px]`}>
                    <p className=' pr-[40px] my-[20px] text-[14px] leading-[23px] font-semibold tracking-widest text-[#FFFFFF]' >Put tasks on autopilot like assigning work, setting due dates, and more.</p>
                    <div className='flex font-helvetica font-bold text-[#4573D2] tracking-wider cursor-pointer' >Get Started <span className='ml-2 mt-1'>{<BsArrowRight/>}</span> </div>
                    <div className='block laptop:hidden p-[30px] pl-[20px] mt-[20px] pt-1'>
                        <img className='duration-500 ease-in-out' src={prioritizeImg[0]} alt="" />
                    </div>
                </div>

                


            <div onClick={streamlineToggle} className={`cursor-pointer hover:bg-[#474748] flex justify-between text-[16px] font-bold font-helvetica tracking-wider border-t-[1px]  ${streamline?'border-[#E37D1F]':'border-[#474748]'} py-[15px] px-[10px] bg-[#0D0E10] text-[#FFFFFF]`} >
                <div>Streamline your reportss</div>
                <div  className={`transition-transform transform ease-in-out duration-300 ${streamline ? 'rotate-180' : ''} text-[#474748] mt-[5px]`} >{<TbChevronDown/>}</div>
            </div>

                <div className={` ${streamline?'overflow-auto h-auto mb-[20px]':'overflow-hidden h-0 ease-in-out'} pl-[10px]`}>
                    <p className=' pr-[40px] my-[20px] text-[14px] leading-[23px] font-semibold tracking-widest text-[#FFFFFF]' >Get real-time insights into progress for any workstream.</p>
                    <div className='flex font-helvetica font-bold text-[#E37D1F] tracking-wider cursor-pointer' >Get Started <span className='ml-2 mt-1'>{<BsArrowRight/>}</span> </div>

                    <div className='block laptop:hidden p-[30px] pt-1  pl-[20px] mt-[20px] '>
                        <img className='duration-500 ease-in-out' src={prioritizeImg[1]} alt="" />
                    </div>
                </div>

                


            <div onClick={manageToggle} className={`cursor-pointer hover:bg-[#474748] flex justify-between text-[16px] font-bold font-helvetica tracking-wider border-t-[1px]  ${manage?'border-[#416AE1]':'border-[#474748]'} py-[20px] px-[15px] bg-[#0D0E10] text-[#FFFFFF]`} >
                <div>Manage Your intakes</div>
                <div  className={`transition-transform transform ease-in-out duration-300 ${manage ? 'rotate-180' : ''} text-[#474748] mt-[5px]`} >{<TbChevronDown/>}</div>
            </div>

                <div className={` ${manage?'mb-[20px] overflow-auto h-auto':'overflow-hidden h-0 ease-in-out'} pl-[10px]`}>
                    <p className=' pr-[40px] my-[20px] text-[14px] leading-[23px] font-semibold tracking-widest text-[#FFFFFF]' >Make it easy to collect information and triage incoming requests.</p>
                    <div className='flex font-helvetica font-bold text-[#416AE1] tracking-wider cursor-pointer' >Get Started <span className='ml-2 mt-1'>{<BsArrowRight/>}</span> </div>

                    <div className='block laptop:hidden p-[30px] pt-1  pl-[20px] mt-[20px] '>
                        <img className='duration-500 ease-in-out' src={prioritizeImg[2]} alt="" />
                    </div>
                </div>

                


            <div onClick={connectToggle} className={`cursor-pointer hover:bg-[#474748] flex justify-between text-[16px] font-bold font-helvetica tracking-wider border-t-[1px]  ${connect?'border-[#A01410]':'border-[#474748]'} py-[20px] px-[15px] bg-[#0D0E10] text-[#FFFFFF]`} >
                <div>Connect Work to Purpose</div>
                <div  className={`transition-transform transform ease-in-out duration-300 ${connect? 'rotate-180' : ''} text-[#474748] mt-[5px]`} >{<TbChevronDown/>}</div>
            </div>

                <div className={`${connect?'mb-[20px] overflow-auto h-auto':'overflow-hidden h-0 ease-in-out'} pl-[10px]`}>
                    <p className=' pr-[40px] my-[20px] text-[14px] leading-[23px] font-semibold tracking-widest text-[#FFFFFF]' >Manage risks and dependencies on company goals for better collaboration with leadership.</p>
                    <div className='flex font-helvetica font-bold text-[#A01410] tracking-wider cursor-pointer' >Get Started <span className='ml-2 mt-1'>{<BsArrowRight/>}</span> </div>
                    
                    <div className='block laptop:hidden p-[30px] pt-1  pl-[20px] mt-[20px] '>
                        <img className='duration-500 ease-in-out' src={prioritizeImg[3]} alt="" />
                    </div>
                </div>

                
        </div>




        <div className='w-[0px] tablet:w-[0px] laptop:w-[60%]  py-[60px] laptop:px-[35px]'>
            <img className='duration-500 ease-in-out' src={prioritizeImg[index]} alt="" />
        </div>
      
    </div>
  )
}

export default PrioritizeRevenueSection


const prioritizeImg = [
    "https://i.postimg.cc/6QZgP336/0.png",
    "https://i.postimg.cc/FRMBVQmd/sream.png",
    "https://i.postimg.cc/nrr16RkK/2.png",
    "https://assets.asana.biz/transform/b558b33d-c177-4465-9e5f-e966d20b5a09/homepage-accordion-goals-en-1x"
]

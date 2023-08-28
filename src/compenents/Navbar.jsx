import React, { useState } from 'react'
import {TbChevronDown} from 'react-icons/tb'
import {CiGlobe} from 'react-icons/ci'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BsArrowRight} from 'react-icons/bs'
import {GrTemplate} from 'react-icons/gr'
const Navbar = () => {
    const [whyasana,setWhyasana] = useState(false)
  return (
    <>
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
    


    {/* HAMBURGER INSIDE CONTENT */}
    <div className='p-[15px]'>
        <div onClick={()=>setWhyasana(!whyasana)} className='flex justify-between text-[16px] font-bold font-helvetica tracking-wider border-b-[1px] border-[#EEEBEA] py-[10px]' >
            <div>Why Asana?</div>
            <div  className={`transition-transform transform ease-in-out duration-300 ${whyasana ? 'rotate-180' : ''} text-[#EEEBEA]`} >{<TbChevronDown/>}</div>
        </div>
            <div className={`${whyasana?'overflow-auto h-auto  mt-[10px] p-[10px]':'overflow-hidden h-0'}`} >
                <div className='text-[#0D0E10] text-[12px] font-helvetica font-semibold tracking-widest pb-[10px] border-b-[1px] border-[#EEEBEA]' >
                    WHY ASANA
                </div>

                {
                    whyAsanaContent.map((el)=>(
                        <div className='my-[22px]' key={el.id} >
                            <div className='text-[#0D0E10] text-[12px] mb-2 font-helvetica font-semibold tracking-wider' >{el.title}</div>
                            <div className='text-[#757575] text-[10px] font-helvetica tracking-widest font-semibold' >{el.desc}</div>
                        </div>
                    ))
                }
                <div className='text-[#0D0E10] text-[12px] font-helvetica font-semibold tracking-widest pb-[10px] border-b-[1px] border-[#EEEBEA]' >
                    FOR YOUR WORK FLOW
                </div>

                <div className='grid grid-cols-2' >
                    {
                        forYourWorkFlowContent.map((el)=>(
                            <div className='my-[22px] cursor-pointer'  key={el.id} >
                                <div className='text-[#0D0E10] text-[12px] mb-2 font-helvetica font-semibold tracking-wider' >{el.title}</div>
                                <div className='text-[#757575] text-[10px] font-helvetica tracking-widest font-semibold' >{el.desc}</div>
                            </div>
                        ))
                    }
                </div>

                <div className='text-[#0D0E10] text-[12px] font-helvetica font-semibold tracking-widest pb-[10px] border-b-[1px] border-[#EEEBEA]' >
                    TEMPLATES
                </div>

                <div className='my-[22px] cursor-pointer'>
                    <div className='text-[#0D0E10] text-[12px] mb-2 font-helvetica font-semibold tracking-wider' >Templates Home</div>
                    <div className='text-[#757575] text-[10px] font-helvetica tracking-widest font-semibold' >Hit the groud running with template designd for your use case</div>
                </div>
            </div>

        <div className='flex justify-between text-[16px] font-bold font-helvetica tracking-wider border-b-[1px] border-[#EEEBEA] py-[10px]' >
            <div>Features</div>
            <div className={`transition-transform transform ease-in-out duration-300 ${whyasana ? 'rotate-180' : ''} text-[#EEEBEA]`} >{<TbChevronDown/>}</div>
        </div>
        <div className='flex justify-between text-[16px] font-bold font-helvetica tracking-wider border-b-[1px] border-[#EEEBEA] py-[10px]' >
            <div>Resources</div>
            <div className={`transition-transform transform ease-in-out duration-300 ${whyasana ? 'rotate-180' : ''} text-[#EEEBEA]`} >{<TbChevronDown/>}</div>
        </div>
        <div className='flex justify-between text-[16px] font-bold font-helvetica tracking-wider border-b-[1px] border-[#EEEBEA] py-[10px]' >
            <div>Enterprice</div>
        </div>
        <div className='flex justify-between text-[16px] font-bold font-helvetica tracking-wider border-b-[1px] border-[#EEEBEA] py-[10px]' >
            <div>Pricing</div>
        </div>
        
        <button className="block mx-auto bg-black text-[white] w-[100%] font-helvetica py-[8px] font-bold tracking-wider my-[22px] hover:text-[black] hover:bg-[#F06A6A] ">Get Started</button>
        <button className="block mx-auto bg-white text-[black] w-[100%] font-helvetica py-[8px] font-bold tracking-wider  hover:text-[black] hover:bg-[#F06A6A] border-solid border-2 border-black ">Log In</button>

    </div>


    </>
  )
}

export default Navbar


let whyAsanaContent = [
    {
        id : '1',
        title : 'Overview',
        desc : 'Build Projects plans, coordinate task, and hit deadlines'
    },

    {
        id : '2',
        title : 'For Marketing',
        desc : 'Plans and track compaigns, launches and more'
    },
    {
        id : '3',
        title : 'For Operation',
        desc : 'Build, scale and streamline processes to improve efficiency'
    },
    {
        id : '4',
        title : 'Leaders',
        desc : 'Improve clarity focus and personal growth'
    },
    {
        id : '5',
        title : 'For Product',
        desc : 'Build roadmap, plans, spirits, manage, shipping and launches'
    }
]

let forYourWorkFlowContent = [
    {
        id : 1,
        title : 'Project Management',
        desc : 'Plan, track and management team projects from start to finish'
    },
    {
        id : 2,
        title : 'Remote Team',
        desc : 'Collaborate and manage work from anywhere'
    },
    {
        id : 3,
        title : 'Comapign Management',
        desc : 'Create, launch and track your marketing compaigns'
    },
    {
        id : 4,
        title : 'Productivity',
        desc : 'Be more deliberate about how you manage your time'
    },
    {
        id : 5,
        title : 'Creativity Production',
        desc : 'Design review and ship inspirational work'
    },
    {
        id : 6,
        title : 'Agile Management',
        desc : 'Build fast, ship, often and track it all in one place'
    },

    {
        id : 7,
        title : 'Request Tracking',
        desc : 'Track, priorities, and full the ask your teams'
    },
    {
        id : 8,
        title : 'See all Workflow',
        desc : ''
    }
]
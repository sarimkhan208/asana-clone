import React, { useState } from 'react'
import {TbChevronDown} from 'react-icons/tb'
import {CiGlobe} from 'react-icons/ci'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BsArrowRight} from 'react-icons/bs'
import {CgTemplate} from 'react-icons/cg'
import {AiFillQqSquare} from 'react-icons/ai'
import TitleCompoWithIcon from './navbarComponents/TitleCompoWithIcon'
import TitleCompo from './navbarComponents/TitleCompo'
import HeadingInsideHamburger from './navbarComponents/HeadingInsideHamburger'
import {LuStars} from 'react-icons/lu'
import {LiaNetworkWiredSolid} from 'react-icons/lia'
import {CiViewTimeline} from 'react-icons/ci'
import {HiOutlineViewBoards} from 'react-icons/hi'
import {SlCalender} from 'react-icons/sl'
import {AiOutlineAppstoreAdd,AiOutlineSetting,AiTwotoneThunderbolt} from 'react-icons/ai'
import {ImStatsDots} from 'react-icons/im'
import {RxAvatar} from 'react-icons/rx'
import {FaWpforms} from 'react-icons/fa'
import {BsListTask} from 'react-icons/bs'
import {MdOutlineWorkspacePremium} from 'react-icons/md'
import {LuBuilding2} from 'react-icons/lu'
import {BsBuilding} from 'react-icons/bs'





const Navbar = () => {
    const [menuOpen,setMenuOpen] = useState(false)
    const [whyasana,setWhyasana] = useState(false)
    const [features,setFeatures] = useState(false)
    

    const [productOpen,setProductOpen] = useState(false)
    const [solutionOpen,setSolutionOpen] = useState(false)
    const [resourcesOpen,setResourcesOpen] = useState(false)

    const productToggle = () =>{
        setProductOpen(!productOpen)
        setResourcesOpen(false)
        setSolutionOpen(false)
    }
    const resourceToggle = () =>{
        setProductOpen(false)
        setResourcesOpen(!resourcesOpen)
        setSolutionOpen(false)
    }
    const solutionToggle = () =>{
        setProductOpen(false)
        setResourcesOpen(false)
        setSolutionOpen(!solutionOpen)
    }

  return (
    <>
    <div className='h-[60px] w-[100%] px-[15px] tablet:px-[30px] laptop:px-[60px]  flex items-center bg-[#FFFFFF] ' >
        <img src="/asanalogo.svg" />
        <div className='ml-[60px] hidden laptop:flex ' >
            <div onClick={productToggle} className='flex mr-[30px] text-[#89806F] font-helvetica text-[14px] tracking-widest font-semibold cursor-pointer' >Product <span className={`transition-transform transform ease-in-out duration-300 ${productOpen ? 'rotate-180 mb-1' : 'mt-1'}  ml-[2px] text-[12px]`}>{<TbChevronDown/>}</span></div>
            <div onClick={solutionToggle} className='flex mr-[30px] text-[#89806F] font-helvetica text-[14px] tracking-widest font-semibold cursor-pointer' >Solution <span className={`transition-transform transform ease-in-out duration-300 ${solutionOpen ? 'rotate-180 mb-1' : 'mt-1'}  ml-[2px] text-[12px]`}>{<TbChevronDown/>}</span></div>
            <div onClick={resourceToggle} className='flex mr-[30px] text-[#89806F] font-helvetica text-[14px] tracking-widest font-semibold cursor-pointer' >Resources <span className={`transition-transform transform ease-in-out duration-300 ${resourcesOpen ? 'rotate-180 mb-1' : 'mt-1'}  ml-[2px] text-[12px]`}>{<TbChevronDown/>}</span></div>
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
        {/* <div onClick={()=>setMenuOpen(!menuOpen)} className='block laptop:hidden text-[22px] ml-[10px]' >{<RxHamburgerMenu/>}</div> */}
        <div className={`${menuOpen?'mx-[15px]':'ml-[20px]'} flex flex-col laptop:hidden `} onClick={()=>setMenuOpen(!menuOpen)} > 
            <span className={`h-[3px] w-[15px] bg-black mb-[2px] ${menuOpen?'rotate-45 absolute':''} ease-in-out duration-300`}></span>
            <span className={`h-[3px] w-[15px] bg-black mb-[2px] ${menuOpen?'-rotate-45 absolute':''} ease-in-out duration-300`}></span>
            <span className={`h-[3px] w-[15px] bg-black ${menuOpen?'hidden':''}  `}></span>
        </div>
    </div>
    


    {/* HAMBURGER INSIDE CONTENT */}
    <div className={`${menuOpen?'top-[60px]':'-top-full'} bg-white laptop:hidden  absolute ease-in-out duration-500 px-[15px]`}>
        <div onClick={()=>setWhyasana(!whyasana)} className='flex justify-between text-[16px] font-bold font-helvetica tracking-wider border-b-[1px] border-[#EEEBEA] py-[10px]' >
            <div>Why Asana?</div>
            <div  className={`transition-transform transform ease-in-out duration-300 ${whyasana ? 'rotate-180' : ''} text-[#EEEBEA]`} >{<TbChevronDown/>}</div>
        </div>
        
        {/* INSIDE CONTENT OF WHY ASANA */}
            <div className={`${whyasana?'overflow-auto h-auto  mt-[10px] p-[10px]':'overflow-hidden h-0'}`} >
                <HeadingInsideHamburger title={'WHY ASANA'} fontSize={'12px'} />

                {
                    whyAsanaContent.map((el)=>(
                        <TitleCompo title={el.title} desc={el.desc} id={el.id} />
                    ))
                }
                <HeadingInsideHamburger title={'FOR YOUR WORKFLOW'} fontSize={'12px'} />

                <div className='grid grid-cols-2' >
                    {
                        forYourWorkFlowContent.map((el)=>(
                            <TitleCompo title={el.title} desc={el.desc} id={el.id} />
                        ))
                    }
                </div>

                <HeadingInsideHamburger title={'TEMPLATES'} fontSize={'12px'} />

                <TitleCompoWithIcon title={"Template Home"} desc={"Hit the groud running with template designd for your use case"} color={'orange-400'} icon={CgTemplate} />

                <HeadingInsideHamburger title={'POPULAR TEMPLATES'} fontSize={'12px'}/>

                    <div className='flex my-[10px]' >
                        <div  >{<AiFillQqSquare className='text-green-500' />}</div>
                        <div className='font-helvetica text-[10px] font-semibold tracking-widest ml-2 ' >Team Continuity</div>
                    </div>
                    <div className='flex my-[10px]' >
                        <div  >{<AiFillQqSquare className='text-pink-500' />}</div>
                        <div className='font-helvetica text-[10px] font-semibold tracking-widest ml-2 ' >Meeting Agenda</div>
                    </div>
                    <div className='flex my-[10px]' >
                        <div  >{<AiFillQqSquare className='text-purple-400' />}</div>
                        <div className='font-helvetica text-[10px] font-semibold tracking-widest ml-2 ' >Project Plan</div>
                    </div>
                    <div className='flex my-[10px]' >
                        <div  >{<AiFillQqSquare className='text-blue-300' />}</div>
                        <div className='font-helvetica text-[10px] font-semibold tracking-widest ml-2 ' >Work Reqeust</div>
                    </div>
                    <div className='flex my-[10px]' >
                        <div  >{<AiFillQqSquare className='text-red-400' />}</div>
                        <div className='font-helvetica text-[10px] font-semibold tracking-widest ml-2 ' >Team goals and objective planning</div>
                    </div>
        </div>

        <div onClick={()=>setFeatures(!features)} className='flex justify-between text-[16px] font-bold font-helvetica tracking-wider border-b-[1px] border-[#EEEBEA] py-[10px]' >
            <div>Features</div>
            <div className={`transition-transform transform ease-in-out duration-300 ${features ? 'rotate-180' : ''} text-[#EEEBEA]`} >{<TbChevronDown/>}</div>
        </div>

        {/* INSIDE CONTENT OF FEATURES */}

        <div className={`${features?'overflow-auto h-auto  mt-[10px] p-[10px]':'overflow-hidden h-0'}`} >
            <HeadingInsideHamburger title={'KEY FEATURES'} fontSize={'12px'} />
            
            {
                keyFeatures.map((el)=>(
                    <TitleCompoWithIcon title={el.title} desc={el.desc} color={el.color} icon={el.icon} />
                ))
            }
            <HeadingInsideHamburger title={'All PLANS'} fontSize={'12px'} />

            {
                allPlansFeatures.map((el)=>(
                    <TitleCompoWithIcon title={el.title} desc={el.desc} color={el.color} icon={el.icon} />
                ))
            }


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
    {/* INSIDE HAMBURGER SECTION CLOSED */}

    {/* ON HOVERING CONTENT DISPALY ON LAPTOP MODE OF PRODUCT */}
    <div className={`${productOpen?'overflow-auto h-auto':'overflow-hidden h-0'}`} >
        <div className='flex h-full' >
            <div className='flex w-[60%] bg-[#FFFFFF] pl-[60px] pr-[20px] py-[30px] '>

                {/* 35% Portion */}
                <div className='w-[35%]'>
                    <HeadingInsideHamburger title={"OVERVIEW"} fontSize={'14px'} />
                    <div className='my-[22px] p-[12px] cursor-pointer hover:bg-[#FAFAF9]' >
                        <div className='flex text-[#0D0E10] text-[14px] mb-2 font-helvetica font-semibold tracking-widest' >Products Overview <span className='mt-1 ml-2'>{<BsArrowRight/>}</span></div>
                        <div className='text-[#757575] text-[12px] font-helvetica tracking-widest font-semibold' >See all that Asana has to offer at a glance</div>
                    </div>

                    <div className='my-[22px] p-[12px] cursor-pointer hover:bg-[#FAFAF9]' >
                        <div className='flex text-[#0D0E10] text-[14px] mb-2 font-helvetica font-semibold tracking-widest' >See all features  <span className='mt-1 ml-2'>{<BsArrowRight/>}</span></div>
                    </div>
                </div>

                {/* 65% Portion */}
                <div className='w-[65%] ml-[30px] '>
                    <HeadingInsideHamburger title={"KEY FEATURES"} fontSize={'14px'} />

                    <div className='grid grid-cols-2 mt-[20px]' >
                        {
                            keyFeatures.map((el)=>(
                                <div className='flex p-[15px] font-helvetica hover:bg-[#FAFAF9] cursor-pointer '>
                                    <div className='text-[20px] mr-2 text-[#A5A4A3]'>{<el.icon/>}</div>
                                    <div className='text-[15px] text-[#A5A4A3]  tracking-widest font-helvetica font-medium leading-5' >{el.title}</div>
                                </div>
                            ))
                        }

                    </div>

                </div>
            </div>

            <div className='w-[40%] bg-[#FAFAF9] py-[30px] pl-[30px] border-l-[2px] border-[#C9C7C6]' >
                <div className='w-[40%]' >
                    <HeadingInsideHamburger title={"ALL PLANS"} fontSize={'14px'} />
                    <div className='flex p-[15px] font-helvetica hover:bg-[#FAFAF9] cursor-pointer mt-4 '>
                        <div className='text-[20px] mr-2 text-yellow-400'>{<MdOutlineWorkspacePremium/>}</div>
                        <div className='text-[15px] text-[#A5A4A3]  tracking-widest font-helvetica font-medium leading-5' >Premium</div>
                    </div>
                    <div className='flex p-[15px] font-helvetica hover:bg-[#FAFAF9] cursor-pointer '>
                        <div className='text-[20px] text-blue-400  mr-2'>{<LuBuilding2/>}</div>
                        <div className='text-[15px]  tracking-widest font-helvetica font-medium leading-5' >Buissness</div>
                    </div>
                    <div className='flex p-[15px] font-helvetica hover:bg-[#FAFAF9] cursor-pointer '>
                        <div className='text-[20px] mr-2 text-red-400'>{<BsBuilding/>}</div>
                        <div className='text-[15px] text-[#A5A4A3]  tracking-widest font-helvetica font-medium leading-5' >Enterprice</div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex pl-2 py-[10px] font-helvetic text-[13px] font-semibold text-[#464547] w-[100%] bg-[#EEEBEA]' >
            <div className='px-[20px] border-r-2 border-[#C9C7C6]' >View Demo</div>
            <div className='px-[20px] border-r-2 border-[#C9C7C6]' >Contact Sales</div>
            <div className='px-[20px]' >Download Asana</div>
        </div>
    </div>


    {/* ON HOVERING CONTENT DISPALY ON LAPTOP MODE OF SOLUTION */}

    <div className={`${solutionOpen?'overflow-auto h-auto':'overflow-hidden h-0'}`} >
        <div className='flex h-full' >
            <div className='flex w-[60%] bg-[#FFFFFF] pl-[60px] pr-[20px] py-[30px] '>

                {/* 35% Portion */}
                <div className='w-[35%]'>
                    <HeadingInsideHamburger title={"TEAMS"} fontSize={'14px'} />
                    {
                        solutionTeams.map((el)=>(
                            <div className='my-[5px] p-[12px] cursor-pointer hover:bg-[#FAFAF9]' >
                                <div className='flex text-[#636364] text-[14px] font-helvetica font-semibold tracking-widest' >{el}</div>
                            </div>
                        ))
                    }
                </div>

                {/* 65% Portion */}
                <div className='w-[65%] ml-[30px] '>
                    <HeadingInsideHamburger title={"USES"} fontSize={'14px'} />

                    <div className='grid grid-cols-2 mt-[20px]' >
                        {
                            solutionUses.map((el)=>(
                                <div className='my-[5px] p-[12px] cursor-pointer hover:bg-[#FAFAF9]' >
                                    <div className='flex text-[#636364] text-[14px] font-helvetica font-semibold tracking-widest' >{el}</div>
                                </div>
                            ))
                        }
                        <div className='my-[5px] p-[12px] cursor-pointer hover:bg-[#FAFAF9]' >
                            <div className='flex text-black text-[14px] font-helvetica font-semibold tracking-widest' >View all Uses <span className='mt-1 ml-2'>{<BsArrowRight/>}</span></div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-[40%] bg-[#FAFAF9] py-[30px] pl-[30px] border-l-[2px] border-[#C9C7C6]' >
                <div className='w-[40%]' >
                    <HeadingInsideHamburger title={"TEMPLATES"} fontSize={'14px'} />
                    {
                        solutionTemplates.map((el)=>(
                            <div className='my-[5px] p-[12px] cursor-pointer hover:bg-[#FFFFFF]' >
                                <div className='flex text-[#636364] text-[14px] font-helvetica font-semibold tracking-widest' >{el}</div>
                            </div>
                        ))
                    }
                    <div className='my-[5px] p-[12px] cursor-pointer hover:bg-[#FFFFFF]' >
                        <div className='flex text-black text-[14px] font-helvetica font-semibold tracking-widest' >View Templates <span className='mt-1 ml-2'>{<BsArrowRight/>}</span></div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex pl-2 py-[10px] font-helvetic text-[13px] font-semibold text-[#464547] w-[100%] bg-[#EEEBEA]' >
            <div className='px-[20px] border-r-2 border-[#C9C7C6]' >View Demo</div>
            <div className='px-[20px] border-r-2 border-[#C9C7C6]' >Contact Sales</div>
            <div className='px-[20px]' >Download Asana</div>
        </div>
    </div>





    
    {/* ON HOVERING CONTENT DISPALY ON LAPTOP MODE OF RESOURCES */}

    <div className={`${resourcesOpen?'overflow-auto h-auto':'overflow-hidden h-0'}`} >
        <div className='flex h-full' >
            <div className='flex w-[60%] bg-[#FFFFFF] pl-[60px] pr-[20px] py-[30px] '>

                {/* 35% Portion */}
                <div className='w-[35%]'>
                    <HeadingInsideHamburger title={"LEARN"} fontSize={'14px'} />
                    {
                        resourcesLearn.map((el)=>(
                            <div className='my-[22px] p-[12px] cursor-pointer hover:bg-[#FAFAF9]' >
                                <div className='flex text-[#0D0E10] text-[14px] mb-2 font-helvetica font-semibold tracking-widest' >{el.title}</div>
                                <div className='text-[#757575] text-[12px] font-helvetica tracking-widest font-semibold' >{el.desc}</div>
                            </div>
                        ))
                    }
                </div>

                {/* 65% Portion */}
                <div className='w-[65%] ml-[30px] '>
                    <HeadingInsideHamburger title={"CONNECT"} fontSize={'14px'} />

                    <div className='grid grid-rows-4 grid-flow-col' >
                        {
                            resourcesConnect.map((el)=>(
                                <div className='my-[22px] p-[12px] cursor-pointer hover:bg-[#FAFAF9]' >
                                    <div className='flex text-[#0D0E10] text-[14px] mb-2 font-helvetica font-semibold tracking-widest' >{el.title}</div>
                                    <div className='text-[#757575] text-[12px] font-helvetica tracking-widest font-semibold' >{el.desc}</div>
                                </div>
                            ))
                        }
                    
                    </div>

                </div>
            </div>

            <div className='w-[40%] bg-[#FAFAF9] py-[30px] pl-[30px] border-l-[2px] border-[#C9C7C6]' >
                <div className='w-[50%]' >
                    <HeadingInsideHamburger title={"FEATURED READS"} fontSize={'14px'} />
                    <div className='p-[5px] w-[100%] border-[1px] border-[#EEEBEA] bg-white mt-[12px]'>
                        <img src='https://assets.asana.biz/m/3c783c71ef817d3e/original/WEBINAR-PNG-24AI-ON_DEMAND-800x512-v2.png' />
                        <span className='text-[10px] font-helvetica font-semibold tracking-widest text-[#9CA6AF]' >DEMO</span>
                        <div className='text-[#151B26] font-helvetica font-semibold tracking-widest text-[14px]' >
                            <div>Meet Asana Intelligence :</div>
                            <div>AI has joined the team</div>
                        </div>

                        <div className='flex justify-between text-[#9CA6AF] text-[13px] font-helvetica font-semibold my-2'>
                            <div className='tracking-widest'>Watch Now</div>
                            <div>{<BsArrowRight/>}</div>
                        </div>
                    </div>


                    <div className='p-[5px] w-[100%] border-[1px] border-[#EEEBEA] bg-white mt-[12px]'>
                        <img src='https://assets.asana.biz/m/64d1a4e336c4ad0c/original/EMIM23_BLOG_CONCEPTUAL_HERO_803x533_EN.png' />
                        <span className='text-[10px] font-helvetica font-semibold tracking-widest text-[#9CA6AF]' >REPORT</span>
                        <div className='text-[#151B26] font-helvetica font-semibold tracking-widest text-[14px]' >
                            <div>Drive Employees impact New tools</div>
                            <div>to impower resilent leadership</div>
                        </div>

                        <div className='flex justify-between text-[#9CA6AF] text-[13px] font-helvetica font-semibold my-2'>
                            <div className='tracking-widest'>Read More</div>
                            <div>{<BsArrowRight/>}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex pl-2 py-[10px] font-helvetic text-[13px] font-semibold text-[#464547] w-[100%] bg-[#EEEBEA]' >
            <div className='px-[20px] border-r-2 border-[#C9C7C6]' >View Demo</div>
            <div className='px-[20px] border-r-2 border-[#C9C7C6]' >Contact Sales</div>
            <div className='px-[20px]' >Download Asana</div>
        </div>
    </div>


    </>
  )
}

export default Navbar



let solutionTemplates = [
    'Project Plans','Team goals & Objective','Team Continuity','Meeting Agenda'
]

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


const keyFeatures = [
    {
      id: 1,
      title: "Asana Intelligence",
      icon: LuStars,
      color: "purple-700",
      desc: "Amplify your team's impact with AI for Asana",
    },
    {
      id: 2,
      title: "Workflow Builder",
      icon: LiaNetworkWiredSolid,
      color: "green-400",
      desc: "Create automated processes to coordinate your teams",
    },
    {
      id: 3,
      title: "Timeline",
      icon: CiViewTimeline,
      color: "violet-400",
      desc: "Build beautiful Gantt charts in minutes",
    },
    {
      id: 4,
      title: "Boards",
      icon: HiOutlineViewBoards,
      color: "yellow-400",
      desc: "See and track your work on kanban boards",
    },
    {
      id: 5,
      title: "Calendar",
      icon: SlCalender,
      color: "blue-400",
      desc: "View your team's work on one shared calendar",
    },
    {
      id: 6,
      title: "App Integration",
      icon: AiOutlineAppstoreAdd,
      color: "red-400",
      desc: "See how Asana brings apps together to support your team",
    },
    {
      id: 7,
      title: "Reporting",
      icon: ImStatsDots,
      color: "yellow-400",
      desc: "Get real-time insight into progress on any stream of work",
    },
    {
      id: 8,
      title: "Goals",
      icon: RxAvatar,
      color: "green-400",
      desc: "Set strategic goals and track progress in one place",
    },
    {
      id: 9,
      title: "Forms",
      icon: FaWpforms,
      color: "red-400",
      desc: "Submit and manage work requests in one place",
    },
    {
      id: 10,
      title: "Automation",
      icon: AiTwotoneThunderbolt,
      color: "purple-400",
      desc: "Streamline processes, reduce errors, and spend less time on routine tasks",
    },
    {
      id: 11,
      title: "Workload",
      icon: ImStatsDots,
      color: "red-400",
      desc: "See how much work team members have across projects",
    },
    {
      id: 12,
      title: "Setting",
      icon: AiOutlineSetting,
      color: "yellow-400",
      desc: "Configure your settings",
    },
];

const allPlansFeatures = [
    {
        id: 1,
        title: "Basic",
        icon: BsListTask,
        color: "violet-400",
        desc: "For simple task and project management. Free for teams upto 15",
    },
    {
        id: 2,
        title: "Premium",
        icon: MdOutlineWorkspacePremium,
        color: "yellow-400",
        desc: "For effectively planning and managing team projects",
    },
    {
        id: 3,
        title: "Buisness",
        icon: LuBuilding2,
        color: "violet-400",
        desc: "For managing large and initiative and improving cross-team collabaration",
    },
    {
        id: 4,
        title: "Enterprice",
        icon: BsBuilding,
        color: "red-400",
        desc: "For organisation the need additional security, control and support",
    },

    {
        id: 5,
        title: "Compare all plans",
        icon: AiOutlineSetting,
        color: "violet-400",
        desc: "",
    },
]
  

const solutionTeams = [
    'Operation','IT','Marketing','Leaders'
]

const solutionUses = [
    'Project Management','Agile Management','Task Management','Request Tracking',
    'Strategic Planning','Remote Teams','Compaign Management','Prouctivity',
    'Creative Prouction'
]

const resourcesLearn = [
    {
        id : 1,
        title : 'Work Management Resources',
        desc : 'Discover best practice, watch webinar, get insight'
    },
    {
        id : 2,
        title : 'Asana Guide',
        desc : 'Get lots of tip tricks and advice to get most from Asana'
    },
    {
        id : 3,
        title : 'Asana Academy',
        desc : 'Sign up for interactive courses and webinar to learn Asana '
    },
    {
        id : 4,
        title : 'Blog',
        desc : 'Discover the latest Asana product and comapny new'
    },
]

const resourcesConnect = [
    {
        id : 16,
        title : 'Events',
        desc : 'Find out about upcoming event near you'
    },
    {
        id : 15,
        title : 'Community Programs',
        desc : 'Connect with the learn from Asana customer around the world'
    },
    {
        id : 14,
        title : 'Support',
        desc : 'Need help? Contact the Asana support team'
    },
    {
        id : 13,
        title : 'Partners',
        desc : 'Learn more about partners programs'
    },
    {
        id : 12,
        title : 'Developers',
        desc : 'Learn more about building app from Asana platform'
    },
    {
        id : 11,
        title : 'Asana Nonprofit',
        desc : 'Get more information on our nonprofit discount program and apply'
    },
    
]

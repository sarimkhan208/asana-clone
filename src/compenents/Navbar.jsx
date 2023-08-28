import React, { useState } from 'react'
import {TbChevronDown} from 'react-icons/tb'
import {CiGlobe} from 'react-icons/ci'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BsArrowRight} from 'react-icons/bs'
import {CgTemplate} from 'react-icons/cg'
import {AiFillQqSquare} from 'react-icons/ai'
import TitleCompoWithIcon from './TitleCompoWithIcon'
import TitleCompo from './TitleCompo'
import HeadingInsideHamburger from './HeadingInsideHamburger'
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
        <div onClick={()=>setMenuOpen(!menuOpen)} className='block laptop:hidden text-[22px] ml-[10px]' >{<RxHamburgerMenu/>}</div>
    </div>
    


    {/* HAMBURGER INSIDE CONTENT */}
    <div className={`${menuOpen?'top-[60px]':'-top-full'} laptop:hidden  absolute ease-in-out duration-500 px-[15px]`}>
        <div onClick={()=>setWhyasana(!whyasana)} className='flex justify-between text-[16px] font-bold font-helvetica tracking-wider border-b-[1px] border-[#EEEBEA] py-[10px]' >
            <div>Why Asana?</div>
            <div  className={`transition-transform transform ease-in-out duration-300 ${whyasana ? 'rotate-180' : ''} text-[#EEEBEA]`} >{<TbChevronDown/>}</div>
        
        {/* INSIDE CONTENT OF WHY ASANA */}
        </div>
            <div className={`${whyasana?'overflow-auto h-auto  mt-[10px] p-[10px]':'overflow-hidden h-0'}`} >
                <HeadingInsideHamburger title={'WHY ASANA'} />

                {
                    whyAsanaContent.map((el)=>(
                        <TitleCompo title={el.title} desc={el.desc} id={el.id} />
                    ))
                }
                <HeadingInsideHamburger title={'FOR YOUR WORKFLOW'} />

                <div className='grid grid-cols-2' >
                    {
                        forYourWorkFlowContent.map((el)=>(
                            <TitleCompo title={el.title} desc={el.desc} id={el.id} />
                        ))
                    }
                </div>

                <HeadingInsideHamburger title={'TEMPLATES'} />

                <TitleCompoWithIcon title={"Template Home"} desc={"Hit the groud running with template designd for your use case"} color={'orange-400'} icon={CgTemplate} />

                <HeadingInsideHamburger title={'POPULAR TEMPLATES'} />

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
            <HeadingInsideHamburger title={'KEY FEATURES'} />
            
            {
                keyFeatures.map((el)=>(
                    <TitleCompoWithIcon title={el.title} desc={el.desc} color={el.color} icon={el.icon} />
                ))
            }
            <HeadingInsideHamburger title={'All PLANS'} />

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
  


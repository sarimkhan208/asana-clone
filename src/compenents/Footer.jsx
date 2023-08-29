import React from 'react'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillInstagram,AiFillYoutube} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='bg-[#0D0E10] pt-[20px]  '>

        <div className='w-[100%] tablet:w-[100%] px-[20px] laptop:px-[0px] laptop:w-[60%] m-auto font-helvetica' >
            <img className='laptop:m-auto' src="https://asana.com/assets/img/logo-icon.svg" alt="" />
            <h1 className='text-[32px] laptop:text-[45px] my-[20px] laptop:text-center font-medium text-[#FFFFFF] tracking-wider' >
                Try the #1 software in project and product management
            </h1>

            <button className='rounded-sm px-[25px] w-[100%] laptop:w-[27%] hover:bg-[#F06A6A] hover:text-black py-[12px] text-[18px] text-black bg-white font-semibold tracking-wider block m-auto' >Get Started</button>
        </div>

        <hr className='text-[#474748] w-[90%] m-auto my-[100px] mb-[50px]' />

        <div className='px-[20px] laptop:px-[100px] grid grid-cols-2 laptop:grid-cols-5 py-[40px] m-auto '>

            <div className='mb-[50px]'>
                <div className='leading-6 text-[15px] font-semibold text-[#A5A4A3] mb-[30px]' >Asana</div>
                {
                    firstRow.map((el)=>(
                        <a href='#' className='cursor-pointer block hover:underline leading-6 text-[15px] font-semibold text-[#FFFFFF] mt-[13px]' >{el}</a>
                    ))
                }
            </div>


            <div className='mb-[50px]'>
                <div className='leading-6 text-[15px] font-semibold text-[#A5A4A3] mb-[30px]' >About Us</div>
                {
                    secondRow.map((el)=>(
                        <a href='#' className='cursor-pointer block hover:underline leading-6 text-[15px] font-semibold text-[#FFFFFF] mt-[13px]' >{el}</a>
                    ))
                }
            </div>

            <div className='mb-[50px]'>
                <div className='leading-6 text-[15px] font-semibold text-[#A5A4A3] mb-[30px]' >WorkFlow Solutions</div>
                {
                    thirdRow.map((el)=>(
                        <a href='#' className='cursor-pointer block hover:underline leading-6 text-[15px] font-semibold text-[#FFFFFF] mt-[13px]' >{el}</a>
                    ))
                }
            </div>

            <div className='mb-[50px]'>
                <div className='leading-6 text-[15px] font-semibold text-[#A5A4A3] mb-[30px]' >Resources</div>
                {
                    fourthRow.map((el)=>(
                        <a href='#' className='cursor-pointer block hover:underline leading-6 text-[15px] font-semibold text-[#FFFFFF] mt-[13px]' >{el}</a>
                    ))
                }
            </div>

            <div className='mb-[50px]'>
                <div className='leading-6 text-[15px] font-semibold text-[#A5A4A3] mb-[30px]' >Learn</div>
                {
                    fifthRow.map((el)=>(
                        <a href='#' className='cursor-pointer block hover:underline leading-6 text-[15px] font-semibold text-[#FFFFFF] mt-[13px]' >{el}</a>
                    ))
                }
            </div>

        </div>

        <div className='bg-[#2A2B2C] block laptop:flex  space-y-8 laptop:space-y-0 justify-center items-center text-[#FFFFFF] text-[15px] py-[30px] px-[30px] gap-[80px]' >

            <div>© 2023 Asana, Inc.</div>
            <div>English</div>
            <div>Terms & Privacy</div>

            <div className='flex' >
                <div className='p-[7px] rounded-full bg-[#0D0E10] text-[#FFFFF] hover:bg-white cursor-pointer mx-[1px] hover:text-black text-[22px] mt-[2px]' >{<AiFillTwitterCircle/>}</div>
                <div className='p-[7px] rounded-full bg-[#0D0E10] text-[#FFFFF] hover:bg-white cursor-pointer mx-[1px] hover:text-black text-[22px] mt-[2px]' >{<BsFacebook/>}</div>
                <div className='p-[7px] rounded-full bg-[#0D0E10] text-[#FFFFF] hover:bg-white cursor-pointer mx-[1px] hover:text-black text-[22px] mt-[2px]' >{<AiFillLinkedin/>}</div>
                <div className='p-[7px] rounded-full bg-[#0D0E10] text-[#FFFFF] hover:bg-white cursor-pointer mx-[1px] hover:text-black text-[22px] mt-[2px]' >{<AiFillInstagram/>}</div>
                <div className='p-[7px] rounded-full bg-[#0D0E10] text-[#FFFFF] hover:bg-white cursor-pointer mx-[1px] hover:text-black text-[22px] mt-[2px]' >{<AiFillYoutube/>}</div>
            </div>

            <div className='hidden laptop:flex gap-3 cursor-pointer' >
                <img src="https://luna1.co/Download_App_Store_Badge_US.svg" alt="" />
                <img src="https://luna1.co/Google_Play_EN.svg" alt="" />
            </div>

        </div>
      
    </div>
  )
}

export default Footer


let firstRow = [
    'Home',
  'Product',
  "What's New",
  'Pricing',
  'Premium',
  'Business',
  'Enterprise',
  'Customer Success',
  'Asana Templates',
  'Trust & Security',
  'Status'
]

let secondRow = [
    'Company',
  'Leadership',
  'Customers',
  'Diversity',
  'Careers',
  'Press',
  'Wavelength',
  'Blog',
  'Investor Relations',
  'Sitemap',
  'Modern Slavery Transparency Statement'
]

let thirdRow = [
    'Project Management',
  'Goal Management',
  'Agile Management',
  'Task Management',
  'Increase Productivity',
  'Work Management',
  'Project Planning',
  'To Do Lists',
  'See All Uses',
  'See All Teams'
]
const resources = [
    'Asana Guide',
    'Forum',
    'Support',
    'App Directory',
    'Developers & API',
    'Partners',
    'Asana Community',
    'Events',
    'Asana for Nonprofits',
    'Accessibility'
  ];
  
  const fourthRow = [
    'Asana Guide',
    'Forum',
    'Support',
    'App Directory',
    'Developers & API',
    'Partners',
    'Asana Community',
    'Events',
    'Asana for Nonprofits',
    'Accessibility'
  ];
  
  const fifthRow = [
    '11 Leadership Styles',
    '110 Icebreaker Questions',
    'Executive Summary Tips',
    'Impostor Syndrome Tips',
    'Prevent Team Burnout',
    'SWOT Analysis Tips',
    'What are OKRs?',
    'What are SMART Goals?',
    'What is Scope Creep?',
    'See All Guides'
  ];
  
  // You can use the `guides` array in your code as needed
  
  
  
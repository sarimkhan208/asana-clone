import React from 'react'
import {FaRegComment} from 'react-icons/fa'

const BlogsCard = ({image,title,desc,date}) => {
  return (
    <div className='rounded-t-md bg-white p-[20px] cursor-pointer'>
        <div >
            <img  src={image} alt="" />

            <div>

                <h4 className='hover:text-blue-400 text-[22px] mt-[20px] mb-[10px] text-black leading-6 font-helvetica font-bold tracking-widest' >{title}</h4>
                <p className='text-[14px] text-[#B9BCC0] font-helvetica font-medium tracking-widest' >{date}</p>
                <p className='text-[14px] text-[#6C6D76] font-helvetica font-semibold tracking-widest mt-[20px]' >{desc}</p>

            </div>

        </div>

        <div className=' pt-[10px] mt-[15px] flex justify-between text-[12px] border-t border-[#B9BCC0]'>

            <div className='text-blue-300'>Insight for leaders</div>
            <div className='flex text-[#B9BCC0] font-semibold'>
                <div className='flex mr-[10px]'>0  <span className='mt-[3px] ml-2'  >{<FaRegComment/>}</span></div>
                <div>47 shares</div>
            </div>

        </div>

    </div>
    
  )
}

export default BlogsCard
{/* <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className='w-[250px] h-[250px]' ><img src={image} alt="" className="w-full  object-cover" /></div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{desc}</p>
        <div className="flex items-center mt-4">
          <svg
            className="w-6 h-6 fill-current text-gray-400 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {/* Your icon SVG code here */}
    //       </svg>
    //       <svg
    //         className="w-6 h-6 fill-current text-gray-400 mr-2"
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 24 24"
    //       >
    //         {/* Your icon SVG code here */}
    //       </svg>
    //       {/* Add more icons if needed */}
    //     </div>
    //   </div>
    // </div> */}
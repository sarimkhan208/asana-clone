import React from 'react'
import {BsArrowRight} from 'react-icons/bs'

const GetStartedEasily = () => {
  return (
    <div className='px-[20px] py-[40px]  laptop:px-[60px] laptop:py-[60px] bg-[#F5F3F3] font-helvetica' >
        <h2 className='text-[36px]  leading-8 text-[#0D0E10] font-medium' >Get started easily</h2>
        <p className='leading-6 text-[18px] my-[30px] font-medium text-[#675268]' >Whether you want to start with a pre-built template for marketing, operations, product, learn more from a demo, or talk to our support team, Asana can help with that</p>
    
        <div className='mt-[40px] grid grid-cols-1 laptop:grid-cols-3 gap-4'>

            <div>
                <img src="https://assets.asana.biz/transform/e8a84139-c507-4e7e-b4ba-42ae83cbfcea/homepage-template-2x-EN-png" alt="" />
                <div className='p-[30px] bg-[#FFFFFF]'>
                    <p className='text-[#0D0E10] font-bold text-[22px] tracking-wider leading-4' >Start with a template</p>
                    <div className='mt-[30px] flex justify-between text-[16px] font-[700] tracking-widest text-[#0D0E10]'>
                        <div>See Template</div>
                        <div><BsArrowRight/></div>

                    </div>
                </div>
            </div>


            <div>
                <img src="https://assets.asana.biz/transform/edd2fe33-dd67-42be-91a5-f7ad125f9a8c/homepage-demo-2x-EN" alt="" />
                <div className='p-[30px] bg-[#FFFFFF]'>
                    <p className='text-[#0D0E10] font-bold text-[22px] tracking-wider leading-4' >See Asana In Action</p>
                    <div className='mt-[30px] flex justify-between text-[16px] font-[700] tracking-widest text-[#0D0E10]'>
                        <div>View Demo</div>
                        <div><BsArrowRight/></div>

                    </div>
                </div>
            </div>


            <div>
                <img src="https://assets.asana.biz/transform/3801a4c7-91e4-4c79-919d-4c061d03fab4/homepage-sales-2x-EN" alt="" />
                <div className='p-[30px] bg-[#FFFFFF]'>
                    <p className='text-[#0D0E10] font-bold text-[22px] tracking-wider leading-4' >Talk with our sales team</p>
                    <div className='mt-[30px] flex justify-between text-[16px] font-[700] tracking-widest text-[#0D0E10]'>
                        <div>Contact sales</div>
                        <div><BsArrowRight/></div>

                    </div>
                </div>
            </div>

        </div>

    </div>


  )
}

export default GetStartedEasily
